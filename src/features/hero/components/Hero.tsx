import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.sliderContainer}>
      <picture>
        <img src="/mantenimiento_industrial.jpeg" alt="Slider" />
      </picture>
    </div>
  );
};
