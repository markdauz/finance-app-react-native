import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";
import Visa from "../SVG/Visa";

type DebitCardProps = {
  name: string;
  account: string;
  detail: string;
};

const DebitCard = (props: DebitCardProps) => {
  const { name, account, detail } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={[styles.text, { marginBottom: 10 }]}>{name}</Text>
          <Text style={styles.text}>{account}</Text>
        </View>
        <View style={{ paddingRight: 8 }}>
          <Visa />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{detail}</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 120,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: 50,
    height: 31.78,
    resizeMode: "contain",
  },
  text: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "600",
    color: Colors.white,
  },
  wrapper: { flexDirection: "row", alignItems: "center", marginTop: "auto" },
});

export default DebitCard;
