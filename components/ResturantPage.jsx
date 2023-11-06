import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { ResturantCard } from "./ResturantCard";
import { Test } from "./test";
export function ResturantPage() {
  const [isTyping, setIsTyping] = useState(false);
  const searchInputRef = useRef(null);

  const handleTyping = (e) => {
    const text = e.nativeEvent.text;
    console.log(text);
    setIsTyping(true);
  };
  const searchPressed = () => {};
  const handleCancelPress = (e) => {
    setIsTyping(false);
    console.log(searchInputRef.current.clear());
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}> Page Title </Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            ref={searchInputRef}
            style={styles.searchInput}
            placeholder="Search in resturants"
            onChange={handleTyping}
            onPressIn={searchPressed}
          />
          {isTyping ? (
            <Button
              onPress={handleCancelPress}
              title="Cancel"
              accessibilityLabel="Learn more about this purple button"
              style={styles.buttonStyle}
            />
          ) : null}
        </View>

        <ScrollView style={{ marginTop: 15 }}>
          <ResturantCard />
          <ResturantCard />

          <ResturantCard />
          <ResturantCard />
          <ResturantCard />

          <ResturantCard />
          <ResturantCard />
          <ResturantCard />

          <ResturantCard />
          <ResturantCard />
          <ResturantCard />

          <ResturantCard />
        </ScrollView>

        {/* <Test /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 5,
  },

  titleStyle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 24,
    color: "#D94F04",
    marginBottom: 10,
    //alignItems: "center",
    //fontFamily: "Proxima Nova",
  },
  searchInput: {
    //borderBottomColor: "#00000",
    flex: 4,
    borderBottomWidth: 1,
    marginEnd: 20,

    //marginBottom: 2,
  },
  buttonStyle: {
    display: "none",
  },
});

export default ResturantPage; // Export the component as default
