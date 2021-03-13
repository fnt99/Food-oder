import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const HeaderChangeLanguage = ({ onPress, params }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 13 }}>VN</Text>
      <Image
        style={{ marginLeft: 3, width: 20, height: 20 }}
        source={require("../../assets/images/dropdown.png")}
      />
    </TouchableOpacity>
  );
};
export default HeaderChangeLanguage;
