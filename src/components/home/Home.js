import * as React from "react";

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Header from "./Header";
import Item from "./Item";
import FooDdItem from "./FoodItem";
const Home = () => {
  const item = [
    { title: "Beef Steak chicken nugget", price: " $ 35", img: "🍖" },
    { title: "Beef Steak chicken nugget", price: " $ 40", img: "🍖" },
    { title: "Beef Steak chicken nugget", price: " $ 95", img: "🍖" },
    { title: "Beef Steak chicken nugget", price: " $ 25", img: "🍖" },
  ];
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
  ];
  const [search, setSearch] = React.useState("");
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  const renderFoodItem = ({ item }) => {
    return <FooDdItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Type Here..."
            style={{ borderRadius: 23 }}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={{ height: 40 }}>
          {/* TODO: need to add more data  */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(item) => item.id}
            style={styles.category}
          />
        </View>
        {/* TODO: need to add carousel */}
        {/* https://www.npmjs.com/package/react-native-snap-carousel */}
        <View style={styles.poster}>
          <Image
            style={styles.posterImg}
            source={require("../../../assets/poster.png")}
          />
        </View>
        <View style={styles.categoryHeader}>
          <Text style={styles.seafood}>
            Seafood<Text style={styles.text8}> 🦐</Text>
          </Text>
          <TouchableOpacity onPress={() => {}} style={{ padding: 20 }}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal={true}
          style={styles.itmCard}
          data={item}
          renderItem={renderFoodItem}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
  },

  searchBar: {
    marginVertical: 20,
    marginHorizontal: 20,
  },

  itmCard: {
    flexDirection: "row",
  },

  posterImg: {
    resizeMode: "contain",
    height: 170,
  },

  poster: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
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

  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    overflow: "hidden",
  },
});

export default Home;
