import "./ignoreWarnings";
// https://github.com/facebook/react-native/issues/33557

import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/types";
export default function App() {
  const [fontsloaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      async (notification) => {
        const data = notification.notification.request.content.data
          .plant as PlantProps;
        console.log(data);
      }
    );
     Notifications.cancelAllScheduledNotificationsAsync()

    return () => subscription.remove();

    // async function notifications() {
    // const data = await Notifications.getAllScheduledNotificationsAsync();
    // console.log(data)

    // }
  }, []);

  return fontsloaded && <Routes />;
}
