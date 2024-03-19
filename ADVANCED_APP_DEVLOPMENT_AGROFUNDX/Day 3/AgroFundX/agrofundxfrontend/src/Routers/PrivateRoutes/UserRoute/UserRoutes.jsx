import React from "react";

import { Navigate, Outlet } from "react-router-dom";

export const UserRoutes = () => {
  const usertoken = localStorage.getItem("token") !== null;
  const role = localStorage.getItem("role") === "USER";

  return usertoken && role ? <Outlet /> : <Navigate to="/signin" />;
};
