import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/Button";

const methods = [
  {
    id: 1,
    name: "Tài khoản trong ứng dụng",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 2,
    name: "Thanh toán sau khi nhận hàng",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 3,
    name: "Paypal",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 4,
    name: "Momo",
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
];

const PaymentScreen = ({ navigation, route }) => {
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
          title="Thanh toán đơn hàng"
          subTitle="Xin vui lòng chọn phương thức thanh toán!"
        />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 100 }}>
          <Button text="Tiến hành thanh toán" onPress={()=>{navigation.push('Xác nhận')}}/>
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
export default PaymentScreen;
