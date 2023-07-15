import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function FormHead({
  leftHead,
  rightHead,
  tagline,
  leftHeadTranslate = 40,
  rightHeadTranslate = -60,
  rightHeadOpac = 0,
}) {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.welcome,
            { transform: [{ translateX: leftHeadTranslate }] },
          ]}
        >
          {leftHead}{" "}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.back,
            {
              opacity: rightHeadOpac,
              transform: [{ translateX: rightHeadTranslate }],
            },
          ]}
        >
          {rightHead}
        </Animated.Text>
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
