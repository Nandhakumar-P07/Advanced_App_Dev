import React from "react";
import { Navbar } from "../../../Common/Navbar/Navbar";
import AdminDashboard from "../../../Components/Admin/Dashboard/AdminDashboard";
import ApprovalRequests from "../../../Components/Admin/Approval/ApprovalRequests";

export const Userapprovalrequest = () => {
  return (
    <div>
      <Navbar />
      <AdminDashboard />
      <ApprovalRequests />
    </div>
  );
};
