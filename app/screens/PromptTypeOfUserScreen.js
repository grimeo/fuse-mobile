import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function PromptTypeOfUserScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, padding: 20 }}>
        What type of user are you?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.replace("ImageUploadScreen"));
        }}
      >
        <Text
          style={{
            fontSize: 18,
            padding: 8,
            borderWidth: 1,
            borderRadius: 50,
            margin: 10,
          }}
        >
          Service Provider
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.replace("ImageUploadScreen"));
        }}
      >
        <Text
          style={{
            fontSize: 18,
            padding: 8,
            borderWidth: 1,
            borderRadius: 50,
            margin: 10,
          }}
        >
          Customer
        </Text>
      </TouchableOpacity>
      <Text
        style={{ fontSize: 18, padding: 5, opacity: 0.4, fontWeight: "bold" }}
        onPress={() => {
          navigation.dispatch(StackActions.replace("ImageUploadScreen"));
        }}
      >
        Skip
      </Text>
    </View>
  );
}
