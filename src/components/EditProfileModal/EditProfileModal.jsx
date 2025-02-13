import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";

const EditProfileModel = ({ userData, isOpen, onClose, handleUpdateProfile }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateProfile({ name, avatar });
  }
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal__content  modal__content_login_form">
        <h2 className="modal__title modal__title_login">Change profile data</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_form"
        />
        <form
          className="modal__form"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">Name:</label>

          <input
            type="text"
            className="modal__input"
            placeholder="Name"
            //onChange={handleNameChange}
            //value={userData.name}
            required
          />

          <label className="modal__label">Avatar:</label>
          <input
            type="url"
            //value={userData.avatar}
            //onChange={handleAvatarChange}
            className="modal__input"
            placeholder="Avatar"
            required
          />
          <button
            type="submit"
            className="modal__submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModel;
