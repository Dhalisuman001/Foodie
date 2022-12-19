import * as React from "react";
import Home from "../home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../products/Products";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 23, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default Index;
