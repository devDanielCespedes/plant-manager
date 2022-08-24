import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.heading,
    textAlign: "center",
    color: Colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: Fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
    color: Colors.heading,
  },
  emoji: {
    fontSize: 50,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
