import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FavouritesScreen from "../screen/favourites";
import HeaderTitle from "../components/HeaderTitle";
import SelectItemScreen from '../screen/order/SelectItem';
const FavouritesStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Yêu thích"
        component={FavouritesScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
      <Stack.Screen
        name="SelectItemScreen"
        component={SelectItemScreen}
        options={{ headerTitle: (props) => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default FavouritesStack;
