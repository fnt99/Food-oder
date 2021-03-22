import React, { useLayoutEffect,useState } from "react";
import { Text, View, StyleSheet ,Image,TouchableOpacity,Dimensions } from "react-native";
import Modal from 'react-native-modal'
import Button from "../../components/ButtonAddToCart";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Title from "../../components/TitleInOder";
import Background from "../../components/Background";

const {width,height}=Dimensions.get('window')
const Confirmed = ({ navigation, route }) => {
  const [modalVisible,setModelVisible]=useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => {
            navigation.navigate("Ví");
          }}
        />
      ),
      headerLeft: () => (
        <HeaderBack
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  });
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.addressView}>
          <Title
            title="Xác nhận đơn hàng"
            subTitle="Thanh toán bằng ví trong ứng dụng"
          ></Title>
          <Title subTitle="2234 - 16/02/2021 - 430"></Title>
        </View>
        <View style={styles.dateTimeView}>
          <Title
            title="Thanh toán đơn hàng đã đặt"
            subTitle="16/02/2021 16:38:02"
          ></Title>
          <Title subTitle="No1. Số nhà 39 ,Ngõ 199 Hồ Tùng Mậu"></Title>
        </View>
        <View style={{ marginLeft: 20, marginRight: 60, marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              fontSize: 15,
              lineHeight: 20,
            }}
          >
            Chúng tôi sẽ gửi email xác nhận cho bạn
          </Text>
        </View>
        <View
          style={{
            flex:1,
            marginLeft: 30,
            marginRight: 30,
            flexDirection: "row",
            justifyContent: 'space-between',
            marginTop:280
          }}
        >
          <Button text="Theo dõi đơn hàng" onPress={() => {navigation.navigate('Theo dõi')}}></Button>
          <Button text="Xác nhận" onPress={() => {
            setModelVisible(true)
          }}></Button>
        </View>
        <Modal isVisible={modalVisible} animationType='slide' transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.modalView2}>
              <Image style={{width:40,height:50,marginTop:10,marginBottom:10}} source={require('../../../assets/images/boxhappy.jpg')}/>
              <Text style={styles.modalTitle}>Chúc mừng</Text>
              <Text style={styles.modalDesc}>Cảm ơn bạn đã sử dụng dịch vụ, bạn có cơ hội tham gia bốc thăm trúng thưởng giá trị lên tới 5 triệu đồng</Text>
              <TouchableOpacity style={styles.modalButton} onPress={()=>{
                setModelVisible(false)
              }}>
                <Text style={styles.textStyle}>Ok</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </Modal>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressView: {
    height: 100,
    backgroundColor: "#1D2126",
  },
  dateTimeView: {
    height: 90,
    backgroundColor: "#1D2126",
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:22,

  },
  modalView:{
    margin:20,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    shadowColor:'#000000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  modalView2:{
    margin:20,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    paddingBottom:30
  },
  modalTitle:{
    color:'#000000',
    fontFamily:'Nunito-ExtraBold',
    fontSize:15,
    lineHeight:18
  },
  modalDesc:{
    color:'#1D2126',
    fontFamily:'Nunito-ExtraBold',
    fontSize:15,
    lineHeight:18,
    textAlign:'center'
  },
  modalButton:{
    height:48,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF9F1C',
    borderRadius:10
  },
  textStyle:{
    color:'#FFFFFF',
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    lineHeight:18,
    textAlign:'center'
  },
});
export default Confirmed;
