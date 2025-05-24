import { Icon } from "@iconify/react";

import type { CardType } from "@/types";

import styles from "./card.module.css";

export const Card = ({ title, icon, description, color }: CardType) => {
  return (
    <div
      className={styles.container}
      style={{
        background:
          `linear-gradient(135deg, #3b0a67 0%, #1f1f47 50%, #1a2a3a 100%)`,
      }}
    >
      <div>
        <p style={{ color }}>
          <Icon icon={icon} />
          {title}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
