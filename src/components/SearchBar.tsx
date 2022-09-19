import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import Filter from "../components/SVG/Filter";

const SearchBar = () => {
  const [term, searchTerm] = useState("");
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search Transaction"
          value={term}
          onChangeText={(term) => searchTerm(term)}
        />
      </View>
      <Filter style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 316,
    height: 45,
    borderRadius: 10,
    backgroundColor: Colors.paleGray,
    marginRight: 16,
  },
  textInput: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: Colors.paleGray,
    padding: 10,
  },
  searchIcon: { marginLeft: 30, opacity: 0.5 },
  icon: { opacity: 0.75 },
});
export default SearchBar;
