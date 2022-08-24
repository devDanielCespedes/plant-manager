import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.shape,
    height: 40,
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: Colors.green_light,
  },
  text: {
    color: Colors.heading,
    fontFamily: Fonts.text,
  },
  textActive: {
    color: Colors.green_dark,
    fontFamily: Fonts.heading,
  },
});
