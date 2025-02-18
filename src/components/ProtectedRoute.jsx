import React from "react";
import { useContext, createContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "./contexts/CurrentUserContext";

function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);
  
  const goToProfile = () => {
    if (isLoggedIn && currentUser ) {
    navigate("/profile");  
};
  if (currentUser && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (isLoggedIn && currentUser ) {
    <Navigate to="/profile"
    state={{ from: location }}
    />;
  }
  if (isLoggedIn && currentUser ) {
    <Navigate to="/me"
    state={{ from: location }}
    />;
  }
  if (!isLoggedIn && !currentUser) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
      />
    );
  }

  return children;
}
}
export default ProtectedRoute 