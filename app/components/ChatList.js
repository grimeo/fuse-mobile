import { View, Text } from "react-native";
import React from "react";
import ChatConversation from "./ChatConversation";
import { ScrollView } from "react-native";

export default function ChatList({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ChatConversation navigation={navigation} />
      <ChatConversation navigation={navigation} />
      <ChatConversation navigation={navigation} />
      <ChatConversation navigation={navigation} />
    </ScrollView>
  );
}
