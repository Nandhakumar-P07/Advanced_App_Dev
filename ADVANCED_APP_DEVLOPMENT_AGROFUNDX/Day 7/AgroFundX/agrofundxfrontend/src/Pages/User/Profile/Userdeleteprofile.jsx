import React from "react";

import Usersidebar from "../../../Components/User/Sidebar/Usersidebar";
import { Userdeleteprofilesection } from "../../../Components/User/Profile/Userdeleteprofilesection";

import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";

export const Userdeleteprofile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex lg:flex-col  relative top-20 bg-white gap-12  ">
        <Usersidebar />
        <Userdeleteprofilesection />
      </div>
      <Footer />
    </div>
  );
};
