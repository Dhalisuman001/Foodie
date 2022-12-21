import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Item = ({ item }) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.upperView}>
        <Text style={styles.imgWrapper}>{item.img}</Text>
        <View style={styles.nameWrapper}>
          <Text style={{ fontSize: 17, paddingHorizontal: 10 }}>
            {item.title}
          </Text>
          <View style={styles.detailWrapper}>
            <Text style={styles.details}>3 items</Text>
            <Text style={styles.details}>Bhai Bhai</Text>
            <Text style={styles.details}>Sunday</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerView}>
        <Text style={{ fontSize: 17, paddingHorizontal: 10 }}>
          {item.price}
        </Text>
        <Pressable
          style={{
            backgroundColor: "#b8b7b4",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
          }}
        >
          <Text>Reorder</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: "#edece8",
    borderRadius: 20,
    margin: 20,
    marginVertical: 10,
    padding: 10,
  },
  imgWrapper: {
    fontSize: 45,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  upperView: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  detailWrapper: {
    flexDirection: "row",
    // backgroundColor: "green",
  },
  details: {
    paddingHorizontal: 10,
    color: "#a1a09d",
  },
  nameWrapper: {
    padding: 15,
  },
  lowerView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 50,
  },
});
