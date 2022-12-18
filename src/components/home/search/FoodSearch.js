import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
const FoodSearch = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={styles.searchBar}>
      <Searchbar
        placeholder="Type Here..."
        style={{ borderRadius: 23 }}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

export default FoodSearch;

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
