//import AddItemModal from "../AddItemModal/AddItemModal";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  onClose,
  isOpen,
  onSubmit,
  modifierClass = "add_item_modal_content",
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} ${modifierClass}`}>
      <div className={`modal_content modal_content_type_form ${modifierClass}_content`}>
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_form"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          {children} {}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
