import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function FormInput({ placeholder, title }) {
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#666",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
