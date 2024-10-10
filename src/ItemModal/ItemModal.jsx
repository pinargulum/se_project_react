import "../ItemModal/itemmodal.css";

function ItemModal({ activeModal, item, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"} `}>
      <div className="preview__modal-content">
        <button className="modal__close-button">Close</button>
        <img
          src=""
          alt="preview-modal-image"
          className="cards__image"
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
