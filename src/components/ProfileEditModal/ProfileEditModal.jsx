import React from "react";
import { useState, useEffect, useContext } from "react";
import "../ProfileEditModal/ProfileEditModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import { useForm } from "../../utils/hooks/useForm";
const ProfileEditModal = ({ isOpen, onCloseModal, handleProfileChange }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
  });

  useEffect(() => {
    if (isOpen) {
     setValues({name: currentUser.name || "", avatar: currentUser.avatar || ""}) 
      
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileChange(values);
  };
  return (
    <ModalWithForm
      titleText="Change profile data"
      buttonText=" Save Changes"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      modifierClass="change_data"
    >
      <label
        className="modal__label"
        htmlFor="Name"
      >
        Name:
        <input
        id="Name"
          name="name"
          type="text"
          className="change_data_input"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label
        className="modal__label"
        htmlFor="Avatar"
      >
        Avatar:
        <input
        id="Avatar"
          name="avatar"
          type="url"
          className="change_data_input"
          value={values.avatar}
          onChange={handleChange}
          placeholder="Avatar"
        />
      </label>
    </ModalWithForm>
  );
};
export default ProfileEditModal;
