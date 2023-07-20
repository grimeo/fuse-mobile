import React from "react";
import { TouchableOpacity } from "react-native";

import { View, Text, Dimensions, Image } from "react-native";

const width = Dimensions.get("window").width;
const chatIcon = "../assets/icons/chat.png";

export default function Service() {
  return (
    <View style={{ width: width, marginTop: 5, borderWidth: 1 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{
              uri: "https://res.cloudinary.com/dz7vdp3g0/image/upload/v1689839224/64b8d298c6015d7c2a00de8c_profile.jpg",
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Juan Dela Frooze
          </Text>
          <Text style={{ fontSize: 12 }}>September 11, 2002</Text>
        </View>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 17, paddingHorizontal: 20 }}>
          💼 Grass Mowing
        </Text>
        <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>
          📌 San Jose Del Monte, Bulacan
        </Text>
        <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>
          🕓 Saturday-Sunday 8am-5pm
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: 16,
            fontWeight: "bold",
            paddingHorizontal: 30,
            marginBottom: 10,
          }}
        >
          ₱ 400
        </Text>
      </View>

      <View
        style={{
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1.3,
              opacity: 0.7,
              borderRadius: 5,
              marginHorizontal: 4,
              padding: 2,
            }}
          >
            <Text style={{ fontSize: 16 }}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              borderWidth: 1.3,
              borderRadius: 5,
              padding: 1,
              opacity: 0.7,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require(chatIcon)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
