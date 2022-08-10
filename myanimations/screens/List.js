import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MarketingSlider from "../components/MarketingSlider";
import { DATA } from "../config/Travel";
import { SPACING } from "../config/Theme";
import Icon from "../components/Icon";

const List = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MarketingSlider />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                padding: SPACING
              }}
              onPress={() => {}}
            >
              <Icon uri={item.imageuri} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default List;
