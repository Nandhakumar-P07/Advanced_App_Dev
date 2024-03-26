import React from "react";

import Adminsidebar from "../../../Components/Admin/Sidebar/Adminsidebar";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import { Admineditpasswordsection } from "../../../Components/Admin/Profile/Admineditpasswordsection";
import { Adminsidebardescription } from "../../../Components/Admin/Profile/Adminsidebardescription";
export const Admineditpassword = () => {
  return (
    <>
      <Navbar />
      <Adminsidebardescription name="Admin edit password"/>
      <div className="flex lg:flex-col bg-white gap-2  ">
        <Adminsidebar />
        <Admineditpasswordsection />
      </div>
      <Footer />
    </>
  );
};
