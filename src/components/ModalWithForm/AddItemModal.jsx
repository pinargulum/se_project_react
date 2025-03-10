import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";
import "../ModalWithForm/AddItemModal.css";
import { useModalClose } from "../../utils/hooks/useModalClose.js";

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
    onAddItem({ name, imageUrl, weather });
  }
  useModalClose(isOpen, onCloseModal);
  return (
    <ModalWithForm
      titleText="New Garment"
      buttonText={isLoading ? "Adding garment..." : "Add garment"}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      modifierClass="add_item"
    >
      <label
        htmlFor="garment"
        className="modal__add_item"
      >
        Name
      </label>
      <input
        type="text"
        className="add_item_input"
        id="garment"
        name="garment"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        required
      />
      <label
        htmlFor="imageURL"
        className="modal__add_item"
      >
        Image
      </label>
      <input
        type="text"
        className="add_item_input"
        id="imageURL"
        name="imageUrl"
        placeholder="ImageURL"
        value={imageUrl}
        onChange={handleImageUrlChange}
        required
      />
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal__radio-label"
        >
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
        <label
          htmlFor="warm"
          name="radio"
          className="modal__radio-label"
        >
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
        <label
          htmlFor="cold"
          name="radio"
          className="modal__radio-label"
        >
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
