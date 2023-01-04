import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import BackIcon from "../../assets/icons/Back"

const BackButton = ({onPress}) => {
  return (
    <View style={styles.back}>
      <TouchableOpacity onPress={onPress}>
        <BackIcon />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 21,
    marginTop: 57,
  },
})
export default BackButton