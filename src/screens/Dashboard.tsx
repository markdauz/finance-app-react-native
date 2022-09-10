import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BalanceCard from "../components/Card/BalanceCard";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <BalanceCard
        name="Halca Alane"
        amount="$ 320, 299"
        accountNumber="Deposit 1234567890"
        cardType="Debit card"
        walletType="E-wallet Top-up"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "center" },
});

export default Dashboard;
