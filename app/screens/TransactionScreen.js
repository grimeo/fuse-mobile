import React from "react";

import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import TransactionPreview from "../components/TransactionPreview";

export default function TransactionScreen(props) {
  const { navigation } = props;
  const userData = props.route.params;
  return (
    <View style={styles.container}>
      <HomeNavigators
        userData={userData}
        isOnTransactionTab={true}
        navigation={navigation}
      />
      <View style={{ flex: 1 }}>
        <TransactionPreview />
        <TransactionPreview />
        <TransactionPreview />
      </View>
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
