import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function PromptTypeOfUserScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PromptTypeOfUserScreen</Text>
      <Text
        onPress={() => {
          navigation.dispatch(StackActions.replace("HomeScreen"));
        }}
      >
        Skip
      </Text>
    </View>
  );
}
