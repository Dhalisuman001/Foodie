import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Promo from "./Promo";
import ToggleOption from "./ToggleOption";
import UsedPromo from "./UsedPromo";

const Notification = () => {
  const [active, setActive] = useState(true);
  return (
    <View>
      <ToggleOption active={active} setActive={setActive} />
      <Promo />
      <UsedPromo />
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({});
