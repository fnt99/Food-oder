import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GroupButton = ({ activeColor, buttons, ...rest }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button) => {
        return (
          <TouchableOpacity
            onPress={button.onPress}
            style={{
              flex: 1,
              height: 45,
              backgroundColor: button.activated ? activeColor : "#FFFFFF",
              borderRadius: 6,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                { color: button.activated ? "#FFFFFF" : "#000000" },
                styles.text,
              ]}
            >
              {button.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "transparent",
  },
  text: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 16,
    lineHeight: 18,
  },
});

export default GroupButton;
