import logo from "/src/assets/Logo.png";
import avatar from "/src/assets/Ellipse 18.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData, registerModal, loginModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="header-logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch/>
      <Link to="/signup" className="header__link">
      <button
        onClick={registerModal}
        type="button"
        className="header__add-clothes-button"
      >
        Sign up
      </button>
      </Link>
      <Link to="/signin" className="header__link">
      <button
        onClick={loginModal}
        type="button"
        className="header__add-clothes-button"
      >
        or Login
      </button>
      </Link>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
     
      </Link>
    </header>
  );
}
export default Header;
