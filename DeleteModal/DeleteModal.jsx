import "../DeleteModal/DeleteModal.css";
import ModalWithForm from "../src/components/ModalWithForm/ModalWithForm";
function DeleteModal(isOpen, onCloseModal,handleCardDelete ) {



    const handleSubmit = () => {
        handleCardDelete()
    }
    
  return (
    <ModalWithForm
      titleText="Are you sure you want to delete this item? This action is irreversible."
      isOpen={isOpen}
      //onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
     
      <button
      //onClick={handleCardDelete}
        type="submit"
        className="modal__submit"
      >
        Yes, Delete item
      </button>

      <button
        //className={onCloseModal}
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
}
export default DeleteModal;
