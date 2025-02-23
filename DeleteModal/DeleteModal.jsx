import "../DeleteModal/DeleteModal.css";
import ModalWithForm from "../src/components/ModalWithForm/ModalWithForm";
function DeleteModal() {
  return (
    <ModalWithForm
      titleText="Are you sure you want to delete this item? This action is irreversible."
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
     
      <button
        type="submit"
        className="modal__submit"
      >
        Yes, Delete item
      </button>

      <button
        className="modal__cancel-button"
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
}
export default DeleteModal;
