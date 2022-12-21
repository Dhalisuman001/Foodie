import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const PosterCopy = ({ item }) => {
  return (
    <Image
      style={styles.posterImg}
      source={require("../../../../assets/poster.png")}
    />
  );
};

export default PosterCopy;
const styles = StyleSheet.create({
  posterImg: {
    resizeMode: "contain",
    height: 170,
  },
});
