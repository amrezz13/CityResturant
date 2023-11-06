import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export function ResturantCard() {
  const logo = {
    URL: "../img/img1.png",
    height: 64,
  };

  const pressHandeler = () => {
    console.log("this is pressed");
  };
  return (
    <>
      <View style={styles.card} onClicj>
        <Pressable onPress={pressHandeler} style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.cardTitle}> CARD TITLE </Text>
            <Text style={styles.contentBody}>
              Body this is body is not about body but leoorm ipson Body this is
              body is not about body but leoorm ipson Body this is body is not
              about body but leoorm ipson Body this is body is not about body
              but{" "}
            </Text>
          </View>
          <Image
            source={require("../img/img1.png")}
            style={styles.cardImg}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#F4E2DE",
    borderColor: "#025259",
    borderWidth: 1,
    borderRadius: 5,
    height: 150,
    width: "100%",
    marginBottom: 10,
    alignItems: "flex-start",
  },

  content: {
    flex: 3,
    flexDirection: "column",
  },
  contentBody: {
    flexWrap: "nowrap",
  },
  cardTitle: {
    fontWeight: "600",
  },

  cardImg: {
    flex: 1,
    height: 120,
    width: 100,
    padding: 5,

    alignSelf: "center",
  },
  onPressStyle: {},
});

export default ResturantCard; // Export the component as default
