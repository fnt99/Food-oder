import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import TrackScreen from '../screen/track';

const TrackStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Theo dõi' component={TrackScreen}/>
        </Stack.Navigator>
    )
};

export default TrackStack;
