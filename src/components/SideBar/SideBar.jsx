import "../SideBar/SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="profile__sidebar">
      <img
        className="profile__picture-sidebar"
        src={currentUser.avatar}
        alt="profile-picture"
      />
      <p className="profile__username-sidebar">{currentUser.name}</p>
    </div>
  );
}
export default SideBar;














/*
import "../SideBar/SideBar.css";
import avatar from "/src/assets/Ellipse 18.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

const SideBar = ({ profileEditModal}) => {
  
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <div className="profile__sidebar">
      <img
        className="profile__picture-sidebar"
        src={avatar}
        alt="profile-picture"
      />
      <p className="profile__username-sidebar">{currentUser.name}</p>
      
        <button
          onClick={profileEditModal}
          type="button"
          className="profile__change-button"
        >
          Change profile data
        </button>
        <button
          //onClick={}
          type="button"
          className="profile__signout-button"
        >
          Log Out
        </button>
    
    </div>
  );
}
export default SideBar;
*/