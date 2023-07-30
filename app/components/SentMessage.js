import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SentMessage({ key, message }) {
  return (
    <Text
      style={[styles.text, { width: message.length < 40 ? "auto" : "70%" }]}
      key={key}
    >
      {message}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    alignSelf: "flex-end",
    marginTop: 10,
    marginHorizontal: 10,
    padding: 7,
    borderWidth: 1,
    borderRadius: 10,
  },
});
