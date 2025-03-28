import logo from "/src/assets/Logo.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";

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

      {isLoggedIn ? (
        <div className="header__user-container">
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-button"
          >
            + Add Clothes
          </button>
          <p className="header__username">{currentUser.name}</p>
          <Link to="/profile">
            <img
              onClick={onClick}
              src={currentUser.avatar}
              alt="profile picture"
              className="header__avatar"
            />
          </Link>
        </div>
      ) : (
        <div className="header__buttons">
          <ToggleSwitch />
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
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
