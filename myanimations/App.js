import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Easing, StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import Detail from "./screens/Detail";
import List from "./screens/List";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: true,
            transitionSpec: {
              open: {
                animation: "timing",
                config: {
                  duration: 500,
                  easing: Easing.inOut(Easing.ease)
                }
              },
              close: {
                animation: "timing",
                config: {
                  duration: 500,
                  easing: Easing.inOut(Easing.ease)
                }
              }
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              };
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
