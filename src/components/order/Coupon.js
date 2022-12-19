import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const Coupon = () => {
  const [coupon, setCoupon] = useState("");

  return (
    <View style={{ margin: 15, flexDirection: "row" }}>
      <TextInput
        value={coupon}
        onChangeText={setCoupon}
        style={styles.inputBox}
        placeholder="enter coupon"
      />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Apply?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coupon;
const styles = StyleSheet.create({
  inputBox: {
    height: 28,
    marginTop: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#f0a42b",
    padding: 8,
    fontSize: 16,
    backgroundColor: "#edebe8",
    borderBottomColor: "#f0a42b",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    width: 190,
  },
  appButtonContainer: {
    elevation: 8,
    marginTop: 11,
    backgroundColor: "#f0a42b",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    // textTransform: "uppercase",
  },
});
