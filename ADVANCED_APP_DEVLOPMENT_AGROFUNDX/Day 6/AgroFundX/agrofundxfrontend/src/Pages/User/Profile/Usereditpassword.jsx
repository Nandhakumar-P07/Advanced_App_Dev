import React from "react";
import { Navbar } from "../../../Common/Navbar/Navbar";
import Footer from "../../../Common/Footer/Footer";
import Usersidebar from "../../../Components/User/Sidebar/Usersidebar";
import { Usereditpasswordsection } from "../../../Components/User/Profile/Usereditpasswordsection";

export const Usereditpassword = () => {
  return (
    <>
      <Navbar />
      <div className="flex relative top-20 bg-white lg:flex-col gap-2  ">
        <Usersidebar />
        <Usereditpasswordsection />
      </div>
      <Footer />
    </>
  );
};
