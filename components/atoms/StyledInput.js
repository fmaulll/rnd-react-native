import React, { useRef } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const StyledInput = ({ icon, onChange, style, ...other }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <TouchableOpacity onPress={handleFocus} style={{...styles.root, ...style}}>
      <View style={styles.container}>
        {icon ? <View>{icon}</View> : null}
        <TextInput
          ref={inputRef}
          autoComplete="email"
          style={styles.input}
          onChangeText={onChange}
          autoCapitalize="none"
          {...other}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#575DFB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  input: {
    marginLeft: 15,
    width: "100%",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default StyledInput;
