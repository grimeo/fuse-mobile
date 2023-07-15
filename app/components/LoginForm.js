import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

export default function loginForm() {
  return (
    <>
      <FormContainer>
        <FormInput title="Email" placeholder="example@email.com" />
        <FormInput title="Password" placeholder="*********" />
        <FormSubmitBtn title="Log in" />
      </FormContainer>
    </>
  );
}
const styles = StyleSheet.create({});
