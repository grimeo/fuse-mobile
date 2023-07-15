import React from "react";
import { StyleSheet, Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

export default function SignUpForm() {
  return (
    <>
      <FormContainer>
        <FormInput title="First Name" placeholder="Romeo" />
        <FormInput title="Middle Name" placeholder="Pogi" />
        <FormInput title="Last Name" placeholder="Always" />
        <FormInput title="Email" placeholder="example@email.com" />
        <FormInput title="Password" placeholder="*********" />
        <FormInput title="Confirm Password" placeholder="*********" />
        <FormSubmitBtn title="SIgn Up" />
      </FormContainer>
    </>
  );
}
const styles = StyleSheet.create({});
