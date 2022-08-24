import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { Nav } from "./types";

export function UserIdentification(): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>("");

  const navigation = useNavigation<Nav>();

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!name);
  }, []);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleInputChange = useCallback((value: string) => {
    setIsFilled(!!value);
    setName(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!name) return Alert.alert("Me diz como chamar você!");
    try {
      await AsyncStorage.setItem("@plantmanager:user", name);
      navigation.navigate("Confirmation", {
        title: "Prontinho",
        subtitle:
          "Agora vamos começar a cuidar das suas plantinhas com muito cuidado",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: "PlantSelect",
      });
    } catch {
      Alert.alert("Não foi possível salvar seu nome!");
    }
  }, [name, AsyncStorage]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? "👍" : "😄"}</Text>
                <Text style={styles.title}>
                  Como podemos {`\n`}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && styles.isInputFilled,
                ]}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                placeholder="Digite um nome"
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button
                  disabled={!name}
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
