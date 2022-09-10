import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import BalanceCard from "../components/Card/BalanceCard";
import Greeting from "../components/Greeting";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.innerWrapper}>
        <Greeting>Good Morning, Halca!</Greeting>
        <BalanceCard
          name="Halca Alane"
          amount="$ 320, 299"
          accountNumber="Deposit 1234567890"
          cardType="Debit card"
          walletType="E-wallet Top-up"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "flex-start", flexDirection: "column" },
  innerWrapper: { paddingHorizontal: 20 },
});

export default Dashboard;
