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

export default function PrivateChatScreen(props) {
  const { navigation } = props;
  const { postData } = props.route.params;
  // console.log(postData);

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
          {postData.PostOwner}
        </Text>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            paddingVertical: 3,
            marginLeft: 50,
            borderWidth: 1.5,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900" }}>
            Avail for {postData.Offer}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }} keyboardDismissMode="interactive">
        {/* <Text>{postData.ServiceTitle}</Text>
        <Text>{postData.Description}</Text>
        <Text>{postData.Schedule}</Text>
        <Text>{postData.Location}</Text>
        <Text>{postData.Offer}</Text> */}
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
            // console.log(messages);
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
