import React,{useLayoutEffect} from 'react';
import { Text, View,StyleSheet,Alert } from 'react-native';
import HeaderRight from '../../components/HeaderRight'
import HeaderChangeLanguage from '../../components/HeaderChangeLanguage'
const FoodScreen = ({navigation,route}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(<HeaderRight onPress={()=>{navigation.navigate('Ví')}}/>),
            headerLeft:()=>(<HeaderChangeLanguage/>)
        })
    })
    return(
    <View style={styles.container}>
        <View
            style={{
                width:250,
                height:100,
                backgroundColor:'#000000',
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <Text 
                style={{color:'#FFA07A',fontSize:22}}
                >
                    Food Screen
            </Text>
        </View>
    </View>
    )};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default FoodScreen;
