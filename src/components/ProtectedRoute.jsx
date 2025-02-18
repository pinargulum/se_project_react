import React from "react";
import { useContext, createContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import CurrentUserContext from "./contexts/CurrentUserContext";

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
  
  if (isLoggedIn && currentUser) {
    return(
    <Navigate
      to="profile"
      state={{ from: location }}
    />
    )
  }

  if (isLoggedIn && currentUser) {
    return (
      <div>
        <div>Profile</div>
        <p>Current Path: {location.pathname}</p>
      </div>
    );
  }
  

    




 
   /*
  if (!isLoggedIn && !currentUser) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
      />
    );
  }
*/
  return children;
}

export default ProtectedRoute;
