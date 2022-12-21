import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Order from "./order/Order";
import Promo from "./promo/Promo";
import ToggleOption from "./promo/ToggleOption";
import UsedPromo from "./promo/UsedPromo";

const Notification = () => {
  const [active, setActive] = useState(true);
  return (
    <View>
      <ToggleOption active={active} setActive={setActive} />
      {active ? (
        <View>
          <Promo />
          <UsedPromo />
        </View>
      ) : (
        <Order />
      )}
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({});
