import "../DeleteModal/DeleteModal.css";
import ModalWithForm from "../src/components/ModalWithForm/ModalWithForm";
const DeleteModal = ({ isOpen, onCloseModal,handleCardDelete }) => {



    
  return (
   
    <ModalWithForm 
      titleText="Are you sure you want to delete this item? This action is irreversible."
      
      onClose={onCloseModal}
      onSubmit={handleCardDelete}
      isOpen={isOpen}
      modifierClass = "delete_modal_content"
      
    >
     
      <button
        type="button"
        className="modal__submit"
        //onSubmit={handleCardDelete}
      >
        Yes, Delete item
      </button>

      <button
      onClick={onCloseModal}
        className="cancel__button"
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
    //</div>
    //</div>
  );
}
export default DeleteModal;
