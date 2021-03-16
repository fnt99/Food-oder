import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderChangeLanguage from "../../components/HeaderChangeLanguage";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/Button";

const methods = [
  {
    id: 1,
    name: "Đặt trước",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 2,
    name: "Chuyển ship",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 3,
    name: "Lái xe qua",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
];

const OderMethod = ({ navigation, route }) => {
  const [data, setData] = useState(methods);

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

  const _renderItem = (item, index) => {
    return (
      <Text
        key={item.id}
        style={{
          fontFamily: "Nunito-SemiBold",
          fontSize: 10,
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
          title="Phương thức đặt hàng"
          subTitle="Xin vui lòng chọn phương thức đặt hàng !"
        />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 243 }}>
          <Button text="Tiến hành đặt hàng" onPress={()=>{navigation.push('Đặt ship')}}/>
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
export default OderMethod;
