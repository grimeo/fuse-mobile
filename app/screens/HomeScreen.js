import { View, Text } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      <Text
      // onPress={() => {
      //   navigation.dispatch(StackActions.replace("HomeScreen"));
      // }}
      >
        Skip
      </Text>
    </View>
  );
}
