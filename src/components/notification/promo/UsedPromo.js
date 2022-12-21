import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Used from "./Used";
const UsedPromo = () => {
  const [active, setActive] = useState(true);
  return (
    <View>
      <View>
        <Pressable
          style={{ flexDirection: "row", margin: 20 }}
          onPress={() => setActive(!active)}
        >
          <Ionicons
            name={active ? "swap-vertical" : "swap-horizontal"}
            size={20}
          />
          <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>
            Already Used
          </Text>
        </Pressable>
      </View>
      {active ? <Used /> : null}
    </View>
  );
};

export default UsedPromo;
