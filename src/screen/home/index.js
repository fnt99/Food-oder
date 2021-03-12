import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
const HomeScreen = ({params}) => {
    return(
        <View style={styles.container}>
        <View></View>
    </View>
)};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default HomeScreen;
