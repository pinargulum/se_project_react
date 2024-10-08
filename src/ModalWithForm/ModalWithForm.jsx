import "../ModalWithForm/ModalWithForm.css";
function ModalWithForm({ children }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close-button">
          CLOSE
        </button>
        <form className="modal__form">
         { children }
          <button className="modal__submit" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
