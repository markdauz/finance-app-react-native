import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { Colors } from "../constants/colors";

type FormInputProps = {
  label: string;
  keyboardType: KeyboardTypeOptions;
};

const FormInput = (props: FormInputProps) => {
  const { label, keyboardType } = props;

  const [input, onChangeInput] = useState<any>();

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        onChangeText={onChangeInput}
        value={input}
        keyboardType={keyboardType}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: { marginVertical: 10 },
  inputLabel: {
    fontSize: 13,
    lineHeight: 15.73,
    fontWeight: "500",
    color: Colors.mediumGray,
    marginBottom: 5,
  },
  input: {
    height: 35,
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.paleGray,
    paddingHorizontal: 8,
  },
});
export default FormInput;
