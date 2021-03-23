import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import Carousel from "react-native-snap-carousel";
import HeaderRightHome from "../../components/HeaderRightHome";
import HeaderChangeLanguage from "../../components/HeaderChangeLanguage";
import Coupon from "../../components/Coupon";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightHome
          onPress={() => {
            navigation.navigate("Settings");
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

  const coupons = [
    {
      id: 1,
      icon: require("../../../assets/images/logo.png"),
      title: "Đặt hàng tại đây",

    },
    {
      id: 2,
      icon: require("../../../assets/images/logo.png"),
      title: "Theo dõi tại đây",
    },
  ];
  const offers = [
    { id: 1, image: require("../../../assets/images/card-one.jpg") },
    { id: 2, image: require("../../../assets/images/card-two.jpeg") },
    { id: 3, image: require("../../../assets/images/card-three.jpg") },
    { id: 4, image: require("../../../assets/images/card-four.jpg") },
    { id: 5, image: require("../../../assets/images/card-five.jpg") },
    { id: 6, image: require("../../../assets/images/card-six.jpg") },
    { id: 7, image: require("../../../assets/images/card-seven.jpeg") },
    { id: 8, image: require("../../../assets/images/card-eight.png") },
    { id: 9, image: require("../../../assets/images/card-nice.jpg") },
    { id: 10, image: require("../../../assets/images/card-ten.jpg") },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={{ width: 100, height: 125, borderRadius: 8 }}
          key={item.id}
          source={item.image}
        />
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ width: width, height: 240 }}>
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
        {coupons.map((coupon) => {
          return (
            <Coupon
              key={coupon.id}
              icon={coupon.icon}
              title={coupon.title}
              desc={coupon.desc}
            />
          );
        })}
      </View>
      <View style={{ marginTop: 5, marginLeft: 20 }}>
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 20 }}>
          Người dùng đề xuất
        </Text>
        <Carousel
          firstItem={1}
          data={offers}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={100}
        ></Carousel>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 240,
  },
  slide: {
    width: width,
    height: 240,
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
