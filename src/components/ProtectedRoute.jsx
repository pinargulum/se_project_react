import React from "react";
import { useContext, createContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CurrentUserContext from "./contexts/CurrentUserContext.jsx";

 function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  
  

  

  if (!anonymous && !isLoggedIn) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
      />
    );
  }

  return children;
}
export default ProtectedRoute;