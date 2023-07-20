import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from "react-native";

export default function FormSelectorBtn({
  backgroundColor,
  style,
  textTitle,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style, { backgroundColor }]}>
        <Text style={styles.text}>{textTitle}</Text>
      </Animated.View>
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
