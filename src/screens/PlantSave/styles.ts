import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.shape,
  },
  controller: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  plantName: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    color: Colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",
    fontFamily: Fonts.text,
    color: Colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: Fonts.text,
    color: Colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: Fonts.complement,
    color: Colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  containerCurrentToRememberHour: {
    alignItems: "center",
  },
  currentToRememberHour: {
    color: Colors.heading,
    fontSize: 24,
    fontFamily: Fonts.text,
  },
  dateTImePickerButton: {
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 10
  },
  dateTImePickerText: {
    color: Colors.background,
    fontSize: 24,
    fontFamily: Fonts.heading,
    backgroundColor: Colors.green,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
});
