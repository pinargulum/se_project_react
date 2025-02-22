<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const [isLiked, setIsLiked] = useState([]);
  
  const toggleButton = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  const handleLike = () => {
    toggleButton();
    onCardLike(item);
   
  };

  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="image__text">{item.name}</h2>
        <button
          type="button"
          className="like__button"
          onClick={handleLike}
        ></button>
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
