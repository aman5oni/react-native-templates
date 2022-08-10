import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import React, { useRef } from "react";
import { DATA } from "../config/Travel";
import { SPACING, width } from "../config/Theme";
import Icon from "../components/Icon";
import BackIcon from "../components/BackIcon";

const Detail = ({navigation}) => {
  const item = DATA[0];
  const ref = useRef();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <BackIcon onPress={()=> navigation.goBack()} />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20
        }}
      >
        {DATA.map((item) => (
          <TouchableOpacity style={{ padding: SPACING }} key={item.id}>
            <Icon uri={item.imageuri} />
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index
        })}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: width - SPACING * 2,
                margin: SPACING,
                backgroundColor: "rgba(0,0,0,0.05)",
                borderRadius: 16
              }}
            >
              <View style={{ padding: SPACING }}>
                <Text style={{ fontSize: 16 }}>
                  {Array(50).fill(`${item.title} InnerText \n`)}
                </Text>
              </View>
            </ScrollView>
          );
        }} 
      />
    </SafeAreaView>
  );
};

export default Detail;
