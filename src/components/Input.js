import React from 'react';
import {Image,View,StyleSheet,Dimensions,TextInput } from 'react-native';
const {width,height}=Dimensions.get('window');
const input = ({
    placeholder,icon,password,...rest
}) => (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Image source={icon}/>
        </View>
        <TextInput 
        style={styles.input}
        secureTextEntry={password}
        placeholder={placeholder}
        ></TextInput>
    </View>
);

const styles = StyleSheet.create({
    container:{
        width:width-60,
        height:40,
        backgroundColor:'#FFFFFF',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#FFFFFF',
        borderColor:'#FFFFFF',
        color:'#727C8E',
        fontFamily:'Nunito-SemiBold',
        fontSize:12,
        fontWeight:'500',
        paddingLeft:15,
    },
    icon:{
        paddingLeft:20,
    }
});
export default input;
