import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SendMoney from "../screens/SendMoney";
import Successful from "../screens/Successful";

import Home from "../navigators/BottomTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SendMoney" component={SendMoney} />
      <Stack.Screen name="Successful" component={Successful} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
