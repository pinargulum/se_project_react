import React from "react";
import { useState, useEffect, useContext } from "react";
import "../ProfileEditModal/ProfileEditModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";


const ProfileEditModal = ({ isOpen, onCloseModal, handleProfileChange }) => {
  const currentUser = useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
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
      titleText="Change profile data"
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
      />
      <label className="modal__label">Avatar*</label>
      <input
        name="avatar"
        type="url"
        className="modal__input"
        value={data.avatar}
        onChange={handleChange}
        placeholder="Avatar"
      />
      
    </ModalWithForm>

    
  );
};

export default ProfileEditModal;
