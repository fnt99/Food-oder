import React, { Component, useLayoutEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import haversine from "haversine";
import Button from "../../components/Button";

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 21.0398836;
const LONGITUDE = 105.7611309;

const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const TARGET_LATITUDE = 21.0395272;
const TARGET_LONGITUDE = 105.7613271;
const TARGET_COORDINATE = {
  latitude: TARGET_LATITUDE - 0.001,
  longitude: TARGET_LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default class TrackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: LATITUDE, longitude: LONGITUDE },
      curAng: 45,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      initialRegion: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      carRot: "25deg",
      carStep1: 0,
      carStep2: 0,
      routeCoordinates: [],
      distance: 0.56,
      modalVisible: false,
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  emulatorNavigation() {
    this.interval1 = setInterval(() => {
      this.changePosition(-0.0002 / 10, -0.0001 / 10);
      this.setState({ carStep1: this.state.carStep1 + 1 });
      if (this.state.carStep1 === 55) {
        clearInterval(this.interval1);
        this.setState({ carStep1: 0 });
      }
    }, 100);
    this.interval2 = setInterval(() => {
      this.setState({ carStep2: this.state.carStep2 + 1 });
      if (this.state.carStep2 >= 90) {
        this.setState({ carRot: "-65deg" });
        this.changePosition(-0.0001 / 10, +0.000218 / 10);
      }
      if (this.state.carStep2 === 123) {
        clearInterval(this.interval2);
        this.setState({ carStep2: 0 });
        this.setState({ modalVisible: true });
      }
    }, 100);
  }

  calcDistance = (newLatlng) => {
    const { prevPos } = this.state;
    return prevPos ? haversine(prevPos, newLatlng) : 0;
  };
  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
      routeCoordinates: this.state.routeCoordinates.concat([
        { latitude, longitude },
      ]),
      distance:
        this.state.distance -
        this.calcDistance({
          latitude,
          longitude,
        }),
    });
    // this.updateMap();
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  render() {
    return (
      <View style={styles.flex}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(el) => (this.map = el)}
          style={styles.flex}
          minZoomLevel={15}
          initialRegion={this.state.initialRegion}
        >
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.4, y: 1.1 }}
          >
            <Image
              source={require("../../../assets/images/car.png")}
              style={{ transform: [{ rotate: this.state.carRot }] }}
            />
          </MapView.Marker>
          <Marker coordinate={TARGET_COORDINATE}>
            <Image source={require("../../../assets/images/location.png")} />
          </Marker>
          <Polyline
            coordinates={this.state.routeCoordinates}
            strokeWidth={5}
            strokeColor={"#FF9F1C"}
          />
        </MapView>
        <View style={styles.buttonContainerUpDown}>
          <View
            style={{
              height: 48,
              flex: 1,
              justifyContent: "center",
              marginTop: 25,
              marginRight: 20,
              marginLeft: 30,
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                fontSize: 18,
                color: "#FF9F1C",
              }}
            >
              {parseFloat(this.state.distance).toFixed(2) > 0
                ? parseFloat(this.state.distance).toFixed(2)
                : 0}
              KM
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainerUpDown}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 25,
              marginRight: 20,
              marginLeft: 30,
            }}
          >
            <Button
              text="Theo dõi đơn hàng"
              onPress={() => {
                this.emulatorNavigation();
              }}
            />
          </View>
        </View>
        <Modal
          isVisible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalView2}>
                <Image
                  style={{
                    width: 40,
                    height: 50,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  source={require("../../../assets/images/done.png")}
                />
                <Text style={styles.modalTitle}>Sản phẩm đã được giao đến</Text>
                <Text style={styles.modalDesc}>
                  Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: "100%",
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "column",
    justifyContent: "center",
  },
  carImage: {
    width: 30,
    height: 30,
  },
  button: {
    backgroundColor: "rgba(100,100,100,0.2)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  image: { width: 30, height: 30 },
  up: {
    alignSelf: "flex-start",
  },
  down: {
    alignSelf: "flex-end",
  },
  left: {
    alignSelf: "flex-start",
  },
  right: {
    alignSelf: "flex-end",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView2: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 30,
  },
  modalTitle: {
    marginTop: 20,
    color: "#FF9F1C",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 15,
    lineHeight: 20,
  },
  modalDesc: {
    color: "#1D2126",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
    lineHeight: 20,
    textAlign: "center",
  },
  modalButton: {
    height: 48,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9F1C",
    borderRadius: 10,
  },
  textStyle: {
    color: "#FFFFFF",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
});
