import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import FavouritesScreen from '../screen/favourites';


const FavouritesStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Yêu thích' component={FavouritesScreen}/>
        </Stack.Navigator>
    )
};

export default FavouritesStack ;
