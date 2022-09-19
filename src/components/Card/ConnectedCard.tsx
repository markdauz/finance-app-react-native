import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

type ConnectedCardProps = {
  title: string;
  name: string;
  accountNumber: string;
};

const ConnectedCard = (props: ConnectedCardProps) => {
  const { title, name, accountNumber } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.wrapper}>
          <AntDesign name="creditcard" size={32} color={Colors.white} />
          <View style={{ marginLeft: 15 }}>
            <Text style={[styles.details, { marginBottom: 6 }]}>{name}</Text>
            <Text style={[styles.details, { opacity: 0.8 }]}>
              {accountNumber}
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 20 }}>
          <AntDesign name="eyeo" size={25} color={Colors.white} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 115,
    borderRadius: 10,
    backgroundColor: Colors.green,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
    lineHeight: 15.73,
    fontWeight: "600",
    color: Colors.white,
    paddingTop: 10,
    paddingLeft: 10,
  },
  innerContainer: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    width: "100%",
    height: 77,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  details: {
    fontSize: 15,
    lineHeight: 18.15,
    fontWeight: "600",
    color: Colors.white,
  },
});

export default ConnectedCard;
