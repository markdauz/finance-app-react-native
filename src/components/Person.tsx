import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Bank from "../components/SVG/Bank";
import { Colors } from "../constants/colors";

type PersonProps = {
  name: string;
};

const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Bank />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "column", alignItems: "center" },
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  name: {
    fontSize: 12,
    lineHeight: 14.52,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
export default Person;
