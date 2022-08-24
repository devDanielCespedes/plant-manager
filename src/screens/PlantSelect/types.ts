import { PlantProps } from "../../libs/types";

export interface EnvironmentProps {
  key: string;
  title: string;
}

export interface NavPlantProps {
  plant: PlantProps;
}

export type Nav = {
  navigate: (value: string, plant?: NavPlantProps) => void;
};
