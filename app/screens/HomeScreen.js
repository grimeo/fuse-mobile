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

export default function HomeScreen(props) {
  const { navigation } = props;
  const userData = props.route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HomeNavigators
        navigation={navigation}
        userData={userData}
        isOnHomeTab={true}
      />

      <View style={{ flex: 1 }}>
        <ServicesContainer navigation={navigation}>
          <AddNewPostBtn navigation={navigation} />
          <Service userData={userData} navigation={navigation} />
        </ServicesContainer>
      </View>
    </View>
  );
}
