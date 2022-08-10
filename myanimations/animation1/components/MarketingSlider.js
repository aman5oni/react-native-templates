import { View, Text, FlatList,StyleSheet } from "react-native";
import React from "react";
import { SLIDER_DATA } from "../config/Travel";
import { ITEM_WIDTH,width,SPACING } from "../config/Theme";
const MarketingSlider = () => {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={30 + 3 * 2}
      contentContainerStyle={{
        paddingRight: width - ITEM_WIDTH - SPACING * 2
      }}
      decelerationRate={"fast"}
      renderItem={({ item }) => {
        return (
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH * 0.6,
        borderRadius: 16,
        padding: SPACING,
        marginTop:60,
        marginHorizontal:10
    },
    itemText: {
        padding:SPACING,
        
    },
});

export default MarketingSlider;
