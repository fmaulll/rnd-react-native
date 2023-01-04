import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "700", color: "#575DFB" }}>
        APP Template
      </Text>
      <Text style={{ fontSize: 16 }}>
        A place where you can track all your expenses and incomes...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 35,
    marginBottom: 55,
  },
});

export default WelcomeLogin;
