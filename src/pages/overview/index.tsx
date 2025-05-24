import { Card } from "@/components/card";

import styles from "./overview.module.css";

export const Overview = () => {
  return (
    <div className={styles.containerOverview}>
      <div className={styles.wrapperProgress}>
        <h2>Seu progesso hoje</h2>
        <div className={styles.wrapperCards}>
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
        </div>
      </div>
    </div>
  );
};
