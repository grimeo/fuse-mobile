import React from "react";
import { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Animated,
  View,
  Dimensions,
} from "react-native";
import FormHead from "./app/components/FormHead";
import FormSelectorBtn from "./app/components/FormSelectorBtn";
import LoginForm from "./app/components/LoginForm";
import SignUpForm from "./app/components/SignUpForm";
import axios from "axios";
import ImageUpload from "./app/components/ImageUpload";

const { width } = Dimensions.get("window");

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollview = useRef();

  // const fetchApi = async () => {
  //   try {
  //     const res = await axios.get("http://192.168.43.6:4000/");
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  const rightHeadOpac = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeadTranslate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const rightHeadTranslate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -60],
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["#666", "#6668"],
  });

  const signUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["#6668", "#666"],
  });

  // return (
  //   <View style={{ flex: 1, paddingTop: 60 }}>
  //     <View style={{ height: 80 }}>
  //       <FormHead
  //         leftHead={"Welcome "}
  //         rightHead={"Back"}
  //         tagline={"wala paring tagline"}
  //         rightHeadOpac={rightHeadOpac}
  //         leftHeadTranslate={leftHeadTranslate}
  //         rightHeadTranslate={rightHeadTranslate}
  //       />
  //     </View>
  //     <View
  //       style={{
  //         flexDirection: "row",
  //         paddingHorizontal: 20,
  //         marginBottom: 20,
  //       }}
  //     >
  //       <FormSelectorBtn
  //         style={styles.borderLeft}
  //         backgroundColor={loginColorInterpolate}
  //         textTitle="Log in"
  //         onPress={() => scrollview.current.scrollTo({ x: 0 })}
  //       />

  //       <FormSelectorBtn
  //         style={styles.borderRight}
  //         backgroundColor={signUpColorInterpolate}
  //         textTitle="Sign up"
  //         onPress={() => scrollview.current.scrollTo({ x: width })}
  //       />
  //     </View>
  //     <ScrollView
  //       ref={scrollview}
  //       horizontal
  //       pagingEnabled
  //       showsHorizontalScrollIndicator={false}
  //       scrollEventThrottle={16}
  //       onScroll={Animated.event(
  //         [{ nativeEvent: { contentOffset: { x: animation } } }],
  //         { useNativeDriver: false }
  //       )}
  //     >
  //       <ScrollView>
  //         <LoginForm />
  //       </ScrollView>
  //       <ScrollView>
  //         <SignUpForm />
  //       </ScrollView>
  //     </ScrollView>
  //   </View>
  // );
  return <ImageUpload />;
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
