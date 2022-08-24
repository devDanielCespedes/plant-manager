import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: Colors.background,
  },
  spotlight: {
    backgroundColor: Colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: Colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: Fonts.heading,
    color: Colors.heading,
    marginVertical: 20
  },
});
