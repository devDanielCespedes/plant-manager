import React, { useCallback, useEffect, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import waterDrop from "../../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import { loadPlant, removePlant } from "../../libs/storage";
import { formatDistance } from "date-fns";
import pt from "date-fns/esm/locale/pt/index.js";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";
import { Load } from "../../components/Load";
import { PlantProps } from "../../libs/types";

export function MyPlants(): JSX.Element {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  const handleRemove = useCallback((plant: PlantProps) => {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((previous) =>
              previous.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert("Não foi possível remover!");
          }
        },
      },
    ]);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <PlantCardSecondary handleRemove={() => handleRemove(item)} data={item} />
    ),
    []
  );

  useEffect(() => {
    async function loadStorageDate() {
      const plantsStoraged = await loadPlant();
      if (plantsStoraged.length !== 0) {
        const nextTime = formatDistance(
          new Date(plantsStoraged[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          {
            locale: pt,
          }
        );
        setNextWatered(
          `Não esquecça de regar a ${plantsStoraged[0].name} às ${nextTime} horas`
        );
      }

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageDate();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>
      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>
        <FlatList
          data={myPlants}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListEmptyComponent={() => <Text>Não há plantas cadastradas</Text>}
        />
      </View>
    </View>
  );
}
