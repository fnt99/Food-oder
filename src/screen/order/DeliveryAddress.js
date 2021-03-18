import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button1 from "../../components/Button";
import Button2 from "../../components/ButtonInOder";
import HeaderBack from "../../components/HeaderBack";
import GroupButton from "../../components/GroupButton";

const address = [
  {
    id: 1,
    name: "No1. Số nhà 39 ,Ngõ 199 Hồ Tùng Mậu ",
    selected: false,
    icon: require("../../../assets/images/edit.png"),
    activeIcon: require("../../../assets/images/edit-active.png"),
  },
];

const DeliveryAddress = ({ navigation, route }) => {
  const [data, setData] = useState(address);

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

  const buttons = [
    {
      activated: true,
      text: "Đặt ngay",
      onPress: () => {},
    },
    {
      activated: false,
      text: "Đặt hàng trước",
      onPress: () => {navigation.push('Nhập địa chi')},
    },
  ];
  return (
    <Background>
      <View style={styles.container}>
        <Title subTitle="Để hoàn thành xin bạn hãy nhập chi tiết thông tin dưới này!" />
        <GroupButton activeColor="#FF9F1C" buttons={buttons} />
        <Title title="Địa chỉ ship hàng"></Title>
        <Cell
          data={data}
          renderItem={_renderItem}
          onPress={() => Alert.alert("a")}
        />
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 50 }}>
          <Button1
            text="Tiến hành đặt hàng"
            onPress={() => {
             navigation.push('MenuScreen')
            }}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20,marginTop:10 }}>
        <Button2
            text="Thay đổi địa chỉ"
            style={{backgroundColor :'#000000'}}
            onPress={() => {}}
          />
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
export default DeliveryAddress;
