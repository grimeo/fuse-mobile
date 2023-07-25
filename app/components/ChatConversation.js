import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, Text, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default function ChatConversation({ navigation, text }) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        flexDirection: "row",
        marginTop: 3,
        borderWidth: 1,
        padding: 10,
      }}
      onPress={() => {
        navigation.navigate("PrivateChatScreen");
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 60 / 2,
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={{
            uri: "https://res.cloudinary.com/dz7vdp3g0/image/upload/v1689839224/64b8d298c6015d7c2a00de8c_profile.jpg",
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Juan Dela Frooze
        </Text>
        <Text style={{ fontSize: 16 }}>Juan: 9am-11am?</Text>
      </View>
    </TouchableOpacity>
  );
}
