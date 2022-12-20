import React from "react";
import { View, Text, StyleSheet } from "react-native";
const coupon = [
  { text: "Enjoy discount upto 50%", imo: "😃" },
  { text: "Cashback upto 50,00", imo: "😯" },
];

const Used = () => {
  return (
    <View>
      {coupon.map((it, _) => {
        return (
          <View key={_} style={styles.promoContainer}>
            <Text>{it.text}</Text>
            <Text>{it.imo}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Used;
const styles = StyleSheet.create({
  promoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 8,
    backgroundColor: "#dbdad7",
    padding: 20,
    borderRadius: 20,
  },
});
