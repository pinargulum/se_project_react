import "../SideBar/SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { Link } from "react-router-dom";
import EditProfileModel from "../EditProfileModal/ProfileEditModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  const handleLogout = () => removeToken()
   
  
  return (
    <div className="profile__sidebar">
      <img
        className="profile__picture-sidebar"
        src={currentUser.avatar}
        alt="profile-picture"
      />
      <p className="profile__username-sidebar">{currentUser.name}</p>

      <button
          //onClick={ProfileEditModal}
          type="button"
          className="profile__change-button"
        >
          Change profile data
        </button>
        <button
          //onClick={handleLogout}
          type="button"
          className="profile__signout-button"
        >
          Sign Out
        </button>
    
    </div>
  );
}
export default SideBar;


