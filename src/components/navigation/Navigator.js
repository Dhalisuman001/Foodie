import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomeStackScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let routeName;
          routeName = "home";
          return <Ionicons name={routeName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f26f18",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeStackScreen" component={HomePage} />
    </Tab.Navigator>
  );
};

export default Navigator;
