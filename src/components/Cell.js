import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Cell = ({ style, data, renderItem, onPress, ...params }) => {
  return data ? (
    data.map((entry, index) => {
      return (
        <View style={styles.container}>
          <View style={styles.leftView}>
           {renderItem(entry,index)}
          </View>
          <View style={styles.rightView}>
            <Image
              style={{ width: 20, height: 20 }}
              source={entry.icon}
            />
          </View>
        </View>
      );
    })
  ) : (
    <View />
  );
};
const styles = StyleSheet.create({
  container: {
    height: 52,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#F5ECCE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  leftView: {
    marginLeft: 20,
  },
  rightView: {
    marginRight: 20,
  },
});

export default Cell;
