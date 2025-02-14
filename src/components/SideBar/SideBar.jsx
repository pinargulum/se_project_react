import "../SideBar/SideBar.css";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import defaultAvatar from "/src/assets/defaultAvatar.png";
import EditProfileModel from "../EditProfileModal/ProfileEditModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";

function SideBar(isLoggedIn) {
  const currentUser = useContext(CurrentUserContext);
  const handleLogout = () => removeToken();
  const [avatarSrc, setAvatarsrc] = useState(defaultAvatar);
  useEffect(() => {
    if (isLoggedIn && currentUser.avatar) {
      setAvatarsrc(currentUser.avatar);
    }
    setAvatarsrc(defaultAvatar);
  }, [isLoggedIn, currentUser]);

  return (
    <div className="profile__sidebar">
      <img
        src={avatarSrc}
        alt=""
        className="header__avatar"
        onError={() => (setAvatarsrc = { defaultAvatar })}
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
