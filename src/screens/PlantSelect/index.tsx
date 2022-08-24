import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { EnvironmentButton } from "../../components/EnvironmentButton";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { PLantCardPrimary } from "../../components/PlantCardPrimary";
import { PlantProps } from "../../libs/types";
import api from "../../services/api";
import Colors from "../../styles/Colors";
import { styles } from "./styles";
import { EnvironmentProps, Nav } from "./types";

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelect, setEnvironmentSelect] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation<Nav>();
  const fetchPlants = async () => {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    if (!data) return setLoading(true);
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  const handleEnvironmentSelected = useCallback(
    (environment: string) => {
      setEnvironmentSelect(environment);

      if (environment === "all") return setFilteredPlants(plants);

      const filtered = plants?.filter((plant) =>
        plant.environments.includes(environment)
      );

      setFilteredPlants(filtered);
    },
    [setFilteredPlants, plants]
  );

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return;
    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  const handlePlantSelect = useCallback(
    (plant: PlantProps) => navigation.navigate("PlantSave", { plant }),
    []
  );

  const environmentsKeyExtractor = useCallback((item) => String(item.key), []);
  const plantsKeyExtractor = useCallback((item) => String(item.id), []);

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }
    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          keyExtractor={environmentsKeyExtractor}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              acvitve={item.key === environmentSelect}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={plantsKeyExtractor}
          renderItem={({ item }) => (
            <PLantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          ListFooterComponentStyle={{ marginBottom: 30 }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={Colors.green} /> : <></>
          }
        />
      </View>
    </View>
  );
}
