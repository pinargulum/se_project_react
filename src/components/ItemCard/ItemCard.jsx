import "../ItemCard/ItemCard.css";
import React from "react";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
//import likeButton from "../assets/likeButton.png";
import like from "/src/assets/likeButton.png";
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
      <h2 className="image__text">{item.name}</h2>
      <image src="/src/assets/likeButton.png"
        className="like__button"
        //type="button"
        onClick={onCardLike}
      />
      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClik}
        handleLike={handleLike}
        className="cards__image"
      />
    </li>
  );
}
export default ItemCard;
