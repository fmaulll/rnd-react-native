import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import BackIcon from "../../assets/icons/Back.svg";
import EmailIcon from "../../assets/icons/Email.svg";
import UserIcon from "../../assets/icons/User.svg";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";

const Register = ({ navigation }) => {
  const handleClickBack = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.back}>
        <TouchableHighlight onPress={handleClickBack}>
          <BackIcon />
        </TouchableHighlight>
      </View>
      <View style={{ ...styles.container, marginBottom: 40 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            color: "#575DFB",
            marginBottom: 19,
          }}
        >
          Register
        </Text>
        <Text style={{ fontSize: 16 }}>
          Create an{" "}
          <Text style={{ color: "#575DFB", fontWeight: "700" }}>account</Text>{" "}
          to access all the features of{" "}
          <Text style={{ fontWeight: "700" }}>APP Template!</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <StyledInput
          style={{ marginBottom: 28 }}
          placeholder="Ex: abc@example.com"
          icon={<EmailIcon />}
        />
        <Text style={styles.label}>Your Name</Text>
        <StyledInput
          style={{ marginBottom: 28 }}
          placeholder="Ex. Saul Ramirez"
          icon={<UserIcon />}
        />
        <Text style={styles.label}>Your Password</Text>
        <StyledInput
          style={{ marginBottom: 58 }}
          secureTextEntry={true}
          placeholder="Insert your password"
          icon={<UserIcon />}
        />
        <StyledButton style={{marginBottom: 40}} buttonType="blue" onPress={() => {}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 35,
  },
  back: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 21,
    marginTop: 57,
  },
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default Register;
