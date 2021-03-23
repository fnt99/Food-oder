import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Input from "../components/Input";
import Button from "../components/Button";

const title = "Quên mật khẩu";
const tip = "Hãy nhập số điệm thoại của bạn";

const ForgetPassword = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/background3.jpg")}
      style={{ width: width, height: height }}
    >
      <View style={styles.darklayer} />
      <View style={styles.logo}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.tip}>
        <Text style={styles.tipText}>{tip}</Text>
      </View>
      <View style={styles.input}>
        <Input placeholder="your phone number" password />
      </View>
      <View
        style={{
          marginTop: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          text="Tiến hành"
          onPress={() => {
            navigation.navigate("Otp");
          }}
        />
      </View>
    </ImageBackground>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Nunito-ExtraBold",
  },
  tip: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  tipText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Nunito-SemiBold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ForgetPassword;
