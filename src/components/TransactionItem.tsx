import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

type TransactionItemProps = {
  name: string;
  date: string;
  amount: string;
  color: string;
  style?: any;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
};

const TransactionItem = (props: TransactionItemProps) => {
  const { name, date, amount, style, color, icon, iconColor } = props;
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
        </View>
        <View>
          <Text style={[styles.text, { fontWeight: "600" }]}>{name}</Text>
          <Text style={[styles.text, { fontWeight: "500", opacity: 0.5 }]}>
            {date}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={[styles.text, { fontWeight: "600", marginRight: 10 }, style]}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingTop: 10,
    backgroundColor: Colors.white,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 24,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 15.73,
  },
});

export default TransactionItem;
