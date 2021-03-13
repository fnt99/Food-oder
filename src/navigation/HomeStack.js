import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screen/home';
import HeaderTitle from "../components/HeaderTitle"
const HomeStack = ({pops,...params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Trang chủ' component={HomeScreen}
                options={{headerTitle :props =><HeaderTitle/>}}
            />
        </Stack.Navigator>
    )
};

export default HomeStack;
