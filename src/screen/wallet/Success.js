import React,{useLayoutEffect} from 'react';
import { Text, View,StyleSheet,Alert } from 'react-native';
import HeaderRight from '../../components/HeaderRight';

const SuccessScreen = ({navigation,route}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(<HeaderRight onPress={()=>{navigation.navigate('Ví')}}/>),

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
                    Succes Screen
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
export default SuccessScreen;
