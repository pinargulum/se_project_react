<ItemCard />;
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  
  const [isLiked, setIsLiked] = useState(false);
  const toggleButton = () => {
    if (!isLiked) {
       
        setIsLiked(true);
        onCardLike(item._id, true); 
    } else {
      
        setIsLiked(false);
        onCardLike(item._id, false); 
    }
};
  
  const handleLike = (_id) => {
    //item = item.owner === currentUser._id;
    toggleButton()
    onCardLike(item._id);
    
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
