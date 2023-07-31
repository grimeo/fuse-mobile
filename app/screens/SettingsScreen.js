import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { StackActions } from "@react-navigation/native";

import HomeNavigators from "../components/HomeNavigators";
import ProfileBtn from "../components/ProfileBtn";
import LogoutBtn from "../components/LogoutBtn";
import VerifyBtn from "../components/VerifyBtn";

export default function SettingsScreen(props) {
  console.log(props);
  const { navigation } = props;
  const { user } = props.route.params;
  return (
    <View style={styles.container}>
      <HomeNavigators isOnSettingsTab={true} navigation={navigation} />
      <View style={{ flex: 1, paddingTop: 10 }}>
        <ProfileBtn userData={user} navigation={navigation} />
        <VerifyBtn navigation={navigation} />
      </View>
      <LogoutBtn navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
