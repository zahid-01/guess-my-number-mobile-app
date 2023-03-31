import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";

import Card from "../components/UI/Card";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandler = (number) => {
    setEnteredNumber(number);
  };

  const confirmHandler = () => {
    const inputNumber = parseInt(enteredNumber);
    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 99) {
      Alert.alert("Invalid Input", "Enter a number between 1-99", [
        { text: "OK", style: "default", onPress: resetHandler },
      ]);
      return;
    }
  };

  const resetHandler = () => {
    setEnteredNumber("");
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
            maxLength={3}
            onChangeText={enteredNumberHandler}
            value={enteredNumber}
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
