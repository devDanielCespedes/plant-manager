import { TouchableOpacityProps } from "react-native";

export interface PlantCardProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}
