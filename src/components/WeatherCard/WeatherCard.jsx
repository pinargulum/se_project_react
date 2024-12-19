import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constant.js";
import { defaultWeatherOptions } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather__card">
      <p className="weather__card-temp">{weatherData.temp[currentTemperatureUnit]} &deg;{" "}
      {currentTemperatureUnit}</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing  ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        }weather`}
        className="weather__card-image"
      />
    </section>
  );
}
export default WeatherCard;