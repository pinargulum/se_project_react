import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { getToken } from "../../utils/token.js";

const ProfileEditModal = ({ isOpen, onCloseModal, handleProfileChange }) => {
  
    const currentUser = useContext(CurrentUserContext);

    const [data, setData] = useState({
      name: currentUser ? currentUser.name : '',
      avatar: currentUser ? currentUser.avatar : '',
    });
  
    if (!currentUser || !currentUser._id) {
      return null; 
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      return handleProfileChange(data);
    };
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
        value={data.name}
        onChange={handleChange}
        required
      />
      <label className="modal__label">Avatar*</label>
      <input
        type="url"
        className="modal__input"
        value={data.avatar}
        name="avatar"
        onChange={handleChange}
        placeholder="Avatar URL"
      />
    </ModalWithForm>
  );
};

export default ProfileEditModal;
