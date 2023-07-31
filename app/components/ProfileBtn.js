import React from "react";

import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default function ProfileBtn({ navigation, userData }) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#6666",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingVertical: 5,
      }}
      onPress={() => {
        navigation.navigate("ProfileScreen", userData);
        // console.log(userData);
      }}
    >
      <View style={{ width: 45, height: 45 }}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 45 / 2,
          }}
          source={{
            uri: userData.Avatar,
          }}
        />
      </View>
      <Text style={{ fontSize: 20, paddingLeft: 20 }}>
        {userData.FirstName +
          " " +
          userData.MiddleName +
          " " +
          userData.LastName}
      </Text>
    </TouchableOpacity>
  );
}
