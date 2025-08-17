import React from "react";
import style from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={style.sliderContainer}>
      <picture>
        {/* <img src="https://placehold.co/1920x770" alt="Slider" /> */}
        <img src="/mantenimiento_industrial.jpeg" alt="Slider" />
      </picture>
    </div>
  );
};

export default Slider;
