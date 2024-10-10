import "../ItemModal/itemmodal.css";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"} `}>
      <div className="preview__modal-content">
        <button onClick={onClose} type="button" className="modal__close-button">Close</button>
        <img
          src=""
          alt="preview-modal-image"
          className="modal__image"
        />
        <div className="preview__image-fotter">
          <h2 className="image__title">Hat</h2>
          <p className="image__description">Weather: hot</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
