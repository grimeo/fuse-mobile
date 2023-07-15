import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FormSubmitBtn({ label, submitting, onPress }) {
  const backgroundColor = submitting ? "#666" : "#6668";

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{label}</Text>
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
