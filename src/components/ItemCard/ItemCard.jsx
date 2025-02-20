import "../ItemCard/ItemCard.css";
import React from "react";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
////import likeButton from "../assets/likeButton.png";

<ItemCard />;

function ItemCard({ item, onCardClick, onCardLike }) {
  //const currentUser = useContext(CurrentUserContext);
  //const isOwn = item.owner === currentUser._id;
  const handleCardClik = () => {
    onCardClick(item);
  };
  const handleLike = (item) => {
    onCardLike(item);
  };

  return (
    <li className="card">
      <div className="card__info">
      <h2 className="image__text">{item.name}</h2>
      <button type="button" className="like__button"></button>
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClik}
        //handleLike={handleLike}
        className="cards__image"
      />
    </li>
  );
}
export default ItemCard;
