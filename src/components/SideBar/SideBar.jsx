import "../SideBar/SideBar.css";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal.jsx";
import { removeToken } from "../../utils/token.js";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function SideBar({ handleEditClick }) {
  
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const onClick = () => {
    if (isLoggedIn && currentUser) {
      removeToken();
      navigate("/signin");
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
          <p
            className="sidebar__username"
           
          >
            {currentUser.name}
          </p>
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
            onClick={onclick}
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
