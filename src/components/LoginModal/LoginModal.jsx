import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../LoginModal/LoginModal.css";

const LoginModal = ({ isOpen, onClose, handleLogin }) => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleEmailChange(e) {
     
      setEmail(e.target.value)
     
    }
    function handlePasswordChange(e) {
      setPassword(e.target.value)
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
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal__content  modal__content_login_form">
        <h2 className="modal__title modal__title_login">Login</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_type_form"
        />
        <form
          className="modal__form"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">Email:</label>

          <input
            type="email"
            className="modal__input"
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
            className="modal__input"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="modal__submit"
          >
            Login
          </button>

          <button
            className="modal__submit modal__login"
            type="submit"
          >
            or Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
