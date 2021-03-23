import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Counpo = ({ icon, title, desc }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.left_circle}></View>
      <View style={styles.content}>
        <Image source={icon} style={{ width: 70, height: 70 }} />
        <View style={{ marginLeft: 10, paddingTop: 11 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <View style={styles.right_circle}></View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 80,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "#F5ECCE",
    borderRadius: 6,
    justifyContent: "center",
  },
  wrapper: {
    marginLeft: -30,
    marginRight: -30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  left_circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  content: {
    flexDirection: "row",
  },
  right_circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 15,
  },
  desc: {
    fontFamily: "Nunito-Bold",
    fontSize: 11,
  },
});
export default Counpo;
