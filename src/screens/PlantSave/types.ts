import { PlantProps } from "../../libs/types";

export interface Params {
  plant: PlantProps;
}

export type Nav = {
  navigate: (
    value: string,
    params: {
      title: string;
      subtitle: string;
      buttonTitle: string;
      icon: "smile" | "hug";
      nextScreen: string;
    }
  ) => void;
};
