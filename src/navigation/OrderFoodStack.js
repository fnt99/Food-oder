import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OderMethodScreen from "../screen/order/OderMethod";
import HeaderTitle from "../components/HeaderTitle";
import DeliveryAddressScreen from "../screen/order/DeliveryAddress";
import DeliveryAddressConfirmedScreen from "../screen/order/DeliveryAdressConfirmed";
const OderFoodStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Đặt món"
    >
      <Stack.Screen
        name="Đặt món"
        component={OderMethodScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="Đặt ship"
        component={DeliveryAddressScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="Nhập địa chi"
        component={DeliveryAddressConfirmedScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default OderFoodStack;
