import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import TrackScreen from '../screen/track';
import HeaderTitle from "../components/HeaderTitle"
const TrackStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Theo dõi' component={TrackScreen}
                options={{headerTitle :props =><HeaderTitle/>}}
            />
        </Stack.Navigator>
    )
};

export default TrackStack;
