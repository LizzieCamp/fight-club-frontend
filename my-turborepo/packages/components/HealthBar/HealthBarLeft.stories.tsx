import { HealthBar } from "./HealthBar";

export default {
  title: "Components/HealthBar/Left",
  component: HealthBar,
  tags: ["autodocs"],
};

export const FullHealth = {
  args: {
    health: 100,
  },
};

export const SeventyFive = {
  args: {
    health: 75,
  },
};

export const FiftyPercent = {
  args: {
    health: 50,
  },
};

export const TwentyFive = {
  args: {
    health: 25,
  },
};
