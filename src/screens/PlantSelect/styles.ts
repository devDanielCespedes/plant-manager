import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 17,
    color: Colors.heading,
    fontFamily: Fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  header: {
    paddingHorizontal: 30,
  },
  subtitle: {
    fontFamily: Fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: Colors.heading,
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingHorizontal: 38,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
});
