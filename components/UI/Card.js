import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#73063c",
    borderWidth: 1,
    backgroundColor: "#73063c",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    elevation: 10,
  },
});
export default Card;
