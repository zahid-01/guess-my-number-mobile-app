import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import Game from "./screens/Game";

export default function App() {
  const [screen, setScreen] = useState();

  const screenHandler = (number) => {
    setScreen(number);
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backImg}
      >
        <View style={styles.gameContainer}>
          {screen ? (
            <Game inputNumber={screen} />
          ) : (
            <StartGame sec={screenHandler} />
          )}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  gameContainer: {
    flex: 1,
    marginHorizontal: 35,
    marginTop: 30,
  },
  backImg: {
    opacity: 0.15,
  },
});
