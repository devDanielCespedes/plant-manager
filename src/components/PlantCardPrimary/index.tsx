import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { styles } from "./styles";
import { PlantCardProps } from "./types";

export function PLantCardPrimary({
  data,
  onPress,
}: PlantCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <SvgFromUri uri={data.photo} height={70} width={70} />
        <Text style={styles.text}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
