import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const HeaderRightHome = ({ onPress, params }) => {
  return (
    <View>
      <TouchableOpacity style={{ marginRight: 10 }} onPress={onPress}>
        <Image
          style={{ width: 20, height: 20, marginLeft: 5 }}
          source={require("../../assets/images/settings.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderRightHome;
