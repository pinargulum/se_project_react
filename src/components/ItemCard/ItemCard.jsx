import "../ItemCard/ItemCard.css";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import likeButton from "../../assets/"
<ItemCard />;

function ItemCard({ item, onCardClick }) {
  //const currentUser = useContext(CurrentUserContext);
  //const isOwn = item.owner === currentUser._id;
  const handleCardClik = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="image__text">{item.name}</h2>
      <button className="like__button">{likeButton}</button>
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
