import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            <Tab.Screen name='Trang chủ' component={HomeStack}
                options={{
                    tabBarLabel:'Trang chủ',
                    tabBarIcon:({focused,color,size})=>(
                        <Image style={{width:25,height:25}} source={
                            focused ? require('../../assets/images/home-active.png') : require('../../assets/images/home.png')
                        }></Image>
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen name='Món ăn'component={FoodStack}
            options={{
                tabBarLabel:'Món ăn',
                tabBarIcon:({focused,color,size})=>(
                    <Image style={{width:25,height:25}} source={
                        focused ? require('../../assets/images/food-active.png') : require('../../assets/images/food.png')
                    }></Image>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name='Yêu thích'component={FavouritesStack}
            options={{
                tabBarLabel:'Yêu thích',
                tabBarIcon:({focused,color,size})=>(
                    <Image style={{width:25,height:25}} source={
                        focused ? require('../../assets/images/favourites-active.png') : require('../../assets/images/favourites.png')
                    }></Image>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name='Theo dõi'component={TrackStack}
            options={{
                tabBarLabel:'Theo dõi',
                tabBarIcon:({focused,color,size})=>(
                    <Image style={{width:25,height:25}} source={
                        focused ? require('../../assets/images/track-active.png') : require('../../assets/images/track.png')
                    }></Image>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name='Ví'component={WalletStack}
            options={{
                tabBarLabel:'Ví',
                tabBarIcon:({focused,color,size})=>(
                    <Image style={{width:25,height:25}} source={
                        focused ? require('../../assets/images/wallet-active.png') : require('../../assets/images/wallet.png')
                    }></Image>
                )
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )

}
const styles = StyleSheet.create({
    navigatorCntainer:{
    }
});
export default TabNavigator;
