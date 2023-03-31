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
            keyboardType="number-pad"
            placeholderTextColor="yellow"
            maxLength={2}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton text="Reset" press={resetHandler} />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton text="Confirm" press={confirmHandler} />
            </View>
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
    borderBottomColor: "#ddb52f",
    width: 50,
    height: 50,
    fontWeight: "bold",
    color: "#ddb52f",
    fontSize: 32,
    textAlign: "center",
  },
  inputTextHeading: {
    fontSize: 20,
    color: "white",
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGame;
