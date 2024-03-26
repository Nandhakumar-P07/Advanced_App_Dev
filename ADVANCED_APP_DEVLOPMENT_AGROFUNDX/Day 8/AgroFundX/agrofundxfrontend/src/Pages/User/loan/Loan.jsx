import React from "react";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import { Userloansection } from "../../../Components/User/loan/Userloansection";
import Dashboardsection from "../../../Components/User/Dashboard/DashboardSection";

export const Loan = () => {
  return (
    <>
      <Navbar />
      <Dashboardsection/>
      <Userloansection/>

      {/* <Footer /> */}
    </>
  );
};
