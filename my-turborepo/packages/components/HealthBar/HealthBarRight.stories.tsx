import { HealthBar } from "./HealthBar";

export default {
  title: "Components/HealthBar/Right",
  component: HealthBar,
  tags: ["autodocs"],
};

export const FullHealth = {
  args: {
    health: 100,
    position: "Right",
  },
};

export const SeventyFive = {
  args: {
    health: 75,
    position: "Right",
  },
};

export const FiftyPercent = {
  args: {
    health: 50,
    position: "Right",
  },
};

export const TwentyFive = {
  args: {
    health: 25,
    position: "Right",
  },
};
