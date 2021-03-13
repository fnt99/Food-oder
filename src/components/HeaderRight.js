import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet } from 'react-native';

const HeaderRight = ({
    onPress,params
}) => {
    return(
    <View >   
        <TouchableOpacity  style={{marginRight:10}} onPress={onPress}>
                <Image style={{width:25,height:25}} source={require('../../assets/images/cart.png')}/>
        </TouchableOpacity>
    </View>
    )
};
export default HeaderRight;
