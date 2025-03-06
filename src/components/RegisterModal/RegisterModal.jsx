import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "../../utils/hooks/useForm";
import "../RegisterModal/RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const RegisterModal = ({
  isOpen,
  onCloseModal,
  handleCreateUser,
  loginModal,
}) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser(values.email, values.password, values.name, values.avatar);
  };

  return (
    <ModalWithForm
      titleText="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      modifierClass="register"
    >
      <label
        className="modal__label"
        htmlFor="email"
      >
        Email:
      </label>
      <input
        name="email"
        type="email"
        className="register_input"
        value={values.email || ""}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <label
        className="modal__label"
        htmlFor="password"
      >
        Password:
      </label>
      <input
        name="password"
        type="password"
        className="register_input"
        placeholder="Password"
        value={values.password || ""}
        onChange={handleChange}
        required
      />
      <label
        className="modal__label"
        htmlFor="name"
      >
        Name:
      </label>
      <input
        className="register_input"
        name="name"
        type="text"
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <label
        className="modal__label"
        htmlFor="avatar"
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
      <button
        onClick={loginModal}
        className="second__button"
        type="button"
      >
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
