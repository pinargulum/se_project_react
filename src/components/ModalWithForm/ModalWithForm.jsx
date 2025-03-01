//import AddItemModal from "../AddItemModal/AddItemModal";
import { useState } from "react";
import "./ModalWithForm.css";
import { showInputError } from "../../utils/validation";
function ModalWithForm({
  children,
  buttonText,
  titleText,
  onClose,
  isOpen,
  onSubmit,
  handleInputChange,
 
  modifierClass = "",
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className={`modal_content modal_content_${modifierClass}_form`}>
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_form"
        />
        <form 
          className={handleInputChange}
          onSubmit={onSubmit}
        >
          {children} {}
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
