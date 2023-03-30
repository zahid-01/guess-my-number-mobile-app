import { Pressable, StyleSheet, View, Text } from "react-native";

const PrimaryButton = (props) => {
  return (
    <Pressable android_ripple={{ color: "white" }} onPress={props.press}>
      <View style={styles.container}>
        <Text style={styles.btnText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#908ae3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 100,
  },
  btnText: {
    fontSize: 20,
    padding: 5,
  },
});

export default PrimaryButton;
