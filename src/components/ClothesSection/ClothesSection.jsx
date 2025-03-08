import { useContext, useEffect } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "/src/utils/weatherApi.js";

function ClothesSection({ handleCardLike, handleCardClick, isLoggedIn, clothingItems, handleProfileAddItem, likedItems }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="profile__items">
        <p className="add__items">Your items</p>
        <button
          className="profile__add-button"
          type="button"
          onClick={handleProfileAddItem}
        >
          + Add new
        </button>
      </div>
      <div className="profile__clothes-list">
        <ul className="your__clothes-list">
          {clothingItems
            .filter((item) => item.owner === currentUser._id)
            .map((item) => (
              <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              handleCardLike={handleCardLike}
              isLoggedIn={isLoggedIn}
              isLiked={likedItems.has(item._id)}
              
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ClothesSection;
