import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
//import { defaultClothingItems } from "/src/utils/constant.js";
import ItemCard from "../ItemCard/ItemCard.jsx";

const Main = ({ weatherData, handleCardClick, clothingItems }) => (
  <main>
    <WeatherCard weatherData={weatherData} />
    <section className="main__cloths">
      <p className="cards__text">
        Today is {weatherData.temp.F} F and it is {weatherData.type} / You
        may want to wear:
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

export default Main;
