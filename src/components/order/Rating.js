import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const Rating = () => {
  const count = [1, 2, 3, 4, 5];
  const [star, setStar] = useState(0);
  const handelRating = (count) => {
    setStar(count);
  };
  return (
    <>
      {count.map((it, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handelRating(it)}>
            <AntDesign
              style={{ padding: 10 }}
              name={star > index ? "star" : "staro"}
              size={26}
              color="#62c480"
            />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default Rating;
