import React, { useState } from "react";
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
import SentMessage from "../components/SentMessage";
const arrowBackIcon = "../assets/icons/arrow_back.png";

export default function PrivateChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const messageTemplate = {
    message: "",
    time: "",
  };

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
            width: 44,
            height: 44,
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
      <ScrollView style={{ flex: 1 }} keyboardDismissMode="interactive">
        {messages.map((item, index) => {
          return <SentMessage key={index} message={item} />;
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderTopWidth: 1,
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
          onChangeText={(text) => {
            setMessage(text);
          }}
          value={message}
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
            setMessage(message);
            if (!message == null || !message == "") {
              setMessages([
                ...messages,
                message.replace("/^s+|s+$/g", "").trim(),
              ]);
            }
            setMessage("");
            console.log(messages);
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
