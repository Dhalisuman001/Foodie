import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../notification/Notification";

const Stack = createStackNavigator();

const NotificationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 23, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
