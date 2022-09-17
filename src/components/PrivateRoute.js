import React from "react";
import { useAuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
