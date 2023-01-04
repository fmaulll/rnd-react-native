import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import EmailIcon from "../../assets/icons/Email.svg";
import UserIcon from "../../assets/icons/User.svg";
import LockIcon from "../../assets/icons/Lock.svg";

const InputRegister = ({handleChange, handleRegister}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <StyledInput
        style={{ marginBottom: 28 }}
        placeholder="Ex: abc@example.com"
        icon={<EmailIcon />}
        onChangeText={(text) => handleChange("email", text)}
      />
      <Text style={styles.label}>Your Name</Text>
      <StyledInput
        style={{ marginBottom: 28 }}
        placeholder="Ex. Saul Ramirez"
        icon={<UserIcon />}
        onChangeText={(text) => handleChange("name", text)}
      />
      <Text style={styles.label}>Your Password</Text>
      <StyledInput
        style={{ marginBottom: 58 }}
        secureTextEntry={true}
        placeholder="Insert your password"
        icon={<LockIcon />}
        onChangeText={(text) => handleChange("password", text)}
      />
      <StyledButton
        style={{ marginBottom: 40 }}
        buttonType="blue"
        onPress={handleRegister}
      >
        Register
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
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default InputRegister;
