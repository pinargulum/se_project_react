import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";
import "../ModalWithForm/AddItemModal.css"
//import { useForm } from "../../Hooks/useForm.js"; 
const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }
  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    buttonState
    onAddItem({ name, imageUrl, weather });
   
  }
  
  return (
    <ModalWithForm
      titleText="New Garment"
      buttonText={isLoading ? "Adding garment..." : "Add garment"}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
       modifierClass= "add_item"
    >
    
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="text"
          className="modal__input"
          id="imageURL"
          placeholder="ImageURL"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__radio-label">
          Hot
          <input
            id="hot"
            name="radio"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
            required
          />
        </label>
        <label name="radio" className="modal__radio-label">
          Warm
          <input
            id="warm"
            name="radio"
            type="radio"
            className="modal__radio-input"
            value="warm"
            checked={weather === "warm"}
            onChange={handleWeatherChange}
            required
          />
        </label>
        <label name="radio" className="modal__radio-label">
          Cold
          <input
            id="cold"
            type="radio"
            name="radio"
            className="modal__radio-input"
            value="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
            required
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
