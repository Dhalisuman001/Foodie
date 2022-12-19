import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import RNLocation from "react-native-location";

export default function App({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const orderStatus = () => {
    navigation.navigate("Order Status");
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={location}>
        <Marker coordinate={location} title="Marker" />
      </MapView>
      <View style={styles.msg}>
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <Ionicons name="mail" size={35} color="#3fd991" />
        </TouchableOpacity>
      </View>
      <View style={styles.call}>
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={clickHandler}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name="call" size={35} color="white" />
          <Text style={styles.text}>Call</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.agent}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={orderStatus}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../../../assets/avatar.png")}
          />
          <View style={{ flexDirection: "column", marginHorizontal: 34 }}>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>
              Mr. Sayan Dhali
            </Text>
            <Text style={{ color: "#c3c7c5" }}>📍 5 mins on the way</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  msg: {
    position: "absolute",
    padding: 13,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    right: 30,
    bottom: 30,
  },
  call: {
    position: "absolute",
    padding: 13,
    backgroundColor: "#3fd991",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    left: 30,
    bottom: 30,
    paddingHorizontal: 75,
  },
  agent: {
    position: "absolute",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    zIndex: 100,
    left: 30,
    bottom: 120,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
});
