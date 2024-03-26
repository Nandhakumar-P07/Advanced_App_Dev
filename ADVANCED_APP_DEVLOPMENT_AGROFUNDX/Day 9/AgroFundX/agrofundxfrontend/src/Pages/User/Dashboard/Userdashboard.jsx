import React from "react";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Dashboardsection from "../../../Components/User/Dashboard/DashboardSection";
import { Impactsection } from "../../../Components/User/Impact/Impactsection";

export const Userdashboard = () => {
  return (
    <>
      <Navbar />
      <Dashboardsection />
      <Impactsection />
    </>
  );
};
