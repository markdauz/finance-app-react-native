import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

/**
 * Credit goes to Kardi, the owner of the Figma Design
 * https://www.figma.com/community/file/1102813666035750251
 */
