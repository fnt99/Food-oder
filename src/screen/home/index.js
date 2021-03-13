import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import HeaderRight from "../../components/HeaderRight";
import HeaderChangeLanguage from "../../components/HeaderChangeLanguage";
import Coupon from "../../components/Coupon";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => {
            navigation.navigate("Ví");
          }}
        />
      ),
      headerLeft: () => <HeaderChangeLanguage />,
    });
  });

  const slides = [
    { id: 1, image: require("../../../assets/images/slider-image1.jpg") },
    { id: 2, image: require("../../../assets/images/slider-image2.jpg") },
    { id: 3, image: require("../../../assets/images/slider-image3.jpg") },
    { id: 4, image: require("../../../assets/images/slider-image4.png") },
  ];

  const coupons =[
    {
      id: 1, 
      icon: require('../../../assets/images/logo.png'),
      title: 'Đặt ngay',
      desc: 'Đăng nhập để tiếp tục'
    },
    {
        id: 2, 
        icon: require('../../../assets/images/logo.png'),
        title: 'Theo dõi',
        desc:'Đăng nhập để tiếp tục'
    }
]
  return (
    <View style={styles.container}>
      <View style={{ width: width, height: 175 }}>
        <Swiper
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {slides.map((slide) => {
            return (
              <View style={styles.slide}>
                <Image source={slide.image} style={styles.image} />
                <View style={styles.slide_text_wrapper}>
                  <Text style={styles.slide_text}>City Greatest Food</Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
      <View>
          {
              coupons.map((coupon)=>{
                  return(
                      <Coupon key={coupon.id} icon={coupon.icon} title={coupon.title} desc={coupon.desc}/>
                  )
              })
          }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 175,
  },
  slide: {
    width: width,
    height: 175,
  },
  slide_text_wrapper: {
    position: "relative",
    bottom: 160,
    right: -20,
    width: width - 100,
  },
  slide_text: {
    color: "#FFFFFF",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 25,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
});
export default HomeScreen;
