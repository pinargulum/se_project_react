import "../SideBar/SideBar.css";
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function SideBar({ handleEditClick, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate;
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    localStorage.removeItem("token");
    setLogout(true);
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
              onClick={logout}
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
