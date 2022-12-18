import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Text>
          {item.img} <Text style={{ color: "#ff6d05" }}>{item.title}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#faf0e8",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 20,
    height: 40,
  },
});
