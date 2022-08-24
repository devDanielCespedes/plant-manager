import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    backgroundColor: Colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  content: {
    alignItems: "center",
  },
  text: {
    color: Colors.green_dark,
    fontFamily: Fonts.heading,
    marginVertical: 16,
  },
});
