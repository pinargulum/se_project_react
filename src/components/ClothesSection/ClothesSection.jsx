import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "/src/utils/weatherApi.js";

function ClothesSection({ onCardClick, profileItems, handleProfileAddItem }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = currentUser._id;
  return (
    <div className="clothes-section">
      <div className="profile__items">
        <p className="add__items">Your items</p>
        {isOwn && (
        <button
          className="profile__add-button"
          type="button"
          onClick={handleProfileAddItem}
        >
          + Add new
        </button>
        )}
      </div>
      <div className="profile__clothes-list">
        <ul className="your__clothes-list">
          {profileItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
        
      </div>
    </div>
  );
}
export default ClothesSection;
