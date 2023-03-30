import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#963232",
    borderWidth: 1,
    backgroundColor: "#963232",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },
});
export default Card;
