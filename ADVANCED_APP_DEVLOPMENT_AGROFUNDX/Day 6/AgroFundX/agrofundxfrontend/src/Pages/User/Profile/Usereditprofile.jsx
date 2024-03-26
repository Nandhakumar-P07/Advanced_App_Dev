import React from "react";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import Usersidebar from "../../../Components/User/Sidebar/Usersidebar";
import { Userprofilesection } from "../../../Components/User/Profile/Userprofilesection";
export const Usereditprofile = () => {
  return (
    <>
      <div className=" ">
        <Navbar />
        <div className="xl:flex relative top-20 bg-white lg:flex lg:flex-col  gap-2  ">
          <Usersidebar />
          <Userprofilesection/>
        </div>
        <Footer />
      </div>
    </>
  );
};
