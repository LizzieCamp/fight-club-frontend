import { Button, HealthBar } from "../../../packages/components";
export default function FightClub() {
  return (
    <div>
      <h1>Fight Club</h1>
      <Button size="large" label="HELLO IM A BUTTOn" />
      <HealthBar health={75} />
      <div style={{ paddingTop: "400px" }}>
        <HealthBar health={75} position="Right" />
      </div>
    </div>
  );
}
