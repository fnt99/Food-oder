import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const Title = ({
    title,subTitle,...params
}) => (
    <View style={styles.title}>
        {title?<Text style={styles.titleText}>{title}</Text>:<View/>}
        {subTitle?<Text style={styles.subtitleText}>{subTitle}</Text>:<View/>}
    </View>
);

const styles = StyleSheet.create({
    title:{
        marginLeft:20,
        marginTop:28
    },
    subtitleText:{
        fontFamily:'Nunito-Bold',
        color:'#000000',
        fontSize:15,
        lineHeight:28,
    },
    titleText:{
        fontFamily:'Nunito-Bold',
        color:'#000000',
        fontSize:20,
        lineHeight:27,
    }
});
export default Title;
