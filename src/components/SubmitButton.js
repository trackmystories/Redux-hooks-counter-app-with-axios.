import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SubmitButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 30,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  text: {
    margin: "3%",
    fontWeight: "bold",
    textAlign: "center",
  },
});
