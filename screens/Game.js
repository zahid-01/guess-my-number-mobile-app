import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";

import Card from "../components/UI/Card";
import PrimaryButton from "../components/PrimaryButton";
import GuessItem from "../components/UI/GuessItem";

const genRandomNumber = (max, min, exclude) => {
  if (max === min) return min;
  return Math.trunc(Math.random() * max - min) + min;
};

let minLimit = 1;
let maxLimit = 99;

const Game = (props) => {
  const [guesses, setGuesses] = useState([]);

  const guessNumber = (max, min) => {
    const rand = genRandomNumber(max, min);
    if (rand == props.inputNumber)
      Alert.alert("Congratulations", "You won", [
        { text: "OK", style: "destructive" },
      ]);
    setGuesses((guesses) => [{ text: rand, key: Math.random() }, ...guesses]);
  };

  useEffect(() => {
    const rand = genRandomNumber(1, 99);
    if (rand == props.inputNumber)
      Alert.alert("Congratulations", "You won", [
        { text: "OK", style: "destructive" },
      ]);
    setGuesses((guesses) => [{ text: rand, key: Math.random() }, ...guesses]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Openents Guess</Text>

      <View style={styles.mainView}>
        <View style={styles.computerGuess}>
          <Text style={styles.randomText}>{guesses[0]?.text}</Text>
        </View>

        <Card>
          <Text style={styles.higherLower}>Higher or Lower?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton text={"-"} press={guessNumber} />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton text={"+"} press={guessNumber} />
            </View>
          </View>
        </Card>
      </View>
      {/* <View style={styles.cardContainer}> */}
      <View style={styles.card}>
        <FlatList
          data={guesses}
          renderItem={(item) => (
            <GuessItem num={item.index} guess={item.item.text} />
          )}
        />
      </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: "flex-start",
  },
  mainView: {
    flex: 1,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    color: "white",
    borderWidth: 3,
    padding: 10,
    borderColor: "white",
    textAlign: "center",
    width: "100%",
  },
  computerGuess: {
    marginTop: 25,
    marginBottom: 50,
    borderColor: "#ddb52f",
    borderWidth: 3,
    borderRadius: 8,
  },
  randomText: {
    textAlign: "center",
    color: "#ddb52f",
    fontSize: 50,
    paddingVertical: 15,
  },
  higherLower: {
    fontSize: 25,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  cardContainer: {},
  card: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Game;
