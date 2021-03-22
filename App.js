import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {createSwitchNavigator} from '@react-navigation/compat'
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/TabNavigator";

import * as Font from "expo-font";

import Login from "./src/screen/Login";
import OnBoarding from "./src/screen/OnBoarding";
import Otp from "./src/screen/Otp";
import ForgetPassword from "./src/screen/ForgetPassword";
import MobileNumber from "./src/screen/MobileNumber";
import TabNavigator from "./src/navigation/TabNavigator";
import SettingsStack from './src/navigation/SettingsStack'
const customFonts = {
  "CircularStdBold": require("./assets/fonts/CircularStdBold.ttf"),
  "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
};

const AppNavigator = createSwitchNavigator({
  OnBoarding:{screen:OnBoarding},
  Login:{screen:Login},
  ForgetPassword:{screen:ForgetPassword},
  Otp:{screen:Otp},
  MobileNumber:{screen:MobileNumber},
  Settings:SettingsStack,
  Home:TabNavigator
},
{
  initialRouteName:'OnBoarding'
})

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
  // return(
  // <View style={styles.container}>
  //   { assetsLoaded ? <Otp/> : <ActivityIndicator size='small'/>}
  // </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
