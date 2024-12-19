import { useContext, useState } from "react";
import "./ToggleSwich.css";
import CurrentTemperatureUnitContext from "../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext";


const ToggleSwich = () => {
  
  
  
  //const handleTemperatureUnit = () => {
    //weather.temperature.F = data.main.temp;
    //weather.temperature.C = Math.round(((data.main.temp - 32) * 5) / 9);
 // };
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
