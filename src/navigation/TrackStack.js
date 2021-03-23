import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TrackScreen from "../screen/track";
import HeaderTitle from "../components/HeaderTitle";
import HeaderLeftTrack from "../components/HeaderLeftTrack";
import HeaderRightTrack from "../components/HeaderRightTrack";
const TrackStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Theo dõi"
        component={TrackScreen}
        options={{
          headerTitle: (props) => <HeaderTitle />,
          headerRight: (props) => <HeaderRightTrack />,
          headerLeft: (props) => <HeaderLeftTrack />,
        }}
      />
    </Stack.Navigator>
  );
};

export default TrackStack;
