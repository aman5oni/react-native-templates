import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import React, { useState } from "react";

const AsyncStorageF = () => {
  const [data, setData] = useState(null);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("store", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem("store");
      if (data !== null) {
        console.log(data);
        setData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  storeData("dfakjadsjf");
  getData();
  return (
    <View>
      <Text>{`${data}`}</Text>
    </View>
  );
};

export default AsyncStorageF;
