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
import { Colors } from "../constants/colors";
Heading;

const Service = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.serviceWrapper}>
          <View style={styles.headingWrapper}>
            <Heading style={styles.heading}>
              No Hidden Fees on Transfer & Widrawal
            </Heading>
          </View>
          <Image
            source={require("../../assets/image/graphic-one.png")}
            style={styles.graphicOne}
          />
          <View style={styles.textWrapper}>
            <Text style={[styles.text, { marginBottom: 20, marginTop: 10 }]}>
              The first debit card that actually encourage you to pay less.
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: Colors.purple,
              },
            ]}
          >
            Detail &gt;
          </Text>
        </View>
        {/*  */}
        <Image
          source={require("../../assets/image/line.png")}
          style={{ width: 390, marginTop: 44, marginBottom: 10 }}
        />
        <View style={[styles.serviceWrapper, { marginBottom: 20 }]}>
          <View style={[styles.headingWrapper, { marginTop: 0 }]}>
            <Heading style={[styles.heading, { padding: 20 }]}>
              Saving Money with 7% p.a Interest
            </Heading>
          </View>
          <Image
            source={require("../../assets/image/graphic-two.png")}
            style={styles.graphicTwo}
          />
          <View style={styles.textWrapper}>
            <Text style={[styles.text, { marginBottom: 20, marginTop: 10 }]}>
              The first debit card that actually encourage you to pay less.
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: Colors.purple,
              },
            ]}
          >
            Detail &gt;
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.white },
  serviceWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headingWrapper: { marginTop: 78, marginBottom: 10 },
  heading: { textAlign: "center" },
  graphicOne: { width: 200, height: 200 },
  graphicTwo: { width: 300, height: 186.43 },
  textWrapper: { paddingHorizontal: 20 },
  text: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: "500",
  },
});

export default Service;
