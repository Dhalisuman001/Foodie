import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Item from "./Item";
const Data = [
  { title: "Chow Mein", price: " $ 35", img: "🍜" },
  { title: "Ma Po Tofu", price: " $ 40", img: "🍱" },
  { title: "Peking duck", price: " $ 25", img: "🍘" },
];
const Products = () => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.container}>
      {/* TODO: implementing swipe delete item
      :https://github.com/glepur/react-native-swipe-gestures */}
      <FlatList data={Data} key={Item.price} renderItem={renderItem} />
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {},
});
