import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Background from "../../components/Background";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Title from "../../components/TitleInOder";
import Button from "../../components/Button";
const Menu = ({ navigation, route }) => {
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

  const categories = [
    {
      id: 1,
      name: "Bánh Hamberger",
      image: require("../../../assets/images/hamburger.jpg"),
    },
    {
      id: 2,
      name: "Tra sữa trân châu dường đen",
      image: require("../../../assets/images/milktea.png"),
    },
    {
      id: 3,
      name: "Gà rán KFC",
      image: require("../../../assets/images/kfc.png"),
    },
    {
      id: 4,
      name: "Coca cola",
      image: require("../../../assets/images/cocacola.jpeg"),
    },
  ];

  const _renderCategory = (item, index) => {
    return (
      <View
        key={index}
        style={{
          margin: 12,
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          width: 150,
          height: 150,
          borderRadius: 6,
          backgroundColor: "#FFFFFF",
          shadowColor: "",
          borderColor: "",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <View
          style={{
            paddingTop: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ height: 70, justifyContent: "flex-end" }}>
            <Image style={{ width: 60, height: 60 }} source={item.image} />
          </View>
          <View style={{ width: 70, paddingTop: 10 }}>
            <Text
              style={{
                color: "#000000",
                fontFamily: "Nunito-Bold",
                fontSize: 12,
                lineHeight: 15,
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.addressView}>
          <Title
            title="Địa chỉ giao hàng"
            subTitle="No1. Số nhà 39 ,Ngõ 199 Hồ Tùng Mậu"
          ></Title>
        </View>
        <View style={styles.dateTimeView}>
          <Title
            title="Thời gian giao hàng"
            subTitle="16/02/2021 16:38:02"
          ></Title>
        </View>
        <View style={styles.category}>
          {categories.map((category, index) => {
            return _renderCategory(category, index);
          })}
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
          <Button
            text="Chọn thực đơn"
            onPress={() => {
              navigation.push("FoodScreen");
            }}
          ></Button>
        </View>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressView: {
    height: 80,
    backgroundColor: "#1C1C1C",
  },
  dateTimeView: {
    height: 70,
    backgroundColor: "#6E6E6E",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
});
export default Menu;
