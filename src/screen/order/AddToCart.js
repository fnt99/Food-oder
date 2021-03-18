import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/ButtonAddToCart";
const { width, height } = Dimensions.get("window");
const choices = [
  {
    id: 1,
    name: "Hamburger phô mai",
    icon: require("../../../assets/images/arrow.png"),
    logo: require("../../../assets/images/hamburgerfomai.jpg"),
  },
  {
    id: 2,
    name: "Coca cola(250ml)",
    icon: require("../../../assets/images/arrow.png"),
    logo: require("../../../assets/images/cocacola.jpeg"),
  },
  {
    id: 3,
    name: "Khoai tây chiên(1 gói)",
    icon: require("../../../assets/images/arrow.png"),
    logo: require("../../../assets/images/friespack.jpg"),
  },
];

const AddToCart = ({ navigation, route }) => {
  const [data, setData] = useState(choices);
  const [count, setCount] = useState(1);
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

  const _renderItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          height: 68,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 67,
            height: 43,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ marginRight: 20, width: 30, height: 30 }}
            source={item.logo}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            key={item.id}
            style={{
              fontFamily: "Nunito-SemiBold",
              fontSize: 15,
              lineHeight: 20,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    );
  };
  const _onItemClick = (item, index) => {
    let temp = [];
    data.map((entry, idx) => {
      if (idx == index) {
        entry.selected = true;
        temp.push(entry);
      } else {
        entry.selected = false;
        temp.push(entry);
      }
    });
    setData(temp);
  };
  return (
    <Background>
      <View style={styles.container}>
        <Title
          title="Hambuger kẹp thịt phô mai"
          subTitle="Xin vui lòng chọn loại thịt !"
        />
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Image
            style={{ width: 350, height: 180 }}
            source={require("../../../assets/images/hamburgerfull1.jpg")}
          ></Image>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ marginLeft: 65, borderRadius: 6, width: 140, height: 48 }}
          >
            <View
              style={{
                height: 48,
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                 count<=1?setCount(0):setCount(count-1);
                }}
              >
                <Image
                  style={{ marginLeft: 20, width: 25, height: 25 }}
                  source={require("../../../assets/images/minus.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#727C8E",
                  fontFamily: "Nunito-SemiBold",
                  fontSize: 15,
                  lineHeight: 20,
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}
              >
                <Image
                  style={{ marginRight: 20, width: 25, height: 25 }}
                  source={require("../../../assets/images/plus.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: 186, marginLeft: 20, marginRight: 20 }}>
            <Button
              text="Thêm vào giỏ hàng"
              onPress={() => {
                navigation.push('MainItemsScreen')
              }}
            />
          </View>
        </View>
        <Title title="Gồm các món" />
        <View>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AddToCart;
