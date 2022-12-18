import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Items from "./Items";

const MenuItem = () => {
  const item = [
    {
      name: "Sea Food",
      img: "🦐",
      data: [
        { title: "Beef Steak chicken nugget", price: " $ 35", img: "🦀" },
        { title: "scallops", price: " $ 40", img: "🦞" },
        { title: "periwinkles", price: " $ 95", img: "🦑" },
        { title: "including clams", price: " $ 25", img: "🦪" },
      ],
    },
    {
      name: "Chinese Food",
      img: "🦐",
      data: [
        { title: "Chow Mein", price: " $ 35", img: "🍜" },
        { title: "Ma Po Tofu", price: " $ 40", img: "🍱" },
        { title: "Scallion Pancakes", price: " $ 95", img: "🍤" },
        { title: "Peking duck", price: " $ 25", img: "🍘" },
      ],
    },
  ];

  return (
    <View>
      {item.map((item, _) => {
        return <Items item={item} key={_} />;
      })}
    </View>
  );
};

export default MenuItem;
