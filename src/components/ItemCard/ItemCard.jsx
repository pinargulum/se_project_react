<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ItemCard/ItemCard.css";


function ItemCard({ item, handleCardLike, onCardClick, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
 //const [activeButton, setActiveButton] = useState();
const handleLikes = () => {
handleCardLike(item)
}
 
  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="image__text">{item.name}</h2>
        {currentUser._id && 
        <button
          type="button"
          className="like__button"
          onClick={handleLikes}
        ></button>
        }
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
