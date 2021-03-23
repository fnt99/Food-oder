import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Background = ({ children, style, ...rest }) => (
  <View style={styles.container}>
    <View style={styles.top_shadow}></View>
    {children}
    <View style={styles.bottom_shadow}></View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  top_shadow: {
    position: "absolute",
    top: -10,
    backgroundColor: "#F5F5F7",
    width: width,
    height: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  bottom_shadow: {
    position: "absolute",
    bottom: 2,
    backgroundColor: "#F5F5F7",
    width: width,
    height: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
});
export default Background;
