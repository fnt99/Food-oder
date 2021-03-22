import React, { Component, useLayoutEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";

import MapView,{Marker,Polyline,PROVIDER_GOOGLE}from "react-native-maps";
import carImage from "../../../assets/images/car.png";
import Button from "../../components/Button";

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 21.038275;
const LONGITUDE = 105.7693577;

const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA + ASPECT_RATIO;
const TARGET_LATITUDE = 21.0383;
const TARGET_LONGITUDE = 105.7793577;
const TARGET_COORDINATE = {
  latitude: TARGET_LATITUDE ,
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
      latitudeDelta: LATITUDE_DELTA ,
      longitudeDelta: LONGITUDE_DELTA,
      initialRegion:{
        latitude:LATITUDE,
        longitude:LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
    });
    this.updateMap();
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
          initialRegion={
            this.state.initialRegion
          }
        >
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.28, y: 0.5 }}
            image={carImage}
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
              0 KM
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
            <Button text="Theo dõi đơn hàng" />
          </View>
        </View>
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
});
