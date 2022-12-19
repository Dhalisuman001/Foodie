import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const ToggleQuantity = () => {
  const [count, setCount] = useState(0);
  const countHandler = (flag) => {
    if (flag) {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };
  return (
    <>
      <TouchableOpacity onPress={() => countHandler(0)}>
        <AntDesign
          style={{ padding: 10 }}
          name="minuscircleo"
          size={35}
          color="#62c480"
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 25, fontWeight: "400", marginTop: 10 }}>
        {count}
      </Text>
      <TouchableOpacity onPress={() => countHandler(1)}>
        <AntDesign
          style={{ padding: 10 }}
          name="pluscircleo"
          size={35}
          color="#62c480"
        />
      </TouchableOpacity>
    </>
  );
};

export default ToggleQuantity;
const styles = StyleSheet.create({
  quantityWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 85,
  },
});
