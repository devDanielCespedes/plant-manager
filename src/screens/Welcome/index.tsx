import React, { useCallback } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../../assets/watering.png";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "./types";

export function Welcome(): JSX.Element {
  const navigation = useNavigation<Nav>();

  const handleStart = useCallback(() => {
    navigation.navigate("UserIdentification");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {`\n`}
          suas plantas de {`\n`}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
