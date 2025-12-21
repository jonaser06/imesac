import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.sliderContainer}>
      <picture>
        <img src="/nuevaportada.png" alt="Slider" />
      </picture>
    </div>
  );
};
