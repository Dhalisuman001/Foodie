import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashedLine from "react-native-dashed-line";
import Button from "../products/Button";
import Coupon from "./Coupon";
import Products from "./Products";

const OrderDetails = ({ navigation }) => {
  const checkOut = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      {/* coupon */}
      <Coupon />
      {/* Products */}
      <Products />
      {/* Divider */}
      <View style={styles.divider}>
        <DashedLine dashLength={5} />
      </View>
      <View style={styles.discount}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#7d7c7a" }}>
          Discount 🤑
        </Text>
        <Text style={{ fontSize: 25, color: "#7d7c7a" }}>₹80</Text>
      </View>
      <View style={styles.discount}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Total</Text>
        <Text style={{ fontSize: 25, color: "#7d7c7a" }}>₹220</Text>
      </View>

      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Button name="Check Out" btnPress={checkOut} />
      </View>
    </View>
  );
};

export default OrderDetails;
const styles = StyleSheet.create({
  divider: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  discount: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});
