import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ButtonInOder = ({ text, onPress, ...params }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 48,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#000000",
  },
  text: {
    fontFamily: "",
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});
export default ButtonInOder;
