import "../SideBar/SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";

function SideBar({ handleEditClick, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile__sidebar">
      {currentUser._id && (
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
