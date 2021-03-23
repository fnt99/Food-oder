import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TitleInOder = ({ title, subTitle, ...params }) => (
  <View style={styles.title}>
    {title ? <Text style={styles.titleText}>{title}</Text> : <View />}
    {subTitle ? <Text style={styles.subtitleText}>{subTitle}</Text> : <View />}
  </View>
);

const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
  },
  subtitleText: {
    fontFamily: "Nunito-Bold",
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 28,
  },
  titleText: {
    fontFamily: "Nunito-Bold",
    color: "#FF9F1C",
    fontSize: 20,
    lineHeight: 27,
  },
});
export default TitleInOder;
