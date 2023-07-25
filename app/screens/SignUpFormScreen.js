import React from "react";

import { useState } from "react";

import { StyleSheet, Text } from "react-native";
import FormContainer from "../components/FormContainer";
import FormInput from "../components/FormInput";
import FormSubmitBtn from "../components/FormSubmitBtn";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";

import { Formik } from "formik";
import * as Yup from "yup";

import client from "../api/client";

import { StackActions } from "@react-navigation/native";

const validationSchema = Yup.object({
  FirstName: Yup.string()
    .min(2, "Must be 2-20 characters.")
    .required("First Name is required"),
  MiddleName: Yup.string()
    .min(2, "Must be 2-20 characters.")
    .required("Middle Name is required"),
  LastName: Yup.string()
    .min(2, "Must be 2-20 characters.")
    .required("Last Name is required"),
  Email: Yup.string().email("Invalid Email.").required("Email is required."),
  Password: Yup.string()
    .trim()
    .required("Password is required.")
    .min(8, "Must be more than 7 characters"),
  ConfirmPassword: Yup.string()
    .required("Password is required.")
    .equals([Yup.ref("Password"), null], "Password do not match."),
});

export default function SignUpForm({ navigation }) {
  const userInfo = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [error, setError] = useState("");
  const { FirstName, MiddleName, LastName, Email, Password, ConfirmPassword } =
    userInfo;

  // const handleOnChangeText = (value, fieldname) => {
  //   setUserInfo({ ...userInfo, [fieldname]: value });
  // };

  const isValidForm = () => {
    //empty fields
    if (!isValidObjField(userInfo)) {
      // updateError("All fields are required.", setError);
      return updateError("Invalid form", setError);
    }
    // chars per name : 2-20
    if (!FirstName.trim() || FirstName.length < 2 || FirstName.length > 20) {
      return updateError("First name must be 2-20 characters long.", setError);
    }
    if (!MiddleName.trim() || MiddleName.length < 2 || MiddleName.length > 20) {
      return updateError("Middle name must be 2-20 characters long.", setError);
    }

    if (!LastName.trim() || LastName.length < 2 || LastName.length > 20) {
      return updateError("Last name must be 2-20 characters long.", setError);
    }
    // valid email
    if (!isValidEmail(Email)) return updateError("Invalid Email.", setError);
    // pass : >= 8
    if (!Password.trim() || Password.length < 8)
      return updateError("Password must be more than 7 characters.", setError);
    // pass match
    if (Password !== ConfirmPassword)
      return updateError("Password does not match.", setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      //submitForm
      console.log(userInfo, error);
    } else {
      console.log("error occured while submitting the form.");
    }
  };

  const signUp = async (values, formikActions) => {
    console.log(values);

    try {
      const res = await client.post("/create-user", { ...values });
      console.log(res.data);

      if (res.data.success) {
        const logInRes = await client.post("/sign-in", {
          Email: values.Email,
          Password: values.Password,
        });

        // console.log(logInRes);
        if (logInRes.data.success) {
          navigation.dispatch(
            StackActions.replace("PromptTypeOfUserScreen", {
              token: logInRes.data.token,
            })
          );
          formikActions.resetForm();
          formikActions.setSubmitting(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={signUp}
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
            const {
              FirstName,
              MiddleName,
              LastName,
              Email,
              Password,
              ConfirmPassword,
            } = values;

            return (
              <>
                <FormInput
                  value={FirstName}
                  error={touched.FirstName && errors.FirstName}
                  onBlur={handleBlur("FirstName")}
                  onChangeText={handleChange("FirstName")}
                  label="First Name"
                  placeholder="Juan"
                />
                <FormInput
                  value={MiddleName}
                  error={touched.MiddleName && errors.MiddleName}
                  onBlur={handleBlur("MiddleName")}
                  onChangeText={handleChange("MiddleName")}
                  label="Middle Name"
                  placeholder="Martinez"
                />
                <FormInput
                  value={LastName}
                  error={touched.LastName && errors.LastName}
                  onBlur={handleBlur("LastName")}
                  onChangeText={handleChange("LastName")}
                  label="Last Name"
                  placeholder="Dela Cruz"
                />
                <FormInput
                  value={Email}
                  error={touched.Email && errors.Email}
                  onBlur={handleBlur("Email")}
                  onChangeText={handleChange("Email")}
                  autoCapitalize="none"
                  label="Email"
                  placeholder="juandelacruz@email.com"
                />
                <FormInput
                  value={Password}
                  error={touched.Password && errors.Password}
                  onBlur={handleBlur("Password")}
                  onChangeText={handleChange("Password")}
                  autoCapitalize="none"
                  secureTextEntry
                  label="Password"
                  placeholder="*********"
                />
                <FormInput
                  value={ConfirmPassword}
                  error={touched.ConfirmPassword && errors.ConfirmPassword}
                  onBlur={handleBlur("ConfirmPassword")}
                  onChangeText={handleChange("ConfirmPassword")}
                  autoCapitalize="none"
                  secureTextEntry
                  label="Confirm Password"
                  placeholder="*********"
                />
                <FormSubmitBtn
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  label="Sign up"
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
