<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const [activeButton, setActiveButton] = useState();
  const handleLikeButton = () => {
    item.likes.some(id => id === currentUser._id);
    setActiveButton((prevState) => !prevState);
  };

  const handleLike = () => {
    handleLikeButton();
    onCardLike(item);
  };

  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="image__text">{item.name}</h2>
        {currentUser && (
          <button
            type="button"
            className={!activeButton ? "like__button active" : "like__button"}
            onClick={handleLike}
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
