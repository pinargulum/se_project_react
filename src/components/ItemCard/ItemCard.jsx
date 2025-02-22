<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";
import heart from "/src/assets/likeButtonActive.png";
function ItemCard({ item, onCardClick, onCardLike }) {
 
  const [activeButton, setActiveButton] = useState();

  const handleLike = () => {
    onCardLike(item);
    setActiveButton((prevState) => !prevState);
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
          className={activeButton ? "like__button active" : "like__button"}
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
