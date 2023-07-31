import React, { useState } from "react";

import { StyleSheet, Text, TextInput } from "react-native";

import FormContainer from "../components/FormContainer";
import FormInput from "../components/FormInput";
import FormSubmitBtn from "../components/FormSubmitBtn";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";

import { Formik } from "formik";
import * as Yup from "yup";

import client from "../api/client";

import { User } from "../utils/Constants";

import { StackActions } from "@react-navigation/native";

const validationSchema = Yup.object({
  Email: Yup.string().email("Invalid Email.").required("Email is required."),
  Password: Yup.string()
    .trim()
    .required("Password is required.")
    .min(8, "Must be more than 7 characters"),
});

export default function loginForm({ navigation }) {
  // const [userInfo, setUserInfo] = useState({ Email: "", Password: "" });
  const userInfo = {
    Email: "",
    Password: "",
  };

  const [error, setError] = useState("");

  const { Email, Password } = userInfo;

  // const handleOnChangeText = (value, fieldname) => {
  //   setUserInfo({ ...userInfo, [fieldname]: value });
  // };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Invalid form.", setError);
    if (!isValidEmail(Email)) return updateError("Invalid Email.", setError);
    if (!Password.trim() || Password.length < 8)
      return updateError("Invalid Password");

    return true;
  };

  // const submitForm = () => {
  //   if (isValidForm()) {
  //     //submit
  //     console.log(userInfo);
  //   } else {
  //     console.log("error occured while submitting the form.");
  //   }
  // };

  const logIn = async (values, formikActions) => {
    console.log(values);
    try {
      const res = await client.post("/sign-in", { ...values });
      console.log(res.data);
      const { success } = res.data;
      if (!success) return updateError(res.data.message, setError);
      formikActions.resetForm();
      formikActions.setSubmitting(false);
      const userData = res.data.user;
      navigation.dispatch(StackActions.replace("HomeScreen", userData));
    } catch (error) {
      console.log(error.message);
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

        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={logIn}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const { Email, Password } = values;
            return (
              <>
                <FormInput
                  value={Email}
                  error={touched.Email && errors.Email}
                  onBlur={handleBlur("Email")}
                  onChangeText={handleChange("Email")}
                  label="Email"
                  placeholder="example@email.com"
                />
                <FormInput
                  value={Password}
                  error={touched.Password && errors.Password}
                  onBlur={handleBlur("Password")}
                  onChangeText={handleChange("Password")}
                  secureTextEntry
                  label="Password"
                  placeholder="*********"
                />
                <FormSubmitBtn
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  label="Log in"
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
    </>
  );
}
const styles = StyleSheet.create({});
