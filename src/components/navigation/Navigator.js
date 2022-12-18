import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

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
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 23, fontWeight: "bold" },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default Navigator;
