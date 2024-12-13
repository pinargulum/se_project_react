

import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";


function ClothesSection({ onCardClick, clothingItems }) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick}  />
          );
        })}
      </ul>
    </div>
    </div>
  );
}
export default ClothesSection;
