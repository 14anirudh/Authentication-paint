import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/Authcontext";

function Protected({ children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;

  return <div>Protected</div>;
}

export default Protected;
