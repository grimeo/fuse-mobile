import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  Image,
} from "react-native";

import AppFormScreen from "./app/screens/AppFormScreen";
import ImageUploadScreen from "./app/screens/ImageUploadScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import PromptTypeOfUserScreen from "./app/screens/PromptTypeOfUserScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ChatScreen from "./app/screens/ChatScreen";
import PrivateChatScreen from "./app/screens/PrivateChatScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "./app/screens/TransactionScreen";
import SettingsScreen from "./app/screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppFormScreen"
        screenOptions={{
          headerShown: false,
          animation: "none",
          animationTypeForReplace: null,
        }}
      >
        <Stack.Screen name="AppFormScreen" component={AppFormScreen} />
        <Stack.Screen
          name="PromptTypeOfUserScreen"
          component={PromptTypeOfUserScreen}
        />
        <Stack.Screen name="ImageUploadScreen" component={ImageUploadScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="PrivateChatScreen" component={PrivateChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
