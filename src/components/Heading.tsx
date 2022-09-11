import React from "react";
import { StyleSheet, View, Text } from "react-native";

type HeadingProp = {
  children: string;
  style?: any;
};

const Heading = (props: HeadingProp) => {
  const { children, style } = props;
  return (
    <View style={style}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    lineHeight: 38.73,
    fontWeight: "600",
  },
});
export default Heading;
