import { Pressable, StyleSheet, View, Text } from "react-native";

const PrimaryButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.pressed] : styles.pressable
        }
        onPress={props.press}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btnText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 25,
    marginHorizontal: 5,
  },
  pressable: {
    backgroundColor: "#908ae3",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  btnText: {
    fontSize: 20,
    padding: 5,
    color: "white",
  },
});

export default PrimaryButton;
