import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../constants/colors";
import FormInput from "./FormInput";

type FormProps = {};
const Form = (props: FormProps) => {
  return (
    <View>
      <Text style={styles.formTitle}>Detail Information</Text>
      <FormInput label="Name" keyboardType="default" />
      <FormInput label="Phone Number" keyboardType="phone-pad" />
      <FormInput label="E-mail" keyboardType="email-address" />
      <FormInput label="Home Address" keyboardType="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 13,
    lineHeight: 15.73,
    fontWeight: "500",
    color: Colors.mediumGray,
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default Form;
