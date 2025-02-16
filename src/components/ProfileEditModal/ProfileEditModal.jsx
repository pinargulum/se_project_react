import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

const ProfileEditModal = ({
  isOpen,
  onCloseModal,
  handleProfileChange,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [currentName, setCurrentName] = useState("");
 const [currentAvatar, setCurrentAvatar] = useState("");
  
  function handleCurrentNameChange(e) {
    setCurrentName(e.target.value);
  }
  function handleCurrentAvatarChange(e) {
    setCurrentAvatar(e.target.value);
  }
  useEffect(() => {
    if (isOpen) {
      setCurrentName("");
      setCurrentAvatar("");
    }
  }, [isOpen]);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    currentUser.name  = currentName;
    currentUser.avatar = currentAvatar;
    //handleProfileChange({ currentName, currentAvatar });
    handleProfileChange({ name: currentName, avatar:currentAvatar });
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
        value={currentName}
        onChange={handleCurrentNameChange}
        required
      />
      <label className="modal__label">Avatar*</label>
      <input
        type="url"
        className="modal__input"
        value={currentAvatar}
        name="avatar"
        onChange={handleCurrentAvatarChange}
        placeholder="Avatar URL"
      />
    </ModalWithForm>
  );
};

export default ProfileEditModal;
