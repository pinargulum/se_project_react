import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="main__cloths">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} and it is {weatherData.type} / You may want
          to wear:
        </p>
        <ul className="cloths__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
