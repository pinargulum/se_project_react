import "../ItemModal/itemmodal.css";


function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"} `}>
      <div className="modal__content modal__content-type-image">
        <button onClick={onClose} type="button" className="modal__close-button" id="item-modal-close"></button>
        <img
          src={card.link}
          alt="preview-modal-image"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
