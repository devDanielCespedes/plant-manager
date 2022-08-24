import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";

import Colors from "../styles/Colors";
import { PlantSave } from "../screens/PlantSave";
import { AuthRoutes } from "./tab.routes";

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: Colors.white,
      },
      headerShown: false,
    }}
    initialRouteName="Welcome"
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
