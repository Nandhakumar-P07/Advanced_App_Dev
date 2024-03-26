import React from 'react'
import { Navbar } from '../../../Common/Navbar/Navbar';
import Adminsidebar from '../../../Components/Admin/Sidebar/Adminsidebar';
import { Adminprofilesection } from '../../../Components/Admin/Profile/Adminprofilesection';
import Footer from '../../../Common/Footer/Footer';
import { Adminsidebardescription } from '../../../Components/Admin/Profile/Adminsidebardescription';
export const Admineditprofile = () => {
  return (
    <div>
      <div className=" ">
        <Navbar />
        <Adminsidebardescription name="Admin Profile Settings"/>
        <div className="xl:flex  bg-white lg:flex lg:flex-col  gap-2  ">
          <Adminsidebar />
          <Adminprofilesection />
        </div>
        <Footer />
      </div>
    </div>
  );
}











