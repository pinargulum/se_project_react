import "../ItemCard/ItemCard.css";

import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

<ItemCard />;

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const liked = item.owner === currentUser._id;
  const [activeButton, setActiveButton] = useState(false);
    useEffect(() => {
     
      if (liked) {
        setActiveButton(true);
      }
      setActiveButton(false)
    }, []);
    
  const handleCardClik = () => {
    onCardClick(item);
    
  };
  

  const handleLike = (_id) => {
    onCardLike(item._id);
  };

  return (
    <li className="card">
      <div className="card__info">
      <h2 className="image__text">{item.name}</h2>
      <button type="button" className="like__button" onClick={handleLike}></button>
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
