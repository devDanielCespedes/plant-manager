import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import { PlantSelect } from "../screens/PlantSelect";
import { MyPlants } from "../screens/MyPlants";
import { Platform } from "react-native";

const AppTab = createBottomTabNavigator();

export const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.heading,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 80,
        },
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};
