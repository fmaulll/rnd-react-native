import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StyledButton = ({
  icon,
  buttonType = "blue",
  onPress,
  children,
  style
}) => {
  const renderStyle = (type) => {
    if (type === "white") {
      return {
        borderColor: "#000000",
        backgroundColor: "#fff",
        borderWidth: 1.5,
      };
    }
    if (type === "blue") {
      return {
        backgroundColor: "#575DFB",
      };
    }
  };

  const renderText = (type) => {
    if (type === "white") {
      return {
        fontSize: 16,
        color: "#000000",
      };
    }
    if (type === "blue") {
      return {
        fontSize: 16,
        color: "#fff",
      };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...renderStyle(buttonType), ...styles.button, ...style }}
    >
      <View style={styles.container}>
        {icon ? icon : null}
        <Text style={{ ...renderText(buttonType), ...styles.text, marginLeft: icon ? 8 : 0 }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default StyledButton;
