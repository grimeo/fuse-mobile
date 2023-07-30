import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function AddNewPost({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingHorizontal: 10,
        }}
        onPress={() => navigation.navigate("PostTemplateModal")}
      >
        <Text style={{ fontSize: 16 }}>Create New Post</Text>
        <View
          style={{
            width: 33,
            height: 33,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 33 / 2,
            margin: 5,
          }}
        >
          <Ionicons name="add" size={27} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
