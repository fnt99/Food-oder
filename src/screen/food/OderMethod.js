import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderChangeLanguage from "../../components/HeaderChangeLanguage";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";

const methods = [
  {
    id: 1,
    name:'Ví ứng dụng',
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 2,
    name:'Bằng ứnng dụng khác',
    selected: false,
    icon: require("../../../assets/images/tick.png"),
    activeIcon: require("../../../assets/images/tick-active.png"),
  },
  {
    id: 3,
    name: 'Lái xe qua',
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
    <Text
      key={item.id}
      style={{
        fontFamily: "Nunito-SemiBold",
        fontSize: 10,
        lineHeight:20
      }}
    >
      {item.name}
    </Text>;
  };

  return (
    <Background>
      <View style={styles.container}>
        <Title
          title="Phương thức đặt hàng"
          subTitle="Hãy chọn phương thức đặt hàng mà bạn muốn!"
        />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem}/>
          <Cell />
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
