import React from "react";
import { StyleSheet, Text } from "react-native";
import FormContainer from "./FormContainer";

export default function loginForm() {
  return (
    <>
      <FormContainer>
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>Login</Text>
      </FormContainer>
    </>
  );
}
const styles = StyleSheet.create({});
