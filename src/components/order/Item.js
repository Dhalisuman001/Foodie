import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Item = ({ item }) => {
  const [count, setCount] = useState(1);
  const countHandler = (flag) => {
    if (flag) {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.imgWrapper}>
        <Text style={styles.img}>{item.img}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
      <View style={styles.quantityWrapper}>
        <TouchableOpacity onPress={() => countHandler(0)}>
          <AntDesign
            style={{ padding: 10 }}
            name="minuscircle"
            size={26}
            color="#62c480"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "400",
            marginTop: 3,
            marginHorizontal: 5,
          }}
        >
          {count}
        </Text>
        <TouchableOpacity onPress={() => countHandler(1)}>
          <AntDesign
            style={{ padding: 10 }}
            name="pluscircle"
            size={26}
            color="#62c480"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-evenly",
  },
  img: {
    fontSize: 35,
    padding: 10,
    backgroundColor: "#f5e8d3",
    borderRadius: 15,
  },
  imgWrapper: {
    // backgroundColor: "#f5e8d3",
  },
  textWrapper: {
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    padding: 3,
  },
  quantityWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
});
