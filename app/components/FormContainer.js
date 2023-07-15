import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function FormContainer({ children }) {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
  },
});
