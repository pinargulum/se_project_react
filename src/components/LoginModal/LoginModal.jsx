import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";
import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onCloseModal, handleLogin, registerModal }) => {
  const { values, handleChange, setValues } = useForm({ email: "", password: "" });



  //function handleEmailChange(e) {
  //values
  //}
  //function handlePasswordChange(e) {
  //setPassword(e.target.value);
  //}
  useEffect(() => {
    if (isOpen) {
      setValues("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
   const inputValues = (values.email, values.password)
    evt.preventDefault();
    handleLogin({ inputValues });
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
        value={values.email}
      />

      <label className="modal__label">Password:</label>
      <input
        type="password"
        onChange={handleChange}
        className="login_input"
        placeholder="Password"
        value={values.password}
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
