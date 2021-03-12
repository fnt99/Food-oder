import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import PaymentScreen from '../screen/wallet/Payment';
import ConfirmedScreen from '../screen/wallet/Confirmed';
import SuccessScreen from '../screen/wallet/Success';
const WalletStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator
        initialRouteName='Thanh Toán'>
            <Stack.Screen name = 'Thanh Toán' component={PaymentScreen}/>
            <Stack.Screen name = 'Xác nhận' component={ConfirmedScreen}/>
            <Stack.Screen name = 'Hoàn thành' component={SuccessScreen}/>
        </Stack.Navigator>
    )
};

export default WalletStack;
