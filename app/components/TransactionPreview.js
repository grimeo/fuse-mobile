import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;

export default function TransactionPreview() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
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
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Your Transaction with {"Juan Dela Frooze"}
        </Text>
        <Text style={styles.secondaryText}>Transaction description ...</Text>
        <Text style={styles.date}>September 11, 2002 9:23am</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#6669",
    marginTop: 5,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: "hidden",
  },
  textContainer: { width: width * 0.7, paddingHorizontal: 10 },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryText: { fontSize: 16 },
  date: { fontSize: 14, color: "#666" },
});
