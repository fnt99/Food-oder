import React from 'react';
import { Image,StyleSheet} from 'react-native';

const HeaderTitle = ({
    onPress,params
}) => (
   <Image style={{marginLeft:15,}} source={require('../../assets/images/header-logo.png')}></Image>
);
export default HeaderTitle;
