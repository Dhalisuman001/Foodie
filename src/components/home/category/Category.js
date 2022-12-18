import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

const Category = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "All",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Breakfast",
      img: "🥞",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Drink",
      img: "🍹",
    },
    {
      id: "58694a-3da1-471f-bd96-145571e29d72",
      title: "Snack",
      img: "🍠",
    },
    {
      id: "58694a-3da1-471f-145571e29d72",
      title: "Dinner",
      img: "🍛",
    },
  ];
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  return (
    <View>
      {/* TODO: need to add more data  */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
        style={styles.category}
      />
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
