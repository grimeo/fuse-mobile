import React from "react";

import { View, Text, Platform, StatusBar } from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import ChatList from "../components/ChatList";

export default function ChatScreen(props) {
  const { navigation, text } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HomeNavigators navigation={navigation} isOnChatTab={true} />
      <View style={{ flex: 1 }}>
        <ChatList text={text} navigation={navigation} />
      </View>
    </View>
  );
}
