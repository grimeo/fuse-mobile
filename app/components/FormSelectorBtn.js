import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default function FormSelectorBtn({ backgroundColor, style, textTitle }) {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, style, { backgroundColor }]}>
        <Text style={styles.text}>{textTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "whitesmoke",
    fontSize: 16,
  },
});
