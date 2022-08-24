import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { Nav, Params } from "./types";

const emojis = {
  hug: "🤗",
  smile: "😄",
};

export function Confirmation(): JSX.Element {
  const navigation = useNavigation<Nav>();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as Params;

  const handleMoveOn = () => {
    navigation.navigate(nextScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}
