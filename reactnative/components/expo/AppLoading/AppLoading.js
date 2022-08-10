import React,{useState} from "react";
import { Image, Text, View } from "react-native";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";

const AppLoadingF = () => {
  const [state, setState] = useState({
    isReady: false
  });

  const {isReady} = state;

  const _cacheResourcesAsync = async () => {
    const images = [require("./assets/owl.jpg")];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setState({ isReady: true })}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("./assets/owl.jpg")} />
    </View>
  );
};

export default AppLoadingF