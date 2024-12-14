import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "/src/utils/weatherApi.js";

function ClothesSection({ onCardClick, profileItems, weatherData }) {
  return (
    <div className="clothes-section">
      <div className="your__items">
        <p className="add__items">Your items</p>
        <button className="cloths__add-button" type="button">
          + Add new
        </button>
      </div>
      <div className="your__list">
        <ul className="your__clothes-list">
          {profileItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ClothesSection;
