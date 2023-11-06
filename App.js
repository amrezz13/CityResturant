import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ResturantPage from "./components/ResturantPage"; // Import as default
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ResturantPage />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,

    // flex: 1,
    // margin: 100,
    // flexDirection: "column",
    // backgroundColor: "#fff",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
});
