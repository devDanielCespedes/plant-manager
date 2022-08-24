import { Feather } from "@expo/vector-icons";
import React from "react";

import {
  Animated,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import Colors from "../../styles/Colors";
import { styles } from "./styles";
import { PlantCardProps } from "./types";

export function PlantCardSecondary({
  data,
  onPress,
  handleRemove,
}: PlantCardProps): JSX.Element {
  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <View>
              <Pressable style={styles.buttonRemove} onPress={handleRemove}>
                <Feather name="trash" size={32} color={Colors.white} />
              </Pressable>
            </View>
          </Animated.View>
        )}
      >
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <SvgFromUri uri={data.photo} height={50} width={50} />
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.details}>
            <Text style={styles.timeLabel}>{"Regar às:"}</Text>
            <Text style={styles.time}>{data.hour}</Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
