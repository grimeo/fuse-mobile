import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { StackActions } from "@react-navigation/native";

import client from "../api/client";

export default function PromptTypeOfUserScreen(props) {
  const { navigation } = props;
  const userData = props.route.params.userData;
  const token = props.route.params.token;
  // console.log("userdata", userData);

  const setProvider = async () => {
    try {
      const res = await client.post(
        "/set-usertype",
        {
          isServiceProvider: true,
          user: userData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: "JWT " + token,
          },
        }
      );

      console.log(res.data);
      const { success } = res.data;
      if (!success) console.log(res.data.message);

      navigation.dispatch(
        StackActions.replace("ImageUploadScreen", {
          userData: res.data.user,
          token: token,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const setClient = async () => {
    try {
      const res = await client.post(
        "/set-usertype",
        {
          isServiceProvider: false,
          user: userData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: "JWT " + token,
          },
        }
      );

      console.log(res.data.user);
      const { success } = res.data;
      if (!success) console.log(res.data.message);

      navigation.dispatch(
        StackActions.replace("ImageUploadScreen", {
          userData: res.data.user,
          token: token,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, padding: 20 }}>
        What type of user are you?
      </Text>
      <TouchableOpacity onPress={setProvider}>
        <Text
          style={{
            fontSize: 18,
            padding: 8,
            borderWidth: 1,
            borderRadius: 50,
            margin: 10,
          }}
        >
          Service Provider
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setClient}>
        <Text
          style={{
            fontSize: 18,
            padding: 8,
            borderWidth: 1,
            borderRadius: 50,
            margin: 10,
          }}
        >
          Customer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
