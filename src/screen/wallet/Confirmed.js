import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";

const PaymentScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => {
            navigation.navigate("Ví");
          }}
        />
      ),
      headerLeft: () => (
        <HeaderBack
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 250,
          height: 100,
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFA07A", fontSize: 22 }}>Confirmed Screen</Text>
      </View>
      <View style={{ paddingTop: 20 }}></View>
      <Button
        text="Hoàn thành"
        onPress={() => {
          navigation.push("Hoàn thành");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PaymentScreen;
