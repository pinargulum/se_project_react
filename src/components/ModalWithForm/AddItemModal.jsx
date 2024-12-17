import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";


const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [newItemName, setNewItemName] = useState("");
  const [newItemImageUrl, setNewItemImageUrl] = useState("");
  const [newItemWeather, setNewItemWeather] = useState("");
  function handleNameChange(e) {
    setNewItemName(e.target.value);
  }
  function handleImageUrlChange(e) {
    setNewItemImageUrl(e.target.value);
  }
  function handleWeatherChange(e) {
    setNewItemWeather(e.target.value);
  }
  useEffect(() => {
    setNewItemName(""), setNewItemImageUrl(""), setNewItemWeather("");
  }, []);

  function handleSubmit(e) {
    onAddItem = {
      name: newItemName,
      imageUrl: newItemImageUrl,
      weather: newItemWeather,
    };
    onCloseModal()
  }

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          value={newItemName}
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
          value={newItemImageUrl}
          onChange={handleImageUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label  className="modal__radio-label">
          Hot
          <input
            id="hot"
            name="radio"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={newItemWeather === "hot"}
            onChange={handleWeatherChange}
            required
          />
        </label>
        <label  name="radio" className="modal__radio-label">
          Warm
          <input
            id="warm"
            name="radio"
            type="radio"
            className="modal__radio-input"
            value="warm"
            checked={newItemWeather === "warm"}
            onChange={handleWeatherChange}
            required
          />
        </label>
        <label  name="radio" className="modal__radio-label">
          Cold
          <input
            id="cold"
            type="radio"
            name="radio"
            className="modal__radio-input"
            value="cold"
            checked={newItemWeather === "cold"}
            onChange={handleWeatherChange}
            required
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
