import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyledButton from "../atoms/StyledButton";
import GoogleIcon from "../../assets/icons/Google.svg";
import EmailIcon from "../../assets/icons/Email.svg";

const ButtonLogin = ({handleNavigateEmail}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, marginBottom: 18 }}>
        Let’s Get Started...
      </Text>
      <StyledButton
        style={{ marginBottom: 11 }}
        buttonType="white"
        icon={<GoogleIcon />}
      >
        Continue with Google
      </StyledButton>
      <StyledButton
        style={{ marginBottom: 24 }}
        buttonType="white"
        icon={<EmailIcon />}
        onPress={handleNavigateEmail}
      >
        Continue with Email
      </StyledButton>
      <Text style={{ fontSize: 16, marginBottom: 18, textAlign: "center" }}>
        Already have an account?{" "}
        <Text
          style={{
            fontWeight: "700",
            color: "#575DFB",
            textDecorationLine: "underline",
          }}
        >
          Login
        </Text>
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
export default ButtonLogin;
