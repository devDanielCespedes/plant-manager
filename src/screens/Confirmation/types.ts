export interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

export type Nav = {
  navigate: (value: string) => void;
};
