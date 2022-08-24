import React, { useCallback, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";
import { SvgFromUri } from "react-native-svg";

import waterDrop from "../../assets/waterdrop.png";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
import { savePlant } from "../../libs/storage";
import { Nav, Params } from "./types";

export function PlantSave(): JSX.Element {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation<Nav>();

  const handleChangeTime = useCallback(
    (_event: DateTimePickerEvent, dateTime: Date | undefined) => {
      if (Platform.OS === "android") {
        setShowDatePicker((previous) => !previous);
      }
      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert("Escolha uma hora no futuro!");
      }

      if (dateTime) {
        setSelectedDateTime(dateTime);
      }
    },
    []
  );

  const handleOpenDatetimePickerForAndroid = useCallback(
    () => setShowDatePicker((previous) => !previous),
    []
  );

  const handleSaveNewPlant = useCallback(async (): Promise<void> => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado",
        buttonTitle: "Muito obrigado :D",
        icon: "hug",
        nextScreen: "MyPlants",
      });
    } catch (error) {
      Alert.alert("Não foi possível salvar!");
    }
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} height={150} width={150} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>
        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterDrop} style={styles.tipImage} />
            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>
          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>
          {showDatePicker && (
            <RNDateTimePicker
              value={selectedDateTime}
              mode="time"
              display="clock"
              is24Hour={true}
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === "android" && (
            <View style={styles.containerCurrentToRememberHour}>
              <Text style={styles.currentToRememberHour}>{`Atual: ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</Text>
              <Pressable
                style={styles.dateTImePickerButton}
                onPress={handleOpenDatetimePickerForAndroid}
              >
                <Text style={styles.dateTImePickerText}>{`Mudar`}</Text>
              </Pressable>
            </View>
          )}
          <Button title="Cadastrar planta" onPress={handleSaveNewPlant} />
        </View>
      </View>
    </ScrollView>
  );
}
