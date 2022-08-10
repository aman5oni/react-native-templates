import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BackIcon = ({ onPress }) => {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      style={{ padding: 12, marginTop: 50 }}
      color="#333"
      onPress={onPress}
    />
  );
};

export default BackIcon;
