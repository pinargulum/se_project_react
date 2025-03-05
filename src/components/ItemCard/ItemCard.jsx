<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [activeButton, setActiveButton] = useState(item);
  function handleLike(item) {
    if (item.likes.some((like) => like === currentUser._id)) {
      //item._id = item.likes === currentUser._id

      setActiveButton("like__buton:active");
    } else {
      setActiveButton("like__button");
    }
    onCardLike(item);
  }

  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="image__text">{item.name}</h2>

        <button
          type="button"
          className={activeButton} //{currentUser ? "like__button active" : "like__button"}
          onClick={() => handleLike(item)}
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
