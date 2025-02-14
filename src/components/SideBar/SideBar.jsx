import "../SideBar/SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { Link } from "react-router-dom";
import EditProfileModel from "../EditProfileModal/EditProfileModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";

function SideBar(EditProfileModal) {
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
          onClick={EditProfileModal}
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
          Log Out
        </button>
    
    </div>
  );
}
export default SideBar;


