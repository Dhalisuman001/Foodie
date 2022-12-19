import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.group}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.name}>
          Suman <Text style={styles.text}>👋</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Order Details");
        }}
        style={{ backgroundColor: "#dff0ea", borderRadius: 19, margin: 10 }}
      >
        <Ionicons
          style={styles.groupIcon}
          name="md-cart"
          size={28}
          color="#2a8c6d"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  hello: {
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#181818",
  },
  name: {
    fontSize: 18,
    paddingLeft: 5,
  },
  text: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  group: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupIcon: {
    padding: 15,
  },
});
