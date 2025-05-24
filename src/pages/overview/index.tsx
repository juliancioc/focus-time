import { Card } from "@/components/card";

export const Overview = () => {
  return (
    <>
      <Card
        title="Tempo de foco"
        icon="mdi:access-time"
        description="2h 15m"
        color="#3b0a67"
        colorTitle="#c084fc"
      />
      <Card
        title="Tarefas concluídas"
        icon="mdi:checkbox-marked-circle-outline"
        description="8/12"
        color="#26314F"
        colorTitle="#60a4f9"
      />
      <Card
        title="Streak atual"
        icon="mdi:fire"
        description="5 dias"
        color="#263736"
        colorTitle="#4ADE80"
      />
      <Card
        title="Score focus"
        icon="mdi:fire"
        description="92%"
        color="#3B3232"
        colorTitle="#eebf17"
      />
    </>
  );
};
