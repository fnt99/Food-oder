import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Button from '../../components/Button'
const PaymentScreen = ({navigation,route}) => {
    return(
        <View style={styles.container}>
            <View>
            </View>
        <View style={{paddingTop:20}}></View>
        <Button text ='Xác nhận' onPress={()=>{
            navigation.push('Xác nhận')
        }}/>
    </View>
)};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default PaymentScreen;
