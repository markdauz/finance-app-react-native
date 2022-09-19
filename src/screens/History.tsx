import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import Money from "../components/Button/Money";
import ConnectedCard from "../components/Card/ConnectedCard";
import Ellipsis from "../components/SVG/Ellipsis";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import TransactionItem from "../components/TransactionItem";

const History = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <View style={styles.headingWrapper}>
            <Pressable onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={18} color={Colors.black} />
            </Pressable>
            <Text style={styles.transaction}>Transaction</Text>
            <Ellipsis />
          </View>

          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/image/emoji.png")} />
          </View>

          <View style={styles.wrapper}>
            <View style={styles.mainPocketWrapper}>
              <Text style={styles.mainPocket}>Main Pocket</Text>
            </View>
            <Text style={styles.totalBalance}>Total Balance</Text>
            <Text style={styles.balance}>$ 320,299</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Money label="Send Money" style={styles.send} icon="arrow-down" />
            <Money
              label="Request Money"
              style={styles.request}
              icon="arrow-up"
            />
          </View>
          <View style={styles.cardContainer}>
            <ConnectedCard
              title="Connected Card"
              name="Halca Alane"
              accountNumber="1234 5678 5090 6620"
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.searchBarWrapper}>
            <SearchBar />
          </View>
          <View style={styles.transactionHeaderWrapper}>
            <Text style={styles.transactionHeader}>This Month</Text>
            <Text
              style={[
                styles.transactionHeader,
                {
                  fontStyle: "italic",
                },
              ]}
            >
              Refresh at Today, 11.20
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <TransactionItem
              name="Alpaca Market"
              date="28 Apr 2022"
              style={styles.positive}
              amount="+$ 70.99"
              color={Colors.lightGreen}
              icon="arrow-bottom-left"
              iconColor={Colors.green}
            />
            <TransactionItem
              name="Albert Wesker"
              date="18 Apr 2022"
              amount="-$ 47.29"
              color={Colors.lightYellow}
              icon="arrow-top-right"
              iconColor={Colors.yellow}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { backgroundColor: Colors.paleYellow, flex: 1 },
  headingWrapper: {
    marginTop: 78,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  topContainer: {
    flex: 1,
    backgroundColor: Colors.paleYellow,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cardContainer: { alignItems: "center", marginTop: 16, marginBottom: 10 },
  send: { backgroundColor: Colors.lightPurple },
  request: { backgroundColor: Colors.mediumYellow },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  transaction: { fontSize: 22, lineHeight: 21.78, fontWeight: "600" },
  wrapper: { alignItems: "center", marginTop: -23 },
  mainPocketWrapper: {
    backgroundColor: Colors.paleGray,
    width: 91,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPocket: {
    fontSize: 12,
    lineHeight: 14.52,
    fontWeight: "500",
    opacity: 0.5,
  },
  totalBalance: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "500",
    marginTop: 15,
    marginBottom: 5,
  },
  balance: {
    fontSize: 24,
    lineHeight: 29.05,
    fontWeight: "600",
    marginBottom: 21,
  },
  searchBarWrapper: { marginTop: 23, paddingHorizontal: 10 },
  transactionHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  transactionHeader: {
    fontSize: 13,
    lineHeight: 15.73,
    fontWeight: "400",
    color: Colors.darkGray,
  },
  positive: { color: Colors.green },
});

export default History;
