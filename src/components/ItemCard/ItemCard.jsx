<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  item.likes.some((id) => id === currentUser._id);
  
  const [activeButton, setActiveButton] = useState();
  
  const handleLikeButton = (likes) => {
  
    likes = item.likes === currentUser._id
  if(currentUser._id) {
      setActiveButton((prevState) => !prevState);
  }
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
        
          <button
            type="button"
            className={activeButton ? "like__button" : "like__button active" } 
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
