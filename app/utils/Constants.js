import { StatusBar, Platform } from "react-native";

export const StatusBarPadding =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const User = {};
