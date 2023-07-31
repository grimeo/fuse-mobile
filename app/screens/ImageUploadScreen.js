import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import client from "../api/client";

import { StackActions } from "@react-navigation/native";

function ImageUpload(props) {
  const { navigation } = props;

  const { token } = props.route.params;

  const [Avatar, setAvatar] = useState("");

  const [uploadProgress, setUploadProgress] = useState(0);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") alert("Camera roll permission is required.");

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    }
  };

  const uploadAvatar = async () => {
    // console.log(Avatar);
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: Avatar,
      type: "image/jpg",
    });
    try {
      const res = await client.post("/upload-profile", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: "JWT " + token,
        },
      });
      // console.log(res.data);
      // console.log(token);
      if (res.data.success) {
        navigation.dispatch(StackActions.replace("HomeScreen", res.data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtnContainer}>
          {Avatar ? (
            <Image
              source={{ uri: Avatar }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : null}
          {Avatar ? null : <Text style={styles.pickImage}>Upload Avatar</Text>}
        </TouchableOpacity>

        {Avatar ? (
          <Text onPress={uploadAvatar} style={styles.uploadBtn}>
            Upload
          </Text>
        ) : null}
        <Text
          onPress={() => {
            navigation.dispatch(StackActions.replace("HomeScreen"));
          }}
          style={styles.skipBtn}
        >
          Skip
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    overflow: "hidden",
  },
  pickImage: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.5,
    fontWeight: "bold",
  },
  skipBtn: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
    opacity: 0.5,
  },
  uploadBtn: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
    backgroundColor: "#25d366",
    color: "white",
    borderRadius: 8,
    marginTop: 10,
  },
});

export default ImageUpload;
