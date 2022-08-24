import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EnvironmentButtonProps } from "./types";

export function EnvironmentButton({
  title,
  acvitve = false,
  ...rest
}: EnvironmentButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.container, acvitve && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, acvitve && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
}
