import "../SideBar/SideBar.css";
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";

import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SideBar({ handleEditClick, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const LogoutButton = () => {
    localStorage.getItem("token")
    //isLoggedIn
    //currentUser
    if (isLoggedIn) {
      localStorage.removeItem("token");
      navigate("/");
    }
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
              onClick={LogoutButton}
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
