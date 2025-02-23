import "../DeleteModal/DeleteModal.css";
import ModalWithForm from "../src/components/ModalWithForm/ModalWithForm";
function DeleteModal({ isOpen, onCloseModal,handleCardDelete }) {



    
  return (
    <ModalWithForm
      titleText="Are you sure you want to delete this item? This action is irreversible."
      isOpen={isOpen}
      onClick={onCloseModal}
      onSubmit={handleCardDelete}
    >
     
      <button
        type="submit"
        className="modal__submit"
      >
        Yes, Delete item
      </button>

      <button
        className="cancel_button"
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
}
export default DeleteModal;
