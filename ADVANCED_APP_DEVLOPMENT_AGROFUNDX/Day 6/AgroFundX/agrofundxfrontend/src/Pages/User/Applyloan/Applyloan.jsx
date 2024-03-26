import React from 'react'
import { Navbar } from "../../../Common/Navbar/Navbar";
import Dashboardsection from "../../../Components/User/Dashboard/DashboardSection";
import Applyloansection from "../../../Components/User/Applyloan/ApplyloanSection";

const Applyloan = () => {
  return (
    <div><Navbar />
    <Dashboardsection />
    <Applyloansection /></div>
  )
}

export default Applyloan