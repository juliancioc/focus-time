import { useState } from "react";
import { Icon } from "@iconify/react";

import styles from "./timer.module.css";

export const Timer = () => {
  const [active, setActive] = useState<"focus" | "break">("focus");

  return (
    <div className={styles.containerTimer}>
      <div className={styles.wrapperActions}>
        <button
          className={`${styles.button} ${
            active === "focus" ? styles.active : ""
          }`}
          onClick={() => setActive("focus")}
        >
          Focus
        </button>
        <button
          className={`${styles.button} ${
            active === "break" ? styles.active : ""
          }`}
          onClick={() => setActive("break")}
        >
          Break
        </button>
      </div>
      <h1 className={styles.timer}>25:00</h1>
      <div>
        <button className={styles.buttonStart}><Icon icon="mdi:play"/></button>
        <button className={styles.buttonReset}><Icon icon="mdi:restart"/></button>
      </div>
    </div>
  );
};   
