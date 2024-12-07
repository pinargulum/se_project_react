import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../utils/constant";
function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="your__items">
        <p className="cloths__add-items">Your items</p>
        <button className="cloths__add-button" type="button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
export default ClothesSection;
