import "./DeleteModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const DeleteModal = ({ activeModal, onCloseModal, handleCardDelete }) => {
  return (
    <div className={`modal ${activeModal === "delete" && "modal_opened"} `}>
      <div className="modal__content modal__content_delete_form">
        <button
          onClick={onCloseModal}
          type="button"
          className="modal__close-button-delete"
        />
        <div className="modal__content_delete_container">
          <h2 className="modal__confirm-title">
            
            Are you sure you want to delete this item?</h2>
             <p className="modal__p">       
            This action is irreversible.
            </p> 
          <button
            className="delete__confirm"
            type="button"
            onClick={handleCardDelete}
          >
            Yes delete Item
          </button>

          <button
            className="cancel__button"
            type="button"
            onClick={onCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
   </div>
  );
};
export default DeleteModal;
