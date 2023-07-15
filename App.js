import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native";
import FormHead from "./app/components/FormHead";
import FormSelectorBtn from "./app/components/FormSelectorBtn";
import LoginForm from "./app/components/LoginForm";
import SignUpForm from "./app/components/SignUpForm";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <View style={{ height: 80 }}>
        <FormHead
          leftHead={"Welcome "}
          rightHead={"Back"}
          tagline={"wala paring tagline"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor="#666"
          textTitle="Log in"
        />

        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor="#6668"
          textTitle="Sign up"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm />
        <SignUpForm />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderRight: { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  borderLeft: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
});
