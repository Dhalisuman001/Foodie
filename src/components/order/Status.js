import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../products/Button";
import Rating from "./Rating";
// import Entypo from "@expo/vector-icons/Entypo";
const Status = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text style={{ fontSize: 23, fontWeight: "700" }}>
          Your orderis pending
        </Text>
        <Text style={{ fontSize: 17, color: "#abaaa7" }}>
          Please rate our delivery
        </Text>
      </View>
      <View style={styles.avater}>
        <Image
          style={styles.img}
          source={require("../../../assets/avatar.png")}
        />
      </View>
      <Text style={{ fontWeight: "600", alignSelf: "center", fontSize: 20 }}>
        Mr. Sayan Dhali
      </Text>
      <View style={styles.rating}>
        <Rating />
      </View>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <TextInput
          // value={coupon}
          // onChangeText={setCoupon}
          style={styles.inputBox}
          placeholder="✍️ Leave your feedback"
        />
        <Button name="Submit" btnPress={() => navigation.navigate("Home")} />
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.btnText}> Skip feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Status;
const styles = StyleSheet.create({
  avater: {
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  rating: {
    justifyContent: "center",
    flexDirection: "row",
  },
  inputBox: {
    marginTop: 10,
    marginHorizontal: 8,
    padding: 13,
    paddingHorizontal: 30,
    fontSize: 16,
    backgroundColor: "#edebe8",
    borderBottomColor: "#f0a42b",
    borderRadius: 20,
  },
  btnContainer: {
    width: 180,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 6,
  },
  btnText: {
    padding: 10,
    fontSize: 20,
  },
});
