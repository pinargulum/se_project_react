//import AddItemModal from "../AddItemModal/AddItemModal";
import "./ModalWithForm.css";
/*<ModalWithForm
            buttonText="Add garment"
            titleText="New garment"
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            handleAddItemSubmit={handleAddItemSubmit}
          >
            
          </ModalWithForm>
*/
function ModalWithForm({
  children,
  buttonText,
  titleText,
  onClose,
  isOpen,
  handleAddItemSubmit
  
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal__content  modal__content_type_form">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_form"
        />
        <form className="modal__form" onSubmit={handleAddItemSubmit} >
          {children}
          {" "}
          {}
          <button
            className="modal__submit"
            type="submit" 
            
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
