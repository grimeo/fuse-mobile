import React from "react";

import AppFormScreen from "./app/screens/AppFormScreen";
import ImageUploadScreen from "./app/screens/ImageUploadScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import PromptTypeOfUserScreen from "./app/screens/PromptTypeOfUserScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen component={AppFormScreen} name="AppFormScreen" />
      <Stack.Screen component={ImageUploadScreen} name="ImageUploadScreen" />
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
      <Stack.Screen
        component={PromptTypeOfUserScreen}
        name="PromptTypeOfUserScreen"
      />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
