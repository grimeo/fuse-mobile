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

export default function HomeNavigators({
  navigation,
  isOnHomeTab,
  isOnChatTab,
  isOnTransactionTab,
  isOnSettingsTab,
}) {
  return (
    <View
      style={{
        width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginVertical: 5,
      }}
    >
      <TouchableOpacity
        delayedPressIn={0}
        style={[
          styles.navBtnContainer,
          isOnHomeTab ? { backgroundColor: "#6663" } : null,
        ]}
        onPress={() => {
          if (isOnHomeTab) {
            // refresh yung components sa baba
          } else navigation.navigate("HomeScreen");
        }}
      >
        <View style={{ width: 28, height: 28 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(homeIcon)}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        delayedPressIn={0}
        style={[
          styles.navBtnContainer,
          isOnChatTab ? { backgroundColor: "#6663" } : null,
        ]}
        onPress={() => {
          if (isOnChatTab) {
            // refresh yung components sa baba
          } else navigation.navigate("ChatScreen");
        }}
      >
        <View style={{ width: 28, height: 28 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(chatIcon)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        delayedPressIn={0}
        style={[
          styles.navBtnContainer,
          isOnTransactionTab ? { backgroundColor: "#6663" } : null,
        ]}
        onPress={() => {
          if (isOnTransactionTab) {
            // refresh yung components sa baba
          } else navigation.navigate("TransactionScreen");
        }}
      >
        <View style={{ width: 28, height: 28 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require(transactionIcon)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        delayedPressIn={0}
        style={[
          styles.navBtnContainer,
          isOnSettingsTab ? { backgroundColor: "#6663" } : null,
        ]}
        onPress={() => {
          if (isOnSettingsTab) {
            // refresh yung components sa baba
          } else navigation.navigate("SettingsScreen");
        }}
      >
        <View style={{ width: 28, height: 28 }}>
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
    padding: 3,
    // borderWidth: 2,
    borderRadius: 7,
  },
});
