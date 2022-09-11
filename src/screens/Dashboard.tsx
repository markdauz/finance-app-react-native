import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import BalanceCard from "../components/Card/BalanceCard";
import Greeting from "../components/Greeting";
import DebitCard from "../components/Card/DebitCard";
import Person from "../components/Person";
import LoanCard from "../components/Card/LoanCard";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        style={styles.innerWrapper}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 78, marginBottom: 24 }}>
          <Greeting>Good Morning, Halca!</Greeting>
        </View>

        <BalanceCard
          name="Halca Alane"
          amount="$ 320, 299"
          accountNumber="Deposit 1234567890"
          cardType="Debit card"
          walletType="E-wallet Top-up"
        />
        <View
          style={{
            marginTop: 18,
            marginBottom: 24,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Person name="Lucy" />
          <Person name="Stacy" />
          <Person name="Luna" />
          <Person name="Jane" />
          <Person name="John" />
        </View>
        <View style={{ marginBottom: 15 }}>
          <DebitCard
            name="HALCA ALANE"
            account="•••• •••• •••• 6620"
            detail="Detail Card"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <LoanCard infoText="Simple process to apply Loan Here" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  innerWrapper: { paddingHorizontal: 20 },
});

export default Dashboard;
