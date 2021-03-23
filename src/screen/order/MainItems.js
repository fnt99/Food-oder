import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/Button";
const { width, height } = Dimensions.get("window");
import Card from "../../components/Card";
const includes = [
  {
    id: 1,
    name: "Nhập mã khuyễn mại",
  },
];
const condiments = [
  {
    id: 1,
    name: "Lựa chọn thông dụng",
  },
];

const MainItems = ({ navigation, route }) => {
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
      <ScrollView style={styles.container}>
        <View style={styles.totalView}>
          <View style={styles.textView}>
            <Text style={styles.totalText}>Có(1 đơn hàng)</Text>
            <Text style={styles.priceText}>60000 VND</Text>
          </View>
        </View>

        <Card />
        <Title title="Khuyến mãi" />
        <View>
          <Cell
            data={includes}
            renderItem={_renderItem}
            onPress={_onItemClick}
          />
        </View>
        <Title title="Lựa chọn" />
        <View>
          <Cell
            data={condiments}
            renderItem={_renderItem}
            onPress={_onItemClick}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
          <Button
            text="Thanh toán"
            onPress={() => {
              navigation.push("FullItemsScreen");
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
  totalView: {
    height: 90,
    backgroundColor: "#585858",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
  },
  totalText: {
    color: "#FFFFFF",
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    lineHeight: 24,
  },
  priceText: {
    color: "#FF9F1C",
    fontFamily: "Nunito-Bold",
    fontSize: 15,
    lineHeight: 20,
  },
});
export default MainItems;
