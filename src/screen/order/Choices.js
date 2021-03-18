import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/Button";

const choices = [
  {
    id: 1,
    name: "Cỡ lớn",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 2,
    name: "Trung bình",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 3,
    name: "Nhỏ",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
];

const Choices = ({ navigation, route }) => {
  const [data, setData] = useState(choices);
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
          title="Lựa chọn"
          subTitle="Xin vui lòng chọn!"
        />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 150 }}>
          <Button text="Thêm vào giỏ hàng" onPress={()=>{Alert.alert('do some thing')}}/>
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
export default Choices;
