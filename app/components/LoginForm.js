import React, { useState } from "react";

import { StyleSheet, Text, TextInput } from "react-native";

import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";

export default function loginForm() {
  const [userInfo, setUserInfo] = useState({ Email: "", Password: "" });

  const [error, setError] = useState("");

  const { Email, Password } = userInfo;

  const handleOnChangeText = (value, fieldname) => {
    setUserInfo({ ...userInfo, [fieldname]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Invalid Form.", setError);
    if (!isValidEmail(Email)) return updateError("Invalid Email.", setError);
    if (!Password.trim() || Password.length < 8)
      return updateError("Invalid Password");

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      //submit
      console.log(userInfo);
    }
  };

  return (
    <>
      <FormContainer>
        {error ? (
          <Text
            style={{
              color: "red",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {error}
          </Text>
        ) : null}
        <FormInput
          autoCapitalize="none"
          label="Email"
          value={Email}
          onChangeText={(value) => handleOnChangeText(value, "Email")}
          placeholder="example@email.com"
        />
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          value={Password}
          onChangeText={(value) => handleOnChangeText(value, "Password")}
          placeholder="*********"
        />
        <FormSubmitBtn onPress={submitForm} label="Log in" />
      </FormContainer>
    </>
  );
}
const styles = StyleSheet.create({});
