<ItemCard />;
import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardLike, onCardClick, isLoggedIn, isLiked }) {
  const currentUser = useContext(CurrentUserContext);
  isLiked === currentUser._id;
  const handleLikes = () => {
   
    onCardLike(item._id, isLiked);
  };

  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="image__text">{item.name}</h2>
        {isLoggedIn && (
          <button
            type="button"
            className={isLiked ? "like__button_active" : "like__button"}
            onClick={handleLikes}
          ></button>
        )}
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClik}
        className="cards__image"
      />
    </li>
  );
}
export default ItemCard;
