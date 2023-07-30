import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import { StackActions } from "@react-navigation/native";

const width = Dimensions.get("window").width;

export default function LogoutBtn({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(StackActions.replace("AppFormScreen"));
      }}
    >
      <Text
        style={{
          width: width * 0.9,
          backgroundColor: "#6664",
          borderRadius: 20,
          fontSize: 18,
          textAlign: "center",
          paddingVertical: 10,
          margin: 10,
        }}
      >
        Log out
      </Text>
    </TouchableOpacity>
  );
}
