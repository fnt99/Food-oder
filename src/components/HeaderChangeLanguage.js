import React from 'react';
import { Text, View,Image, } from 'react-native';

const HeaderChangeLanguage = ({
    onPress,params
}) => {
    return(
    <View style={{marginLeft:10,flexDirection:'row'}}>
        <Text>VN</Text>
        <Image style={{width:20,height:20}} source={require('../../assets/images/dropdown.png')}/>
    </View>
    )
};
export default HeaderChangeLanguage;