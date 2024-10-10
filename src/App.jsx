import Header from "./Header.jsx";
import './App.css'
import Main from "./Main/Main.jsx";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import { useState } from "react";
import ItemModal from "./ItemModal/ItemModal.jsx";
//import ItemCard from "./ItemCard/ItemCard.jsx";

function App() {
const [activeModal, setActiveModal] = useState("");
const handleAddClick = () => {
  setActiveModal("add-garment");
}
const closeActiveModal = () => {
  setActiveModal("");
}
  return (
    <div className = "page">
    <div className = "page__content">
      <Header handleAddClick={handleAddClick} />
      <Main />
      
      <ModalWithForm buttonText="Add garment" titleText="New garment" activeModal={activeModal} handleCloseClick={closeActiveModal}>
      <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image
            <input
              type="text"
              className="modal__input"
              id="imageURL"
              placeholder="ImageURL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__radio-label">
              Hot
              <input id="hot" type="radio" className="modal__radio-input" />
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              Warm
              <input id="warm" type="radio" className="modal__radio-input" />
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              Cold
              <input id="cold" type="radio" className="modal__radio-input" />
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal />
        
      </div>
      </div>
  )
}

export default App
