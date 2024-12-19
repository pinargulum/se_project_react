import { useContext, useState } from "react";
import "./ToggleSwich.css";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";

const ToggleSwich = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="swich">
      <input
        className="checkbox"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "swich__slider swich__slider-F"
            : "swich__slider swich__slider-C"
        }
      />
      <p
        className={`swich__temp-F ${
          currentTemperatureUnit === "F" && "swich__active"
        }`}
      >
        F
      </p>
      <p
        className={`swich__temp-C ${
          currentTemperatureUnit === "C" && "swich__active"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwich;
