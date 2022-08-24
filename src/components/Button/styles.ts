import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  containerDisabled: {
    backgroundColor: Colors.gray,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Fonts.heading,
  },
});
