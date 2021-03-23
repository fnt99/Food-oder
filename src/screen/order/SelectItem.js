import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Background from "../../components/Background";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Cell from "../../components/Cell";
const { width, height } = Dimensions.get("window");
const SelectItem = ({ navigation, route }) => {
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
      name: "Hamburger",
      logo: require("../../../assets/images/burger-logo.png"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: false,
      category: "Ala Carte",
    },
    {
      id: 2,
      name: "Hamburger",
      logo: require("../../../assets/images/burger-logo.png"),
      icon: require("../../../assets/images/arrow.png"),
      isNew: true,
      category: "Ala Carte",
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
              {item.category}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const _onItemClick = (item, index) => {
    navigation.push("ChoicesScreen");
  };
  return (
    <Background>
      <ScrollView style={styles.container}>
        <Title title=" Humburgers" subTitle="vui lòng chọn" />
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 350, height: 250 }}
            source={require("../../../assets/images/hamburgerfull.jpg")}
          />
        </View>
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
export default SelectItem;
