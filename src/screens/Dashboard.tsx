import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import BalanceCard from "../components/Card/BalanceCard";
import Greeting from "../components/Greeting";
import DebitCard from "../components/Card/DebitCard";

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
        <DebitCard
          name="HALCA ALANE"
          account="•••• •••• •••• 6620"
          detail="Detail Card"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  innerWrapper: { paddingHorizontal: 20 },
});

export default Dashboard;
