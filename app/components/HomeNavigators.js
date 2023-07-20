import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const homeIcon = "../assets/icons/home.png";
const chatIcon = "../assets/icons/chat.png";
const transactionIcon = "../assets/icons/transaction.png";
const settingsIcon = "../assets/icons/settings.png";

export default function HomeNavigators() {
  return (
    <View
      style={{
        // width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <TouchableOpacity
        style={styles.navBtnContainer}
        onPress={() => {
          navigation.dispatch(StackActions.replace("HomeScreen"));
        }}
      >
        <View style={{ width: 33, height: 33 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(homeIcon)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBtnContainer}
        onPress={() => {
          navigation.dispatch(StackActions.replace("ChatScreen"));
        }}
      >
        <View style={{ width: 33, height: 33 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(chatIcon)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBtnContainer}>
        <View style={{ width: 33, height: 33 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(transactionIcon)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBtnContainer}
        onPress={() => {
          navigation.dispatch(StackActions.replace("TransactionScreen"));
        }}
      >
        <View style={{ width: 33, height: 33 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(settingsIcon)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    // borderWidth: 2,
    borderRadius: 7,
  },
});
