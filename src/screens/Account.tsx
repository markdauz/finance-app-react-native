import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Heading from "../components/Heading";
import Ellipsis from "../components/SVG/Ellipsis";
import Form from "../components/Form";
import { Colors } from "../constants/colors";

const Account = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.innerWrapper}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headingWrapper}>
          <Heading>Account</Heading>
          <Ellipsis />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require("../../assets/image/card.png")} />
        </View>
        <View style={styles.formWrapper}>
          <Form />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { backgroundColor: Colors.white, flex: 1 },
  innerWrapper: {
    paddingHorizontal: 20,
  },
  headingWrapper: {
    marginTop: 78,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: { alignItems: "center" },
  formWrapper: { marginVertical: 20 },
});
export default Account;
