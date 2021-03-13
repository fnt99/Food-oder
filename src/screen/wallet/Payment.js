import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import Button from "../../components/Button";
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
            navigation.navigate("Trang chủ");
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
        <Text style={{ color: "#FFA07A", fontSize: 22 }}>Payment Screen</Text>
      </View>
      <View style={{ paddingTop: 20 }}></View>
      <Button
        text="Xác nhận"
        onPress={() => {
          navigation.push("Xác nhận");
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
