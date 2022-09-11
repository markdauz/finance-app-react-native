import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import BalanceCard from "../components/Card/BalanceCard";
import Heading from "../components/Heading";
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
        <View style={styles.headingWrapper}>
          <Heading style={styles.heading}>Good Morning, Halca!</Heading>
        </View>

        <BalanceCard
          name="Halca Alane"
          amount="$ 320, 299"
          accountNumber="Deposit 1234567890"
          cardType="Debit card"
          walletType="E-wallet Top-up"
        />
        <View style={styles.personWrapper}>
          <Person name="Lucy" />
          <Person name="Stacy" />
          <Person name="Luna" />
          <Person name="Jane" />
          <Person name="John" />
        </View>
        <View style={styles.debitCardWrapper}>
          <DebitCard
            name="HALCA ALANE"
            account="•••• •••• •••• 6620"
            detail="Detail Card"
          />
        </View>
        <View style={styles.loanCardWrapper}>
          <LoanCard infoText="Simple process to apply Loan Here" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  innerWrapper: { paddingHorizontal: 20 },
  headingWrapper: { marginTop: 78, marginBottom: 24 },
  personWrapper: {
    marginTop: 18,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  debitCardWrapper: { marginBottom: 15, marginHorizontal: 3 },
  loanCardWrapper: { marginBottom: 20, marginHorizontal: 3 },
  heading: { maxWidth: 230 },
});

export default Dashboard;
