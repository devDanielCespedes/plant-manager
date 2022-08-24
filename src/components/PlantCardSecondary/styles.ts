import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  buttonRemove: {
    width: 120,
    height: 85,
    backgroundColor: Colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 10,
    paddingLeft: 15
  },
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.shape,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: Fonts.heading,
    fontSize: 17,
    color: Colors.heading,
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: Fonts.text,
    color: Colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: Fonts.heading,
    color: Colors.body_dark,
  },
});
