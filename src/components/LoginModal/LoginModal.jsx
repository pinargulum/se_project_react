import React from "react";
import { useEffect } from "react";
import "../LoginModal/LoginModal.css";
import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onCloseModal, handleLogin, registerModal }) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    
    evt.preventDefault();
    handleLogin(values.email, values.password);
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
      <label
        className="modal__label"
        htmlFor="email"
      >
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="login_input"
        placeholder="Email"
        onChange={handleChange}
        value={values.email || ""}
        required
      />

      <label
        className="modal__label"
        htmlFor="password"
      >
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        className="login_input"
        placeholder="Password"
        value={values.password || ""}
        required
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
