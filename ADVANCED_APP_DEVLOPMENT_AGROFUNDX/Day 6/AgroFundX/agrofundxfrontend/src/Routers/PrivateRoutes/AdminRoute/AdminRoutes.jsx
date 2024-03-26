import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const AdminRoutes = () => {
  const admintoken=localStorage.getItem('token')!==null;
  const role=localStorage.getItem('role')==="ADMIN";

  return admintoken && role? <Outlet/>:<Navigate to="/signin"/>


}
