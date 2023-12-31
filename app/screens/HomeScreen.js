import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import Service from "../components/Service";
import ServicesContainer from "../components/ServicesContainer";
import AddNewPostBtn from "../components/AddNewPostBtn";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HomeNavigators navigation={navigation} isOnHomeTab={true} />

      <View style={{ flex: 1 }}>
        <ServicesContainer navigation={navigation}>
          <AddNewPostBtn navigation={navigation} />
          <Service navigation={navigation} />
          <Service navigation={navigation} />
          <Service navigation={navigation} />
          <Service navigation={navigation} />
          <Service navigation={navigation} />
        </ServicesContainer>
      </View>
    </View>
  );
}
