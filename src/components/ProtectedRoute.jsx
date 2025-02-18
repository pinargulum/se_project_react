import React from "react";
import { useContext, createContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "./contexts/CurrentUserContext";

function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);

  if (currentUser && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (isLoggedIn && currentUser) {
    <Navigate
      to="/"
      state={{ from: location }}
    />;
  }
  if (isLoggedIn && currentUser) {
    return(
    <Navigate
      to="/users/me"
      state={{ from: location }}
    />
    )
  }
  if (isLoggedIn && currentUser) {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Current Path: {location.pathname}</p>
      </div>
    );
  }
  if (!isLoggedIn && !currentUser) {
    return (
      <Navigate
        to="/signup"
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
