import React from "react";
import { View, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";

const Card = () => {
  const list = [
    { img: require("../../../../assets/poster.png") },
    { img: require("../../../../assets/poster1.png") },
    { img: require("../../../../assets/poster2.png") },
    { img: require("../../../../assets/poster3.png") },
  ];
  return (
    <View>
      <ImageSlider
        data={[
          { img: require("../../../../assets/poster.png") },
          { img: require("../../../../assets/poster1.png") },
          { img: require("../../../../assets/poster2.png") },
          { img: require("../../../../assets/poster3.png") },
        ]}
        localImg
        autoPlay
        closeIconColor="#fff"
        caroselImageContainerStyle={styles.poster}
        caroselImageStyle={styles.posterImg}
      />
    </View>
  );
};

export default Card;
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
