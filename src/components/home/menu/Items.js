import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FoodItem from "./FoodItem";

const Items = ({ item }) => {
  const renderItem = ({ item }) => {
    return <FoodItem item={item} />;
  };
  return (
    <View>
      <View style={styles.categoryHeader}>
        <Text style={styles.seafood}>
          {item.name}
          <Text> {item.img}</Text>
        </Text>
        <TouchableOpacity onPress={() => {}} style={{ padding: 20 }}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal={true}
          keyExtractor={(item, ind) => item + ind}
          data={item.data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Items;
const styles = StyleSheet.create({
  seafood: {
    fontSize: 18,
    padding: 18,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#181818",
    textAlign: "center",
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
