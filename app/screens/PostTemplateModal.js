import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Platform } from "react-native";

import { StackActions } from "@react-navigation/native";

import client from "../api/client";

const arrowBackIcon = "../assets/icons/arrow_back.png";

export default function PostTemplateModal(props) {
  const { navigation } = props;
  const { userData } = props.route.params.userData;
  const token = props.route.params.userData.token;

  const [postInfo, setPostInfo] = useState({
    ServiceTitle: "",
    Description: "",
    Schedule: "",
    Location: "",
    Offer: "",
    IsPostByServiceProvider: userData.isServiceProvider,
    Avatar: userData.Avatar,
    PostOwnerEmail: userData.Email,
    PostOwner:
      userData.FirstName + " " + userData.MiddleName + " " + userData.LastName,
  });

  const {
    ServiceTitle,
    Description,
    Schedule,
    Location,
    Offer,
    IsPostByServiceProvider,
    Avatar,
    PostOwner,
    PostOwnerEmail,
  } = postInfo;

  const handleOnChangeText = (value, fieldname) => {
    setPostInfo({ ...postInfo, [fieldname]: value });
  };
  const createPost = async () => {
    try {
      const res = await client.post("/create-post", postInfo);
      // console.log(res.data);
      const { success } = res.data;
      if (!success) console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
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
            navigation.dispatch(StackActions.pop(1));
          }}
        >
          <Image
            style={{ width: "60%", height: "60%", opacity: 0.7 }}
            source={require(arrowBackIcon)}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5 }}>
          Create post
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "90%",
          height: 400,
          // borderWidth: 1,
          // borderRadius: 10,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              padding: 7,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 15,
            }}
            onChangeText={(value) => {
              handleOnChangeText(value, "ServiceTitle");
            }}
            value={ServiceTitle}
            placeholder="Service Title"
          />
          <TextInput
            multiline
            style={{
              fontSize: 16,
              borderWidth: 1,
              padding: 7,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 15,
            }}
            onChangeText={(value) => {
              handleOnChangeText(value, "Description");
            }}
            value={Description}
            placeholder="Description"
          />
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              padding: 7,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 15,
            }}
            onChangeText={(value) => {
              handleOnChangeText(value, "Schedule");
            }}
            value={Schedule}
            placeholder="Schedule"
          />
          <TextInput
            multiline
            style={{
              fontSize: 16,
              borderWidth: 1,
              padding: 7,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 15,
            }}
            onChangeText={(value) => {
              handleOnChangeText(value, "Location");
            }}
            value={Location}
            placeholder="Location"
          />
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              padding: 7,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 15,
            }}
            onChangeText={(value) => {
              handleOnChangeText(value, "Offer");
            }}
            value={Offer}
            placeholder="Offer"
          />
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "80%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
          onPress={() => {
            createPost();
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 18 }}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
            borderRadius: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 18 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
