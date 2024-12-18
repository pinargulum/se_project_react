import "./ItemModal.css";

function ItemModal({ activeModal, card, onClose, handleCardDelete}) {
  
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"} `}>
      <div className="modal__content modal__content_type_cards">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_cards"
        />
        <img
          src={card.imageUrl}
          alt="preview-modal-image"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button className="preview__delete-button" type="button" onClick={handleCardDelete}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
