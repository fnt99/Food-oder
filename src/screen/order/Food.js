import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Background from "../../components/Background";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Title from "../../components/TitleInOder";
import Button from "../../components/Button";
import Cell from "../../components/Cell";
const Food = ({ navigation, route }) => {
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

  const foods = [
    {
      id: 1,
      name: "Bánh Hamburger thịt bò",
      price: "60 nghìn vnd",
      logo: require("../../../assets/images/hamburgerbeef.jpg"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: false,
    },
    {
      id: 2,
      name: "Bánh Hamburger gà",
      price: "50 nghìn vnd",
      logo: require("../../../assets/images/hamburgerchicken.jpg"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: true,
    },
    {
      id: 3,
      name: "Bánh Hamburger phô mai",
      price: "40 nghìn vnd",
      logo: require("../../../assets/images/hamburgerfomai.jpg"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: false,
    },
    {
      id: 4,
      name: "Bánh Hamburger cá hồi",
      price: "45 nghìn vnd",
      logo: require("../../../assets/images/hamburgerfish.jpg"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: true,
    },
  ];

  const _renderItem = (item, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <ImageBackground
            style={{
              width: 35,
              height: 35,
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
            source={item.logo}
          >
            {item.isNew ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../assets/images/new.png")}
              />
            ) : (
              <View />
            )}
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 50 }}>
          <View>
            <Text
              style={{
                fontFamily: "Nunito-SemiBold",
                fontSize: 15,
                lineHeight: 15,
              }}
            >
              {item.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#FF9F1C",
                fontFamily: "Nunito-SemiBold",
                fontSize: 15,
                lineHeight: 15,
              }}
            >
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const _onItemClick = (item, index) => {
    navigation.push("SelectItemScreen");
  };
  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={{ paddingTop: 10 }}>
          <Cell
            style={{ height: 85 }}
            data={foods}
            renderItem={_renderItem}
            onPress={_onItemClick}
          ></Cell>
        </View>
      </ScrollView>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Food;
