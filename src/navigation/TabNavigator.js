import React from 'react';
import { Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import FoodStack from './FoodStack';
import FavouritesStack from './FavouritesStack';
import TrackStack from './TrackStack';
import WalletStack from './WalletStack';

const TabNavigator = ({params}) => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
        initialRouteName='HomeStack'>
            <Tab.Screen name='Trang chủ'component={HomeStack}
            options={{
                tabBarLabel:'Trang chủ',
                tabBarIcon:({focused,color,size})=>
                {
                    <Image 
                    source={focused 
                        ? require('../../assets/images/home.png')
                        : require('../../assets/images/home.png')}
                ></Image>
                },
            }}
            ></Tab.Screen>
            <Tab.Screen name='Món ăn'component={FoodStack}></Tab.Screen>
            <Tab.Screen name='Yêu thích'component={FavouritesStack}></Tab.Screen>
            <Tab.Screen name='Theo dõi'component={TrackStack}></Tab.Screen>
            <Tab.Screen name='Ví'component={WalletStack}></Tab.Screen>
        </Tab.Navigator>
    )

}

export default TabNavigator;
