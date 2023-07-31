import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { StackActions } from "@react-navigation/native";

export default function PromptTypeOfUserScreen(props) {
  const { userData } = props.route.params;
  // console.log(userData);
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, padding: 20 }}>
        What type of user are you?
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("ImageUploadScreen", userData)
          );
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
          navigation.dispatch(
            StackActions.replace("ImageUploadScreen", userData)
          );
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
    </View>
  );
}
