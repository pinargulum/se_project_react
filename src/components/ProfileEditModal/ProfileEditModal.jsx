import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { getToken } from "../../utils/token.js";

const ProfileEditModal = ({ isOpen, onCloseModal, handleProfileChange }) => {
  const currentUser = useContext(CurrentUserContext);
  const [changeName, setChangeName] = useState("");
  const [changeAvatar, setChangeAvatar] = useState("");

  function handleChangeName(e) {
    setChangeName(e.target.value);
  }
  function handleChangeAvatar(e) {
    setChangeAvatar(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setChangeName(currentUser?.name || "");
      setChangeAvatar(currentUser?.avatar || "");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    const token = localStorage.getItem("token")
    const name = changeName;
    const avatar = changeAvatar;

  handleProfileChange({ token, name, avatar });
  }

  return (
    <ModalWithForm
      titleText="Save changes"
      buttonText=" Save Changes"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name*</label>
      <input
        name="name"
        type="text"
        className="modal__input"
        placeholder="Name"
        value={changeName}
        onChange={handleChangeName}
        required
      />
      <label className="modal__label">Avatar*</label>
      <input
        type="url"
        className="modal__input"
        value={changeAvatar}
        name="avatar"
        onChange={handleChangeAvatar}
        placeholder="Avatar URL"
      />
    </ModalWithForm>
  );
};

export default ProfileEditModal;
