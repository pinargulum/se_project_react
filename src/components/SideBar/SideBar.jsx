import "../SideBar/SideBar.css";
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";

import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function SideBar({ handleEditClick, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate;

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (!isLoggedIn) {
      navigate("/login");
    }
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="profile__sidebar">
      {currentUser && (
        <div className="profile__user-info">
          <div className="sidebar__user-container">
            <img
              src={currentUser.avatar}
              alt="profile-picture"
              className="sidebar__avatar"
            />
            <p className="sidebar__username">{currentUser.name}</p>
          </div>
          <div className="sidebar__change-profile">
            <button
              onClick={handleEditClick}
              type="button"
              className="sidebar__button"
            >
              Change profile data
            </button>

            <button
              onClick={handleLogout}
              type="button"
              className="sidebar__button logout"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default SideBar;
