import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ name, btnPress }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={btnPress}>
        <Text style={styles.btnText}> {name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#20d672",
    width: 180,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 20,
  },
  btnText: {
    padding: 10,
    fontSize: 20,
    color: "white",
  },
});
