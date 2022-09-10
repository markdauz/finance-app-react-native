import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SendMoney from "./src/screens/SendMoney";
import Successful from "./src/screens/Successful";
import Dashboard from "./src/screens/Dashboard";
import History from "./src/screens/History";
import Service from "./src/screens/Service";
import Account from "./src/screens/Account";
import Scan from "./src/screens/Scan";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SendMoney" component={SendMoney} />
        <Stack.Screen name="Successful" component={Successful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
