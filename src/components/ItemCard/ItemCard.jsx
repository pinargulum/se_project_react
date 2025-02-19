import "../ItemCard/ItemCard.css";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
<ItemCard />;

function ItemCard({ item, handleCardClik }) {
  const currentUser = useContext(CurrentUserContext);

    const isOwn = currentUser.owner === currentUser._id;
    const onCardClik = () => {
      handleCardClik(item);
    };

  return (
    <li className="card">
      <h2 className="image__text">{item.name}</h2>
      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={onCardClik}
        className="cards__image"
      />
    </li>
  );
}
export default ItemCard;
