import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OderMethodScreen from "../screen/food/OderMethod";
import HeaderTitle from "../components/HeaderTitle";
const FoodStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Món ăn"
        component={OderMethodScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default FoodStack;
