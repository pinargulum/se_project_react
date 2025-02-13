import logo from "/src/assets/Logo.png";

import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
//import UserContext  from "../contexts/UserContext.jsx";
import { useContext } from "react";
import * as auth from "../../utils/auth.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";


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
  const userName = currentUser?.name;
  const userAvatar = currentUser?.avatar;
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
      {isLoggedIn ?  (
        <div className="header__user-container">
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-button"
          >
            + Add Clothes
          </button>
              <p className="header__username">{userName}</p>
              <Link to="/profile">
              <img
                src={userAvatar}
                alt="profile-picture"
                className="header__avatar"
              />
              </Link>
            </div> 
        
      ) : (
        <div className="header__buttons">
          <button
            onClick={registerModal}
            type="button"
            className="header__add-clothes-button"
          >
            Sign up
          </button>
          <button
            onClick={loginModal}
            type="button"
            className="header__add-clothes-button"
          >
            or Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
