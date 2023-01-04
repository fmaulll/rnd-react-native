import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import ButtonLogin from '../molecules/ButtonLogin';
import WelcomeLogin from '../molecules/WelcomeLogin';

const LoginOrganism = ({handleNavigateEmail}) => {
  return (
    <View style={styles.wrapper}>
      <WelcomeLogin />
      <ButtonLogin handleNavigateEmail={handleNavigateEmail} />
      <StatusBar style="auto" />
    </View>
    
  )
}

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    container: {
      width: "100%",
      paddingHorizontal: 35,
      marginBottom: 55,
    },
    getStarted: {
      width: "100%",
      paddingHorizontal: 35,
    },
  });

export default LoginOrganism