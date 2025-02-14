import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

const ProfileEditModal = ({ isOpen, onCloseModal, handleUpdateProfile }) => {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }
  function handleUserAvatarChange(e) {
    setUserAvatar(e.target.value);
  }
  useEffect(() => {
    if (isOpen) {
      setUserName("");
      setUserAvatar("");
    }
  }, [isOpen]);
  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateProfile({ name, avatar });
  }
  return (
    <ModalWithForm
      titleText="pr"
      //buttonText={Save ? "Saving..." }
      isOpen={isOpen}
      onCloseModal={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name:</label>

      <input
        type="text"
        className="modal__input"
        placeholder="Name"
        onChange={handleUserNameChange}
        value={userName}
        required
      />

      <label className="modal__label">Avatar:</label>
      <input
        type="url"
        value={userAvatar}
        onChange={handleUserAvatarChange}
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
    </ModalWithForm>
  );
};

export default ProfileEditModal;
