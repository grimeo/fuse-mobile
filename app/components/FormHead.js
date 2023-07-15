import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FormHead({ leftHead, rightHead, tagline }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>{leftHead} </Text>
        <Text style={styles.back}>{rightHead}</Text>
      </View>
      <View>
        <Text style={styles.tagline}>{tagline}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },
  back: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },
  tagline: { fontSize: 18, color: "1b1b33", textAlign: "center" },
});
