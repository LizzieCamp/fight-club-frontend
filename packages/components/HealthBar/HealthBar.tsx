import "./healthbar.css";

type HealthProps = {
  health?: number;
  position?: "Left" | "Right";
};

export const HealthBar = ({ health, position }: HealthProps) => {
  const backgroundColor = (health?: number) => {
    if (!health) {
      return "pink";
    }
    if (health >= 75) {
      return "green";
    }
    if (health > 25) {
      return "orange";
    }
    if (health <= 25) {
      return "red";
    }
  };
  return (
    <div className="container">
      <div
        className={`${position}`}
        style={{
          width: `${health}%`,
          backgroundColor: backgroundColor(health),
          height: 20,
        }}
      ></div>
    </div>
  );
};
