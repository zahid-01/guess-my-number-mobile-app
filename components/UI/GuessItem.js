import { Text, View, StyleSheet } from "react-native";

const GuessItem = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.guessText}>#1</Text>
      <Text style={styles.guessText}>Openents Guess: {props.guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: "#ddb52f",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  guessText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default GuessItem;
