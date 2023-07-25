import React from "react";

import { View, Text, Platform, StatusBar } from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import ChatList from "../components/ChatList";

export default function ChatScreen({ navigation, text }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: (Platform.OS = "ios" ? StatusBar.currentHeight : 0),
      }}
    >
      <HomeNavigators navigation={navigation} isOnChatTab={true} />
      <View style={{ flex: 1 }}>
        <ChatList text={text} navigation={navigation} />
      </View>
    </View>
  );
}
