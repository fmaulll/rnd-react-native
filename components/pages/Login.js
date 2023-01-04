import React from "react";
import LoginOrganism from "../organisms/LoginOrganism";

const Login = ({ navigation }) => {
  const handleNavigateEmail = () => {
    navigation.navigate("Register");
  };

  return (
    <LoginOrganism handleNavigateEmail={handleNavigateEmail} />
  );
};

export default Login;
