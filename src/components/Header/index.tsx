import React, { useEffect, useState } from "react";

import { Text, View, Image } from "react-native";
import { styles } from "./styles";

import userImage from "../../assets/daniel.jpeg";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function Header(): JSX.Element {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }
    getUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={userImage} style={styles.userImage} />
    </View>
  );
}
