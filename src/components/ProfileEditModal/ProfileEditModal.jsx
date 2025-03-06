import React from "react";
import { useState, useEffect, useContext } from "react";
import "../ProfileEditModal/ProfileEditModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import { useForm } from "../../utils/hooks/useForm";
const ProfileEditModal = ({ isOpen, onCloseModal, handleProfileChange }) => {
  
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    setValues("");
  });

  /*
  const [data, setData] = useState({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
  });

  if (!currentUser || !currentUser._id) {
    return null;
  }
*/

  /*
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    return handleProfileChange(values.name, values.avatar);
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
        htmlFor="name"
      >
        Name:
      </label>
      <input
        name="name"
        type="text"
        className="change_data_input"
        placeholder="Name"
        value={values.name || ""}
        onChange={handleChange}
      />
      <label
        className="modal__label"
        htmlFor="name"
      >
        Avatar:
      </label>
      <input
        name="avatar"
        type="url"
        className="change_data_input"
        value={values.avatar || ""}
        onChange={handleChange}
        placeholder="Avatar"
        required
      />
    </ModalWithForm>
  );
};

export default ProfileEditModal;
