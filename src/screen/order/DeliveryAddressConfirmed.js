import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, ScrollView } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button1 from "../../components/Button";
import Button2 from "../../components/ButtonInOder";
import HeaderBack from "../../components/HeaderBack";
import GroupButton from "../../components/GroupButton";

const addressSample = [
  {
    id: 1,
    name: "No1. Số nhà 39 ,Ngõ 199 Hồ Tùng Mậu ",
    selected: false,
    icon: require("../../../assets/images/edit.png"),
  },
];
const dateTimeSample = [
  {
    id: 1,
    name: "16/02/2021 16:38:02",
    selected: false,
    icon: require("../../../assets/images/calendar.png"),
  },
];

const DeliveryAddress = ({ navigation, route }) => {
  const [data, setData] = useState(addressSample);
  const [dateTime, setDateTime] = useState(dateTimeSample);
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

  const buttons = [
    {
      activated: false,
      text: "Đặt ngay",
      onPress: () => {
        navigation.push("Đặt ship");
      },
    },
    {
      activated: true,
      text: "Đặt hàng trước",
      onPress: () => {},
    },
  ];
  return (
    <Background>
      <ScrollView style={styles.container}>
        <Title subTitle="Hãy nhập chi tiết thông tin dưới này!" />
        <GroupButton activeColor="#FF9F1C" buttons={buttons} />
        <Title title="Địa chỉ ship hàng"></Title>
        <Cell
          data={data}
          renderItem={_renderItem}
          onPress={() => Alert.alert("a")}
        />
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
          <Button2 text="Thay đổi địa chỉ" onPress={() => {}} />
        </View>
        <Title
          title="Thời gian"
          subTitle="Hãy chọn thời gian giao hàng"
        ></Title>
        <Cell
          data={dateTime}
          renderItem={_renderItem}
          onPress={() => Alert.alert("a")}
        ></Cell>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
          <Button1
            text="Tiến hành đặt hàng"
            onPress={() => {
              navigation.push("MenuScreen");
            }}
          />
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
export default DeliveryAddress;
