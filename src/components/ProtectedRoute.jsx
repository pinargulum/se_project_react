import React from "react";
import { useContext, createContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "../utils/contexts/CurrentUserContext";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);
  const { isLoggedIn } = createContext(currentUser);

  if (currentUser && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (isLoggedIn && currentUser) {
    <Navigate
      to="/"
      state={{ from: location }}
    />;
  }

  if (!isLoggedIn && !currentUser) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
      />
    );
  }
  

return children;
}

export default ProtectedRoute;
