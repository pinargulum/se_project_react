import React from "react";
import { useContext, createContext, useEffect } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "../utils/contexts/CurrentUserContext";

function ProtectedRoute({ isLoggedIn, isPublic = false, children }) {
  const location = useLocation();
  
  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);
 

  if (isLoggedIn && isPublic) {
    return  <Navigate
    to="/profile"
    state={{ from: location }} replace
  />;
  }
    
    if (!isLoggedIn && !isPublic) {
      return  <Navigate
      to="/"
      state={{ from: location }} replace
    />;
    }
      
    if (!isLoggedIn) {
     return  <Navigate
      to="/"
      state={{ from: location }} replace
    />;
    }
 

  return children;
}

export default ProtectedRoute;
