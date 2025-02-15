import "../SideBar/SideBar.css";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import EditProfileModel from "../ProfileEdidModal/ProfileEditModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import { Link } from "react-router-dom";

function SideBar(isLoggedIn, ProfileModal) {
  const currentUser = useContext(CurrentUserContext);
  
  const [avatarSrc, setAvatarsrc] = useState();
  useEffect(() => {
    if (isLoggedIn && currentUser.avatar) {
      setAvatarsrc(currentUser.avatar);
    }
    setAvatarsrc(defaultAvatar);
  }, [isLoggedIn, currentUser]);
  const handleLogout = () => {
    removeToken();
    
  }
  return (
    <div className="profile__sidebar">
      <div className="sidebar__user-container">
      <img
        src={avatarSrc}
        alt=""
        className="header__avatar"
        onError={() => (setAvatarsrc = { defaultAvatar })}
      />
      <p className="profile__username-sidebar">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons">
      <button
        //onClick={ProfileModal}
        type="button"
        className="sidebar__button"
      >
        Change profile data
      </button>
      <Link to="/">
      <button
        onClick={handleLogout}
        type="button"
       className="sidebar__button"
      >
        Sign Out
      </button>
      </Link>
      </div>
    </div>
    
  );
}
export default SideBar;
