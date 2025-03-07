import React from "react";
import { useContext, createContext, useEffect } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "../utils/contexts/CurrentUserContext";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);
  const { isLoggedIn } = createContext(currentUser);

  useEffect(() => {
    if (!isLoggedIn && currentUser) {
      <Navigate
        to="/profile"
        state={{ from: location }}
      />;
    }
    if (isLoggedIn && !currentUser) {
      //navigate("/") ;
      <Link to="/" 
      state={{ from: location }} />
    }
  }, [isLoggedIn, currentUser]);

  return children;
}

export default ProtectedRoute;
