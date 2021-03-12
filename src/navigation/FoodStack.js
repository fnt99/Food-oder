import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import FoodScreen from '../screen/food';

const FoodStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Món ăn' component={FoodScreen}/>
        </Stack.Navigator>
    )
};

export default FoodStack;
