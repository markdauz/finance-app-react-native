import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Loan from "../SVG/Loan";
import { Colors } from "../../constants/colors";

type LoanCardProps = {
  infoText: string;
};

const LoanCard = (props: LoanCardProps) => {
  const { infoText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
      <Loan />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
    marginHorizontal: 3,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: { width: 109 },
  infoText: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "600",
    color: Colors.white,
  },
});
export default LoanCard;
