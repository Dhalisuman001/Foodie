import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import Item from "./Item";
const item = [
  { title: "Beef Steak chicken nugget", price: " $ 35", img: "🦀" },
  { title: "scallops", price: " $ 40", img: "🦞" },
  { title: "periwinkles", price: " $ 95", img: "🦑" },
  { title: "including clams", price: " $ 25", img: "🦪" },
  { title: "Chow Mein", price: " $ 35", img: "🍜" },
  { title: "Ma Po Tofu", price: " $ 40", img: "🍱" },
  { title: "Scallion Pancakes", price: " $ 95", img: "🍤" },
  { title: "Peking duck", price: " $ 25", img: "🍘" },
];
const Order = () => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>📅</Text>
        <Text style={styles.text}>Recent activity</Text>
      </View>
      <View>
        {/* TODO: Some issue in flatlist */}
        <FlatList
          data={item}
          style={{}}
          kay={item.title}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Order;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    margin: 20,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
