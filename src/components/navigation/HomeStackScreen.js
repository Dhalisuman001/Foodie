import * as React from "react";
import Home from "../home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../products/Products";
import OrderDetails from "../order/OrderDetails";
import PaymentOption from "../payment/PaymentOption";
import Map from "../map/Map";
import Status from "../order/Status";

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
      <Stack.Screen name="Order Details" component={OrderDetails} />
      <Stack.Screen name="Payment Option" component={PaymentOption} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Order Status" component={Status} />
    </Stack.Navigator>
  );
};

export default Index;
