import "../ItemCard/ItemCard.css";
<ItemCard />;

function ItemCard({ item, onCardClick }) {
  const handleCardClik = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <h2 className="image__text">{item.name}</h2>
      <img
        onClick={handleCardClik}
        src={item.link}
        alt={item.name}
        className="cards__image"
      />
    </li>
  );
}
export default ItemCard;
