import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HeaderRight from "../../components/HeaderRight";
import HeaderBack from "../../components/HeaderBack";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Cell from "../../components/Cell";
import Button from "../../components/Button";
const { width, height } = Dimensions.get("window");
import Card from "../../components/Card";
const remarks = [
  {
    id: 1,
    name: "Nhận xét sản phâm...etc",
  },
];
const condiments = [
  {
    id: 1,
    name: "Lựa chọn thông dụng",
  },
];

const FullItems = ({ navigation, route }) => {
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
        <View style={styles.summaryView}>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text style={styles.title}>Đánh giá và Xác nhận</Text>
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <Text style={styles.itemText}>Thông tin sơ lược</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Giá món ăn</Text>
              <Text style={styles.priceText}>67,500VND</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemText}>phí giao hàng</Text>
              <Text style={styles.priceText}>15,000 VND</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Khuyến mãi(10%)</Text>
              <Text style={styles.priceText}>7,500 VND</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalView}>
          <View style={{ margin: 20 }}>
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Tổng chi phí</Text>
              <Text style={[styles.priceText,{fontSize:18}]}>67,500 VND</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <Text style={[styles.itemText.color,{color:'#FFFFFF',fontSize:12}]}>Đã bao gồm VAT</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop:10}}></View>
        <View style={styles.addressView}>
            <View style={{margin:20}}>
                <Text style={styles.title}>Giao hàng tới</Text>
                <Text style={[styles.itemText,{fontSize:15}]}>16/02/2021 16:38:02</Text>
                <Text style={[styles.itemText,{color:'#FFFFFF',fontSize:15}]}>No1. Số nhà 39 ,Ngõ 199 Hồ Tùng Mậu</Text>
            </View>
        </View>
        <Title title='Nhận xét'/>
        <View style={{marginTop:8}}>
            <Cell
                data={remarks}
                renderItem={_renderItem}
                onPress ={_onItemClick}
            />
        </View>
        <Card />
        <Title title='Lựa chọn'/>
        <View style={{marginTop:8}}>
            <Cell
                data={condiments}
                renderItem={_renderItem}
                onPress ={_onItemClick}
            />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
          <Button text="Thanh toán" onPress={()=>{navigation.navigate('Ví')}}/>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryView: {
    height: 190,
    backgroundColor: "#2E2E2E",
    justifyContent: "flex-start",
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    lineHeight: 24,
  },
  itemView: {
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemText: {
    color: "#FF9F1C",
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    lineHeight: 24,
  },
  totalView: {
    height: 65,
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
    color: "#FFFFFF",
    fontFamily: "Nunito-Bold",
    fontSize: 15,
    lineHeight: 20,
  },
  addressView:{
      height:90,
      backgroundColor:'#585858',
      justifyContent:'center'
  }
});
export default FullItems;
