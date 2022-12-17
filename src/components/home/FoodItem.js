import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const FooDdItem = ({ item }) => {
  return (
    <View style={styles.foodItem}>
      <TouchableOpacity
        onPress={() => {
          alert("testing");
        }}
      >
        <View style={styles.itemWrapper}>
          {/* TODO: This would be image */}
          <Text style={styles.itemImg}>{item.img}</Text>
        </View>
        <Text style={styles.foodTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity>
          <Ionicons
            style={{ paddingHorizontal: 10 }}
            name="add-circle-sharp"
            size={45}
            color="green"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooDdItem;

const styles = StyleSheet.create({
  foodItem: {
    margin: 20,
    backgroundColor: "#e8dbd1",
    height: 260,
    width: 180,
    borderRadius: 20,
  },
  foodTitle: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  itemImg: {
    fontSize: 60,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  itemPrice: {
    fontWeight: "700",
    fontSize: 22,
    paddingHorizontal: 10,
  },
});
