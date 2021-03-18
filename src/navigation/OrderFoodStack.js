import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OderMethodScreen from "../screen/order/OderMethod";
import HeaderTitle from "../components/HeaderTitle";
import DeliveryAddressScreen from "../screen/order/DeliveryAddress";
import DeliveryAddressConfirmedScreen from "../screen/order/DeliveryAddressConfirmed";
import MenuScreen from "../screen/order/Menu";
import FoodScreen from '../screen/order/Food';
import SelectItemScreen from '../screen/order/SelectItem'
import ChoicesScreen from '../screen/order/Choices'
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
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="SelectItemScreen"
        component={SelectItemScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="ChoicesScreen"
        component={ChoicesScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default OderFoodStack;
