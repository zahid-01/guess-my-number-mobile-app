import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";

export default function App() {
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
          <StartGame />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ddb52f",
  },
  gameContainer: {
    marginHorizontal: 35,
    marginTop: 30,
  },
  backImg: {
    opacity: 0.15,
  },
});
