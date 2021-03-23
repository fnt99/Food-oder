import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Cell = ({ style, data, renderItem, onPress, ...params }) => {
  return data ? (
    data.map((entry, index) => {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => onPress(entry, index)}
        >
          <View style={styles.leftView}>{renderItem(entry, index)}</View>
          <View style={styles.rightView}>
            <Image
              style={{ width: 20, height: 20 }}
              source={entry.selected ? entry.activeIcon : entry.icon}
            />
          </View>
        </TouchableOpacity>
      );
    })
  ) : (
    <View />
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: "#F5ECCE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 6,
  },
  leftView: {
    marginLeft: 20,
  },
  rightView: {
    marginRight: 20,
  },
});

export default Cell;
