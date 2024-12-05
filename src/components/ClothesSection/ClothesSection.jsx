import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../utils/constant";
function ClothsSection() {
  return (
    <>
    <div className="your__items">
     
        <p className="cloths__add-items">Your items</p>
        <button className="cloths__add-button" type="button">
          + Add new
        </button>
       </div>
        <div className="your__cards-item">
        <ul className="cards__list">
          {defaultClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                //onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
        </div>
        
    </>
  );
}
export default ClothsSection;
