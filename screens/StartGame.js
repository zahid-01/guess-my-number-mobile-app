import { StyleSheet, View, TextInput, Text, Button } from "react-native";

import Card from "../components/UI/Card";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  const resetHandler = () => {
    console.log("reset");
  };

  const confirmHandler = () => {
    console.log("confirm");
  };

  return (
    <View>
      <View style={styles.gameName}>
        <Text style={styles.headingText}>Guess My Number</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card>
          <Text style={styles.inputTextHeading}>Enter A Number</Text>
          <TextInput
            style={styles.inputNumber}
            keyboardType="phone-pad"
            placeholderTextColor="yellow"
          />
          <View style={styles.inputBtn}>
            <PrimaryButton text="Reset" press={resetHandler} />
            <PrimaryButton text="Confirm" press={confirmHandler} />
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameName: {
    marginTop: 60,
    marginBottom: 60,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "normal",
    borderWidth: 3,
    alignSelf: "center",
    padding: 10,
  },
  inputNumber: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "yellow",
    fontSize: 20,
  },
  inputTextHeading: {
    fontSize: 20,
  },
  inputBtn: {
    marginTop: 20,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});

export default StartGame;
