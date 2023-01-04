import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import BackButton from "../atoms/BackButton";
import TitleRegister from "../molecules/TitleRegister";
import InputRegister from "../molecules/InputRegister";

const Register = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: ""
  })

  const handleClickBack = () => {
    navigation.navigate("Login");
  };

  const handleChange = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const handleRegister = () => {
    console.log(data)
  }

  return (
    <View style={styles.wrapper}>
      <BackButton onPress={handleClickBack} />
      <TitleRegister />
      <InputRegister handleChange={handleChange} handleRegister={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 35,
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
