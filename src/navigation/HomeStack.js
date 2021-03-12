import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screen/home';
const HomeStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Trang chủ' component={HomeScreen}/>
        </Stack.Navigator>
    )
};

export default HomeStack;
