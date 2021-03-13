import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const HeaderBack = ({ onPress, ...params }) => (
  <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
    <Image
      style={{ marginLeft: 3, width: 20, height: 20 }}
      source={require("../../assets/images/back.png")}
    />
  </TouchableOpacity>
);

export default HeaderBack;
