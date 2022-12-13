import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.container}>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../../img/logo.png")}
        />
        <Image
          style={styles.logoName}
          resizeMode="cover"
          source={require("../../img/name.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoName: {
    marginTop: 20,
    width: 189,
    height: 44,
  },
  logoIcon: {
    width: 128,
    height: 128,
  },
  container: {
    alignItems: "center",
    width: 189,
    height: 197,
    backgroundColor: "#fff",
  },
  splashScreen: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default SplashScreen;
