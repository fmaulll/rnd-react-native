import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleRegister = () => {
  return (
    <View style={{ ...styles.container, marginBottom: 40 }}>
      <Text style={styles.title}>Register</Text>
      <Text style={{ fontSize: 16 }}>
        Create an{" "}
        <Text style={{ color: "#575DFB", fontWeight: "700" }}>account</Text> to
        access all the features of{" "}
        <Text style={{ fontWeight: "700" }}>APP Template!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#575DFB",
    marginBottom: 19,
  },
});
export default TitleRegister;
