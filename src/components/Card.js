import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const Card = ({ params }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ marginLeft: 20, width: 70, height: 70 }}
          source={require("../../assets/images/hamburgerfull2.jpg")}
        />
      </View>
      <View style={{ justifyContent: "center", marginLeft: 50 }}>
        <Text style={{ color: "#000000", fontSize: 14, lineHeight: 19 }}>
          1 Hamburger phô mai thit
        </Text>
        <Text style={{ color: "#727C8E", fontSize: 14, lineHeight: 19 }}>
          Hamburger phô mai
        </Text>
        <Text style={{ color: "#727C8E", fontSize: 14, lineHeight: 19 }}>
          Gói khoai tây chiên
        </Text>
        <Text style={{ color: "#727C8E", fontSize: 14, lineHeight: 19 }}>
          Cocacola (250 ml)
        </Text>
      </View>
    </View>
    <View style={{ alignItems: "flex-end", marginRight: 10, marginBottom: 20 }}>
      <Text style={{ color: "#FF9F1C", fontSize: 15, lineHeight: 20 }}>
        60000 VNG
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 2,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },
});

export default Card;
