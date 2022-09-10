import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import History from "../screens/History";
import Service from "../screens/Service";
import Account from "../screens/Account";
import Scan from "../screens/Scan";

import Icon from "../components/Icon";
import TabLabel from "../components/TabLabel";

import { Colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            >
              Home
            </TabLabel>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={25}
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            >
              History
            </TabLabel>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="clock"
              size={25}
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            >
              Scan
            </TabLabel>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="line-scan"
              size={25}
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            >
              Service
            </TabLabel>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="view-grid-plus"
              size={25}
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            >
              Account
            </TabLabel>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="account"
              size={25}
              focused={focused}
              focusedColor={Colors.black}
              unfocusedColor={Colors.lightgray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
