import { Easing, StyleSheet, Text, View } from "react-native";
import Detail from "./screens/Detail";
import List from "./screens/List";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const Animation1 = () => {
  return (
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
  );
};

export default Animation1;
