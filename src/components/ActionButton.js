import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ActionButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  text: {
    margin: "3%",
    textAlign: "center",
  },
});
