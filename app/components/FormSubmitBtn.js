import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FormSubmitBtn({ title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "#666",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
