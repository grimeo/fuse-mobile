import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

const arrowBackIcon = "../assets/icons/arrow_back.png";
const ScreenWidth = Dimensions.get("window").width;

export default function ProfileScreen() {
  const [isServiceProvider, setIsServiceProvider] = useState(true);
  return (
    <View style={styles.container}>
      {/* back btn */}
      <View style={{ width: "90%" }}>
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "60%", height: "60%", opacity: 0.7 }}
            source={require(arrowBackIcon)}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* user profile header */}
        <View
          style={{
            borderWidth: 1,
            width: ScreenWidth * 0.9,
            justifyContent: "center",
            alignItems: "center",
            padding: 30,
          }}
        >
          <View
            style={{
              height: 125,
              width: 125,
              borderRadius: 125 / 2,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderStyle: "solid",
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dz7vdp3g0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1689636918/64b5cf4411d9ec637c113664_profile.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: "bold" }}>
            Juan Dela Frooze
          </Text>
          {isServiceProvider ? <Text>Service Provider </Text> : null}
        </View>

        {/* rating */}
        <View>
          <View
            style={{
              borderWidth: 1,
              width: ScreenWidth * 0.9,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Text style={{ fontSize: 18 }}>Rating</Text>
            <View>
              <Text style={{ fontSize: 22, padding: 8 }}>
                {"⭐ ⭐ ⭐ ⭐ ⭐"}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: 2,
                  }}
                >
                  View feedbacks
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* offered services */}
        {/* container */}
        <View
          style={{
            borderWidth: 1,
            width: ScreenWidth * 0.9,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, paddingBottom: 10 }}>Services</Text>
          {/* services */}
          <View
            style={{
              borderWidth: 1,
              width: "100%",
              height: 200,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              borderWidth: 1,
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
