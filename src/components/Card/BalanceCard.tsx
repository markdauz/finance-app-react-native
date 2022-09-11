import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

type BalanceCardProps = {
  name: string;
  amount: string;
  accountNumber: string;
  cardType: string;
  walletType: string;
};

const BalanceCard = (props: BalanceCardProps) => {
  const { name, amount, accountNumber, cardType, walletType } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.name]}>{name}</Text>
      <Text style={[styles.text, styles.amount]}>{amount}</Text>
      <Text style={[styles.text, styles.accountNumber]}>{accountNumber}</Text>
      <View style={styles.outerWrapper}>
        <View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.cardType]}>{cardType}</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={16}
              color={Colors.white}
            />
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.cardType]}>{walletType}</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={16}
              color={Colors.white}
            />
          </View>
        </View>
        <Pressable style={({ pressed }) => [styles.button]}>
          <Text style={styles.buttonText}>Transfer</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 215,
    backgroundColor: Colors.darkGreen,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: { fontWeight: "600", color: Colors.white },
  name: {
    fontSize: 15,
    lineHeight: 18.15,
    marginVertical: 15.5,
    textTransform: "uppercase",
  },
  amount: { fontSize: 36, lineHeight: 43.57, marginBottom: 5 },
  accountNumber: {
    fontSize: 15,
    lineHeight: 18.15,
    textTransform: "capitalize",
    marginBottom: 25,
  },
  cardType: {
    fontSize: 15,
    lineHeight: 18.15,
    textTransform: "capitalize",
  },
  outerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    width: 76,
    height: 37,
    backgroundColor: Colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.green,
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "500",
  },
});

export default BalanceCard;
