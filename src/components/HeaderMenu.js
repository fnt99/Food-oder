import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet } from 'react-native';

const HeaderMenu = ({
    onPress,params
}) => {
    return(
    <View>   
        <TouchableOpacity  style={{marginLeft:10}} onPress={onPress}>
                <Image style={{width:25,height:25}} source={require('../../assets/images/menu.png')}/>
        </TouchableOpacity>
    </View>
    )
};
export default HeaderMenu;