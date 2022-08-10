import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react";
import MarketingSlider from "../components/MarketingSlider";
import { DATA } from "../config/Travel";
import { SPACING } from "../config/Theme";
import Icon from "../components/Icon";
import { SharedElement } from "react-navigation-shared-element";

const List = ({ navigation }) => {
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
              onPress={() => {
                navigation.push("Detail", { item });
              }}
            >
              <SharedElement id={`item.${item.id}.icon`}>
                <Icon uri={item.imageUri} />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default List;
