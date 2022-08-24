import React from "react";

import LottieView from "lottie-react-native";

import { View } from "react-native";

import loadAnimation from "../../assets/load.json";

import { styles } from "./styles";
export function Load(): JSX.Element {
  return (
    <View style={styles.container}>
      <LottieView source={loadAnimation} autoPlay loop style={styles.load} />
    </View>
  );
}
