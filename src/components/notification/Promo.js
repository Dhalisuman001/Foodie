import React from "react";
import { View, Text, StyleSheet } from "react-native";
const coupon = [
  { text: "Enjoy discount upto 50%", imo: "😃" },
  { text: "Cashback upto 50,00", imo: "😯" },
];

const Promo = () => {
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

export default Promo;
const styles = StyleSheet.create({
  promoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 8,
    backgroundColor: "#f5f0e1",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ffc403",
  },
});
