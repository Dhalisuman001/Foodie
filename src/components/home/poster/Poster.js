import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Poster = () => {
  return (
    <View style={styles.poster}>
      {/* TODO: need to add carousel */}
      {/* https://www.npmjs.com/package/react-native-snap-carousel */}
      <Image
        style={styles.posterImg}
        source={require("../../../../assets/poster.png")}
      />
    </View>
  );
};

export default Poster;
const styles = StyleSheet.create({
  posterImg: {
    resizeMode: "contain",
    height: 170,
  },

  poster: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});
