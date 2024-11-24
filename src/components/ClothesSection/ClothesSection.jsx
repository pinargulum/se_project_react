import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constant";

function ClothsSection() {
  return (
    <div className="your__items">
      <section className="your__items-section">
        <p className="cloths__add-items">Your items</p>
        <button className="cloths__add-button" type="button">
          + Add new
        </button>
      </section>
      <section className="your__items-card-section">
       <li className="your__items-card-list">
        return(
            
            {defaultClothingItems}
        )
       </li>
      </section>
    </div>
  )
}
export default ClothsSection;
