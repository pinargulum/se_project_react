import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constant.js";

function WeatherCard({ weatherData }) {
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
      <p className="weather__card-temp">{weatherData.temp.F} F</p>
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
