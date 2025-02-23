import "../DeleteModal/DeleteModal.css";
import ModalWithForm from "../src/components/ModalWithForm/ModalWithForm";
const DeleteModal = ({ isOpen, onCloseModal,handleCardDelete }) => {



    
  return (
    <ModalWithForm ModalWithForm_delete
      titleText="Are you sure you want to delete this item? This action is irreversible."
      isOpen={isOpen}
      onClose={onCloseModal}
      //onSubmit={handleCardDelete}
      className="delete__modal"
    >
     
      <button
        type="button"
        className="delete__modal-submit"
        onSubmit={handleCardDelete}
      >
        Yes, Delete item
      </button>

      <button
      onClick={onCloseModal}
        className="cancel_button"
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
}
export default DeleteModal;
