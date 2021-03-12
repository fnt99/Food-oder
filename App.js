import React,{useEffect,useState}from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import * as Font from "expo-font";
import OnBoarding from './src/screen/OnBoarding';
import Otp from './src/screen/Otp'; 
import ForgetPassword from './src/screen/ForgetPassword'; 
import MobileNumber from './src/screen/MobileNumber'; 
import Login from './src/screen/Login'; 

const customFonts={
  'CircularStdBold':require('./assets/fonts/CircularStdBold.ttf'),
  'Nunito-Bold':require('./assets/fonts/Nunito-Bold.ttf'),
  'Nunito-ExtraBold':require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-SemiBold':require('./assets/fonts/Nunito-SemiBold.ttf'),

};

export default function App() {

  const [assetsLoaded,setAssetsLoaded]=useState(false);

  const _loadAssetsAsync= async()=>{
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }

  useEffect(()=>{
    _loadAssetsAsync();
  });

  return (
    <View style={styles.container}>
      {assetsLoaded ? <MobileNumber/> : <ActivityIndicator size='small'/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
