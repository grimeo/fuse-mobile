import React from "react";

import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

export default function VerifyBtn({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: 50,
        borderWidth: 1,
        borderColor: "#6666",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
        paddingVertical: 5,
      }}
    >
      <Feather
        name="user-check"
        size={28}
        color="black"
        style={{ paddingHorizontal: 30 }}
      />
      <Text style={{ fontSize: 20 }}>Verify your account</Text>
    </TouchableOpacity>
  );
}
