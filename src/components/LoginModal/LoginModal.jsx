import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onCloseModal, handleLogin, registerModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin({ email, password });
  }
  return (
    <ModalWithForm
      titleText="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      modifierClass="login"
    >
      <label className="modal__label">Email:</label>

      <input
        type="email"
       className="login_input"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        required
      />

      <label className="modal__label">Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="login_input"
        placeholder="Password"
        required
      />

      <button onClick={registerModal}
        className="second__button"
        type="submit"
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};
export default LoginModal;
