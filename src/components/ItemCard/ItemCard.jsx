<ItemCard />;
import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, handleCardLike, onCardClick, isLiked, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const handleLikes = () => {
    handleCardLike(item._id, isLiked);
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
            className={`like__button ${isLiked ? "like__button_active" : ""}`}
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
