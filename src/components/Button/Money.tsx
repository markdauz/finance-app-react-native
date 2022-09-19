import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

type MoneyProps = {
  label: string;
  style: any;
  icon: keyof typeof Feather.glyphMap;
};

const Money = (props: MoneyProps) => {
  const { label, style, icon } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.icon}>
        <Feather name={icon} size={18} color={Colors.white} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    height: 25,
    width: 25,
    backgroundColor: Colors.blue,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
    marginLeft: 10,
    color: Colors.blue,
  },
});

export default Money;
