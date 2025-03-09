import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import { useModalClose } from "../../utils/hooks/useModalClose.js"
function ItemModal({ activeModal, card, onCloseModal, deleteModalClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  useModalClose(activeModal, onCloseModal);
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"} `}>
      <div className="modal__content modal__content_type_cards">
        <button
          onClick={onCloseModal}
          type="button"
          className="modal__close-button modal__close-button_type_cards"
        />
        <img
          src={card.imageUrl}
          alt="preview-modal-image"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {isOwn && (
            <button
              className="preview__delete-button"
              type="button"
              onClick={deleteModalClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
