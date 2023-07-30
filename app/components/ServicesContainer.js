import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

export default function ServicesContainer({ navigation, children }) {
  return <ScrollView navigation={navigation}>{children}</ScrollView>;
}
