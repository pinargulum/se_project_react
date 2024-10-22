import "./ModalWithForm.css";
function ModalWithForm({ children, buttonText, titleText, onClose, isOpen }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal__content" id="add-garment-content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
          id="add-garment-close-button"
        />
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
