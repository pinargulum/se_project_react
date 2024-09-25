import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../utils/constant.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards"></section>
      <p className="cards__text">Today is 75 @deg; F / You may want to wear:</p>
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
            return(
                <ItemCard  key={item._id} item={item}  />
            )
        })
    }
      </ul>
    </main>
  );
}
export default Main;
