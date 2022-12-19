import * as React from "react";

import { StyleSheet, View, ScrollView } from "react-native";

import Header from "./header/Header";
import FoodSearch from "./search/FoodSearch";
import Category from "./category/Category";
import Poster from "./poster/Poster";
import MenuItem from "./menu/MenuItems";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <FoodSearch />
        <View style={{ height: 40 }}>
          <Category />
        </View>
        <Poster />
        <MenuItem navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    overflow: "hidden",
  },
});

export default Home;
