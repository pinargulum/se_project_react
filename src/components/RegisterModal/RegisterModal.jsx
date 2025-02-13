import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import "../RegisterModal/RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const RegisterModal = ({ isOpen, onClose, handleCreateUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleavatarChange(e) {
    setAvatar(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser({
      name,
      avatar,
      email,
      password,
    });
  };

  return (
    <ModalWithForm
      titleText="signup"
      //buttonText={Save ? "Saving..." }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Email:</label>

      <input
        name="email"
        type="email"
        className="modal__input"
        value={email}
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />

      <label className="modal__label">Password:</label>
      <input
        name="password"
        type="password"
        className="modal__input"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <label className="modal__label">Name:</label>
      <input
        className="modal__input"
        name="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Password"
      />
      <label className="modal__label">Avatar URL:</label>
      <input
        type="url"
        className="modal__input"
        value={avatar}
        name="avatar"
        onChange={handleavatarChange}
        placeholder="Avatar URL"
      />

      <button
        type="submit"
        className="modal__submit"
      >
        Sign up
      </button>
      <button
        className="modal__submit modal__login"
        type="submit"
      >
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
