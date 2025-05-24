import { Icon } from "@iconify/react";

import type { CardType } from "@/types";

import styles from "./card.module.css";

export const Card = ({
  title,
  icon,
  description,
  color,
  colorTitle,
}: CardType) => {
  return (
    <div
      className={styles.containerCard}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, #1f1f47 40%, #1a2a3a 70%)`,
        border: `1px solid ${color}`,
      }}
    >
      <div>
        <p style={{ color: colorTitle }} className={styles.title}>
          <Icon icon={icon} fontSize={24} />
          {title}
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
