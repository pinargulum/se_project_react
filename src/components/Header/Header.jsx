import logo from "/src/assets/Logo.png";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
//import UserContext  from "../contexts/UserContext.jsx";
import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute.jsx";
import * as auth from "../../utils/auth.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { useState } from "react";

const Header = ({
  handleAddClick,
  weatherData,
  registerModal,
  loginModal,
  isLoggedIn,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const onClick = () => {
    if (isLoggedIn && currentUser) {
      navigate("/profile");
    }
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="header-logo"
        />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <div className="header__user-container">
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-button"
          >
            + Add Clothes
          </button>

          <p className="header__username">{currentUser.name}</p>

          <img
            onClick={onClick}
            src={currentUser.avatar}
            alt="profile picture"
            className="header__avatar"
          />
        </div>
      ) : (
        <div className="signed__buttons">
          <div className="header__buttons">
            <button
              onClick={registerModal}
              type="button"
              className="header__button"
            >
              Sign up
            </button>
            <button
              onClick={loginModal}
              type="button"
              className="header__button"
            >
              or Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
