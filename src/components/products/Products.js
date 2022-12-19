import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ToggleQuantity from "./ToggleQuantity";
const Products = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <TouchableOpacity>
          <View style={styles.wishlist}>
            <AntDesign
              style={styles.icon}
              name="heart"
              size={25}
              color="#62c480"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.img}>
          <Text style={{ fontSize: 130 }}> 🦞</Text>
        </View>
      </View>
      <View style={styles.detailsWrapper}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
              padding: 20,
            }}
          >
            Lorem ipsum dolor
          </Text>
        </View>
        <Text numberOfLines={3} style={{ fontSize: 15, marginHorizontal: 15 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          numquam facilis saepe, culpa architecto atque sint totam quis adipisci
          praesentium sapiente quam
        </Text>
        <View style={styles.rating_location}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign style={styles.icon} name="star" size={25} color="red" />
            <Text style={styles.text}>4.6</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={styles.icon}
              name="enviroment"
              size={25}
              color="red"
            />
            <Text style={styles.text}>3 km</Text>
          </View>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.itemPrice}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>Price </Text>
            <Text> ₹999</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert("Will Fix it!");
            }}
            style={{
              backgroundColor: "#dff0ea",
              borderRadius: 19,
              margin: 10,
            }}
          >
            <Ionicons
              style={styles.groupIcon}
              name="md-cart"
              size={28}
              color="#2a8c6d"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.quantityWrapper}>
          <ToggleQuantity />
        </View>
      </View>
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
  },
  imgWrapper: {
    backgroundColor: "#ede7d5",
    flexDirection: "column",
  },
  wishlist: {
    borderColor: "#62c480",
    borderWidth: 2,
    width: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    padding: 10,
  },
  img: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  rating_location: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  groupIcon: {
    padding: 15,
  },
  priceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemPrice: {
    margin: 20,
    fontWeight: "700",
    fontSize: 22,
    paddingHorizontal: 10,
  },
  quantityWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 85,
  },
});
