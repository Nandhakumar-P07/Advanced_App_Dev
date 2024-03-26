import React from "react";

import Adminsidebar from "../../../Components/Admin/Sidebar/Adminsidebar";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import { Admindeleteprofilesection } from "../../../Components/Admin/Profile/Admindeleteprofilesection";
import { Adminsidebardescription } from "../../../Components/Admin/Profile/Adminsidebardescription";
export const Admindeleteprofile = () => {
  return (
    <>
      <Navbar />
      <Adminsidebardescription  name="Admin delete profile"/>
      <div className="flex lg:flex-col bg-white gap-2  ">
        <Adminsidebar />
        <Admindeleteprofilesection />
      </div>
      <Footer />
    </>
  );
};
