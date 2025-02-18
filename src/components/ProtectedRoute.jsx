import React from "react";
import { useContext, createContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import CurrentUserContext from "./contexts/CurrentUserContext";

export default function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);

  if (currentUser && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (isLoggedIn) {
    <Navigate to="/profile"
    state={{ from: location }}
    />;
  }
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
      />
    );
  }

  return children;
}
