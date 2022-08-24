import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ButtonProps } from "./types";

export function Button({ title, disabled, ...rest }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={disabled ? styles.containerDisabled : styles.container}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
