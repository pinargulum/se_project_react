import "../SideBar/SideBar.css";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import EditProfileModel from "../EditProfileModal/ProfileEditModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import { Link } from "react-router-dom";

function SideBar(isLoggedIn) {
  const currentUser = useContext(CurrentUserContext);
  
  const [avatarSrc, setAvatarsrc] = useState(defaultAvatar);
  useEffect(() => {
    if (isLoggedIn && currentUser.avatar) {
      setAvatarsrc(currentUser.avatar);
    }
    setAvatarsrc(defaultAvatar);
  }, [isLoggedIn, currentUser]);
  const handleLogout = () => {
    removeToken();
    const {isLoggedIn} = false
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
        //onClick={ProfileEditModal}
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
