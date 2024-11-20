import { useState } from "react";
import "./ToggleSwich.css";
function ToggleSwich() {
  const handleOnChange = (e) => {
    if (currentTemperatureUnit === "C") handleToggleSwichChange("F");
    if (currentTemperatureUnit === "F") handleToggleSwichChange("C");
  };
  const [currentTemperatureUnit, handleToggleSwichChange] = useState("C");
  return (
    <label className="swich">
      <input className="checkbox" type="checkbox" onChange={handleOnChange} />
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
}
export default ToggleSwich;
