import { StyleSheet, Text, View } from "react-native";

export function Test() {
  return (
    <>
      <Text> CARD TITLE </Text>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "#025259",
    height: "50px",
    width: "100vw",
  },
});

export default Test; // Export the component as default
