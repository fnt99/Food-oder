import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
const { width, height } = Dimensions.get("window");
import Input from "../components/Input";
import Button from "../components/Button";

const title = "Chào mừng";
const tip = "Đăng nhập để sử dụng ";
const signup = "Người dùng mới? Đăng ký";
const terms =
  "Bằng cách đăng ký, bạn cho thấy rằng bạn đã đọc và đồng ý với Điều khoản dịch vụ của chúng tôi";
const Login = ({ params }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/background1.jpg")}
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
        <Input
          icon={(require = "../../assets/images/mail-icon.png")}
          placeholder="Nhập số điện thoại"
        />
        <View style={{ paddingTop: 18 }} />
        <Input
          icon={(require = "../../assets/images/lock-icon.png")}
          placeholder="Nhập mật khẩu"
          password
        />
      </View>
      <View style={styles.remember}>
        <View>
          <RadioGroup size={16} thickness={2} color="#FFFFFF">
            <RadioButton color="#FFFFFF" value={""}>
              <Text style={styles.rememberText}>Ghi nhớ tôi</Text>
            </RadioButton>
          </RadioGroup>
        </View>
        <View>
          <Text style={styles.forgetText}>Quên mật khẩu ?</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button text="Đăng nhập" />
      </View>
      <View style={styles.signup}>
        <Text style={styles.signupText}>{signup}</Text>
      </View>
      <View style={styles.terms}>
        <Text style={styles.termsText}>{terms}</Text>
      </View>
    </ImageBackground>
  </View>
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Nunito-ExtraBold",
  },
  tip: {
    marginLeft: 70,
    marginRight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  tipText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Nunito-SemiBold",
  },
  input: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  remember: {
    marginTop: 10,
    marginLeft: 25,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.8,
  },
  rememberText: {
    color: "#FFFFFF",
    fontFamily: "Nunito-SemiBold",
    fontSize: 12,
  },
  forgetText: {
    color: "#FFFFFF",
    fontFamily: "Nunito-SemiBold",
    fontSize: 12,
  },
  signup: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#FF9F1C",
    fontFamily: "Nunito-SemiBold",
    fontSize: 12,
  },
  terms: {
    marginTop: 15,
    marginRight: 80,
    marginLeft: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  termsText: {
    color: "#FF9F1C",
    fontFamily: "Nunito-SemiBold",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
export default Login;
