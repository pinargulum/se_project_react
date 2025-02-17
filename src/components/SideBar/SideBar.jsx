import "../SideBar/SideBar.css";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal.jsx";
import { removeToken } from "../../utils/token.js";
//import { Link } from "react-router-dom";

function SideBar({ isLoggedIn,  handleEditClick }) {
const currentUser = useContext(CurrentUserContext);

  const handleLogout = () => {
    removeToken();  
  }

  return (
    <div className="profile__sidebar">
      <div className="sidebar__user-container">
    
      <img
        src={currentUser?.avatar}
        alt="profile-picture"
        className="sidebar__avatar"
        
      />
      <p className="sidebar__username">{currentUser?.name}</p>
     
      <div className="change__profile">
     
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
       className="sidebar__button"
      >
        Sign Out
      </button>
      
      </div>
      </div>
    </div>
    
  );
}
export default SideBar;
