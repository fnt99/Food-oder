import React from 'react';
import { Text,Image, View,StyleSheet,ImageBackground,Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');
import Input from '../components/Input';

const title='WellCome!';
const tip='Login to countinue App';
const singup ='New user? Sign up';
const terms='By signing up you indicate that you haver read and agreed the the Patch Terms of Service';
const Login = ({
    params,
}) => (
    <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/images/background1.jpg')}
            style={{width:width,height:height}}
        >
        <View style={styles.darklayer}/>
        <View  style={styles.logo}>
            <Image source={require('../../assets/images/logo.png')}/>
        </View>
        <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.tip}>
            <Text style={styles.tipText}>{tip}</Text>
        </View>
        <View style={styles.input}>
            <Input icon={require=('../../assets/images/mail-icon.png')} placeholder='Email address'/>
            <View style={{paddingTop:18}}/>
            <Input icon={require=('../../assets/images/lock-icon.png')} placeholder='Password' password/>
        </View>
        </ImageBackground>
    </View>
);
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    darklayer:{
        position: 'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'#000000',
        opacity:0.4,
    },
    logo:{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        color:'#FFFFFF',
        fontSize:22,
        fontFamily:'Nunito-ExtraBold',
    },
    tip:{
        marginLeft:70,
        marginRight:70,
        justifyContent:'center',
        alignItems:'center'
    },
    tipText:{
        color:'#FFFFFF',
        fontSize:16,
        fontFamily:'Nunito-SemiBold',
    },
    input:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default Login;