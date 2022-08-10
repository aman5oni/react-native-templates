import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import Animation1 from "./animation1/Animation1";
enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Animation1 />
    </NavigationContainer>
  );
}
