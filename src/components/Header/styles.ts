import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: Colors.heading,
    fontFamily: Fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: Fonts.heading,
    color: Colors.heading,
    lineHeight: 40
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
