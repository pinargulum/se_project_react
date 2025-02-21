import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import "../ItemCard/ItemCard.css";

<ItemCard />;

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  
const [isLiked, setIsLiked] = useState(false)
  
const toggleButton = (likes) => {
  likes = item.owner === currentUser._id;
      if(!isLiked) {
        setIsLiked(!isLiked);
      }
      setIsLiked(isLiked)
    
  }
   
  const handleLike = (_id) => {
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
