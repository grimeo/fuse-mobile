import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import HomeNavigators from "../components/HomeNavigators";
import Service from "../components/Service";
import ServicesContainer from "../components/ServicesContainer";
import AddNewPostBtn from "../components/AddNewPostBtn";

import client from "../api/client";

export default function HomeScreen(props) {
  const { navigation } = props;
  const userData = props.route.params;
  console.log(userData);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await client.post("/get-posts");
        const { success } = res.data;
        if (success) {
          setPosts(res.data.posts);
          // console.log(posts.length);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getPosts();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HomeNavigators
        navigation={navigation}
        userData={userData}
        isOnHomeTab={true}
      />
      <View style={{ flex: 1 }}>
        <ServicesContainer userData={userData} navigation={navigation}>
          <AddNewPostBtn navigation={navigation} userData={userData} />
          {posts.map((post, index) => {
            return (
              <Service key={index} postData={post} navigation={navigation} />
            );
          })}
        </ServicesContainer>
      </View>
    </View>
  );
}
