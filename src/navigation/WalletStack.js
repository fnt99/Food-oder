import React from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import PaymentScreen from '../screen/wallet/Payment';
import ConfirmedScreen from '../screen/wallet/Confirmed';
import SuccessScreen from '../screen/wallet/Success';
import HeaderTitle from "../components/HeaderTitle"
const WalletStack = ({params}) => {
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator
        initialRouteName='Thanh Toán'>
            <Stack.Screen name = 'Thanh Toán' component={PaymentScreen}
                options={{headerTitle :props =><HeaderTitle/>}}
            />
            <Stack.Screen name = 'Xác nhận' component={ConfirmedScreen}
                options={{headerTitle :props =><HeaderTitle/>}}
            />
            <Stack.Screen name = 'Hoàn thành' component={SuccessScreen}
                options={{headerTitle :props =><HeaderTitle/>}}
            />
        </Stack.Navigator>
    )
};

export default WalletStack;
