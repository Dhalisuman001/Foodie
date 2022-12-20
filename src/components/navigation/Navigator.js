import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomeStackScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Notification from "./NotificationStackScreen";

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let routeName;
          if (route.name === "HomeStackScreen") {
            routeName = "home";
          } else if (route.name === "NotificationStackScreen") {
            routeName = "notifications";
          }
          return <Ionicons name={routeName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#248dc9",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        title: "",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="HomeStackScreen" component={HomePage} />
      <Tab.Screen name="NotificationStackScreen" component={Notification} />
    </Tab.Navigator>
  );
};

export default Navigator;
