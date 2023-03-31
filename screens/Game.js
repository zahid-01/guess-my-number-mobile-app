import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Card from "../components/UI/Card";
import PrimaryButton from "../components/PrimaryButton";
import GuessItem from "../components/UI/GuessItem";

const Game = (props) => {
  const [randomNumber, setRandomNumber] = useState();
  const [guesses, setGuesses] = useState([
    { text: randomNumber, key: randomNumber },
    { text: 3, key: 3 },
  ]);
  const [enteredNumber, setEnteredNumber] = useState(props.inputNumber);

  const guessNumber = () => {
    setRandomNumber(Math.random(Math.random() * 99));
  };

  useEffect(() => {
    setRandomNumber(Math.random(Math.random() * 99));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Openents Guess</Text>

      <View style={styles.mainView}>
        <View style={styles.computerGuess}>
          <Text style={styles.randomText}>{randomNumber}</Text>
        </View>

        <Card>
          <Text style={styles.higherLower}>Higher or Lower?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton text={"-"} />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton text={"+"} />
            </View>
          </View>
        </Card>
      </View>
      {/* <View style={styles.cardContainer}> */}
      <View style={styles.card}>
        <FlatList
          data={guesses}
          renderItem={(item) => <GuessItem guess={item.item.text} />}
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
  cardContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  card: {
    justifyContent: "center",
  },
});

export default Game;
