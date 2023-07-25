import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { StatusBarPadding } from "../utils/Constants";
const arrowBackIcon = "../assets/icons/arrow_back.png";

export default function PrivateChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={{ width: "60%", height: "60%", opacity: 0.7 }}
            source={require(arrowBackIcon)}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5 }}>
          Juan Dela Frooze
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        keyboardDismissMode="interactive"
      ></ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderWidth: 1,
        }}
      >
        <TextInput
          multiline
          editable
          style={{
            width: "85%",
            maxHeight: 150,
            borderWidth: 2,
            borderRadius: 15,
            fontSize: 17,
            paddingHorizontal: 10,
            paddingVertical: 3,
            overflow: "scroll",
            backgroundColor: "#6662",
          }}
          placeholder="Message..."
        />
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            //send
          }}
        >
          <Feather name="send" size={30} color="black" />
          {/* <Image
            style={{ width: "90%", height: "90%", opacity: 0.7 }}
            source={require(arrowBackIcon)}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarPadding,
    flex: 1,
  },
});
