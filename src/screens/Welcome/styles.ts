import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: Colors.heading,
    marginTop: 38,
    fontFamily: Fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: Colors.heading,
    fontFamily: Fonts.text,
  },
  button: {
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: Colors.white,
    fontSize: 32,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
});
