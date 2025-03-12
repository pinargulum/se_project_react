import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import "../ClothesSection/ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "/src/utils/weatherApi.js";

function ClothesSection({
 onCardLike,
  handleCardClick,
  isLoggedIn,
  clothingItems,
  handleProfileAddItem,
  
}) {
  const currentUser = useContext(CurrentUserContext);
  //const isLiked = item.likes.some(_id => _id === currentUser._id);
  return (
    <div className="clothes-section">
       {currentUser._id && (
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
  )}
      <div className="profile__clothes-list">
      {currentUser._id && (
        <ul className="your__clothes-list">
      
          {clothingItems
            .filter((item) => item.owner === currentUser._id)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
                
              />
            ))}
        
        </ul>
      )}
      </div>
    </div>
  );
}
export default ClothesSection;
