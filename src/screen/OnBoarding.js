import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions, Alert,StatusBar } from "react-native";
import Swiper from "react-native-swiper";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");

export class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { id: 1, image: require("../../assets/images/background1.jpg") },
        { id: 2, image: require("../../assets/images/background2.jpg") },
        { id: 3, image: require("../../assets/images/background3.jpg") },
        { id: 4, image: require("../../assets/images/background4.png") },
        { id: 5, image: require("../../assets/images/background5.jpg") },
      ],
    };
  }
  _btnClick = () => {
    this.props.navigation.navigate('Login')
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <Swiper
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {this.state.slides.map((slide) => {
            return (
              <View key={slide.id} style={styles.slide}>
                <Image source={slide.image} style={styles.image} />
              </View>
            );
          })}
        </Swiper>
        <View style={styles.darklayer} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>"Món ăn Việt - Yêu thương quay về"</Text>
        </View>
        <View style={styles.button}>
          <Button
            text="Bắt đầu sử dụng"
            onPress={() => {
              this._btnClick();
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  logoContainer: {
    width: width,
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    width: 130,
    position: "absolute",
    bottom: 180,
    left: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "Nunito-Bold",
    color: "#D8CEF6",
    fontSize: 30,
    fontWeight: "600",
  },
  button: {
    width: width,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 81,
  },
  darklayer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.4,
  },
});
export default OnBoarding;
