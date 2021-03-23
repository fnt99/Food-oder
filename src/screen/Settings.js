import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Background from "../components/Background";
import HeaderRight from "../components/HeaderRight";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");
const Settings = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => {
            navigation.navigate("Ví");
          }}
        />
      ),
      headerLeft: () => (
        <HeaderBack
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  });

  return (
    <Background>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/background1.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/images/logo.png")} />
          </View>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 270 }}>
            <Button
              text="Đăng xuất "
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
});
export default Settings;
