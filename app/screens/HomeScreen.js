import React from "react";
import { View, Text, Platform, StatusBar } from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import HomeHead from "../components/HomeHead";
import Service from "../components/Service";
import ServicesContainer from "../components/ServicesContainer";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: (Platform.OS = "ios" ? StatusBar.currentHeight : 0),
      }}
    >
      <HomeHead />
      <HomeNavigators />
      <View style={{ flex: 1 }}>
        {
          // onPress={() => {
          //   navigation.dispatch(StackActions.replace("HomeScreen"));
          // }
        }
        <ServicesContainer>
          <Service />
          <Service />
          <Service />
          <Service />
        </ServicesContainer>
      </View>
    </View>
  );
}
