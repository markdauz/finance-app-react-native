import React from "react";
import { StyleSheet, View, Text } from "react-native";

type GreetingProp = {
  children: string;
};

const Greeting = (props: GreetingProp) => {
  const { children } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { maxWidth: 230 },
  text: {
    fontSize: 32,
    lineHeight: 38.73,
    fontWeight: "600",
  },
});
export default Greeting;
