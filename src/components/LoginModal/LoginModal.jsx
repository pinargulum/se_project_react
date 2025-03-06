import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onCloseModal, handleLogin, registerModal }) => {
  const { values, handleChange, setValues } = useForm({});

  
  //function handleEmailChange(e) {
  //values
  //}
  //function handlePasswordChange(e) {
  //setPassword(e.target.value);
  //}
  useEffect(() => {
    if (isOpen) {
      //setEmail("");
      //setPassword("");
      setValues("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values);
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
        onChange={handleChange}
        values={values}
      />

      <label className="modal__label">Password:</label>
      <input
        type="password"
        onChange={handleChange}
        className="login_input"
        placeholder="Password"
        values={values}
      />
      <button
        onClick={registerModal}
        className="second__button"
        type="button"
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};
export default LoginModal;
