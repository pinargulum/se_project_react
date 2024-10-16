import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../utils/constant.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards"></section>
      <p className="cards__text">
        Today is {weatherData.temp} / You may want to wear:
      </p>
      <ul className="cards__list">
        {defaultClothingItems
          //.filter((item) => {
           // return item.weather === weatherData.type;
         // })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </main>
  );
}
export default Main;
