import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";

import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.img}
      >
        <View style={styles.gameContainer}>
          <StartGame />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "flex-start",
  },
  gameContainer: {
    flex: 1,
    marginHorizontal: 35,
    marginTop: 30,
    justifyContent: "flex-start",
  },
  img: {
    flex: 1,
  },
});
