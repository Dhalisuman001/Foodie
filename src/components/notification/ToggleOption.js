import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const ToggleOption = ({ active, setActive }) => {
  return (
    <View>
      <View style={styles.option}>
        <Pressable
          onPress={() => setActive(!active)}
          style={[
            styles.notifyType,
            { backgroundColor: active ? "#3fd991" : "#d7fce1" },
          ]}
        >
          <Text style={styles.Text}>🎉 Promo</Text>
        </Pressable>
        <Pressable
          onPress={() => setActive(!active)}
          style={[
            styles.notifyType,
            { backgroundColor: active ? "#d7fce1" : "#3fd991" },
          ]}
        >
          <Text style={styles.Text}>🍲 Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ToggleOption;
const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  notifyType: {
    backgroundColor: "#3fd991",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 22,
  },
  Text: {
    fontSize: 17,
  },
});
