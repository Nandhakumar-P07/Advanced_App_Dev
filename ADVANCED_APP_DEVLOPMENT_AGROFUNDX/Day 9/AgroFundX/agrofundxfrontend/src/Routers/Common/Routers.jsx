import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../../Auth/Signin/SignIn";
import { UserRoutes } from "../PrivateRoutes/UserRoute/UserRoutes";
import { AdminRoutes } from "../PrivateRoutes/AdminRoute/AdminRoutes";
import Signup from "../../Auth/Signup/Signup";
import Otpverify from "../../Auth/Otpverify/Otpverify";
import Verifyface from "../../Auth/VerifyFace/Verifyface";
import Forgotpassword from "../../Auth/Forgotpassword/Forgotpassword";
import Forgotpasswordotpverify from "../../Auth/Forgotpasswordotpverify/Forgotpasswordotpverify";
import Facesignin from "../../Auth/FaceSignin/Facesignin";
import FacialRecognition from "../../Auth/Test/FacialRecognition";
import { Contact } from "../../Pages/Contact/Contact";
import { Userdashboard } from "../../Pages/User/Dashboard/Userdashboard";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Market from "../../Pages/Market/Market";
import Shop from "../../Pages/Shop/Shop";
import Termsandconditions from "../../Pages/TermsandConditions/TermsandConditions";
import { Loan } from "../../Pages/User/loan/Loan";
import Finance from "../../Pages/Finance/Finance";
import { Dashboard } from "../../Pages/Admin/Dashboard";
import { Userapprovalrequest } from "../../Pages/Admin/Approval/Userapprovalrequest";
import loader from "../../Assets/loader/loader.gif";
import Privacypolicy from "../../Pages/PrivacyPolicy/Privacypolicy";
import Applyloan from "../../Pages/User/Applyloan/Applyloan";
import { Usereditprofile } from "../../Pages/User/Profile/Usereditprofile";
import { Usereditcard } from "../../Pages/User/Profile/Usereditcard";
import { Usereditpassword } from "../../Pages/User/Profile/Usereditpassword";
import { Userdeleteprofile } from "../../Pages/User/Profile/Userdeleteprofile";
import { Admineditpassword } from "../../Pages/Admin/Profile/Admineditpassword";
import { Admindeleteprofile } from "../../Pages/Admin/Profile/Admindeleteprofile";
import { Admineditprofile } from "../../Pages/Admin/Profile/Admineditprofile";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        {/* common routes  */}
        <Routes>
          <Route path="/facialrecognition" element={<FacialRecognition />} />
          <Route path="/facesignin" element={<Facesignin />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<Otpverify />} />
          <Route path="/verifyface" element={<Verifyface />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route
            path="//forgotpasswordotpverification"
            element={<Forgotpasswordotpverify />}
          />
          <Route
            path="/home"
            element={
              <Suspense
                fallback={
                  <div className="w-screen h-screen grid place-content-center">
                    <img src={loader} alt="" />
                  </div>
                }>
                <Home />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/market" element={<Market />} />
          <Route path="/terms" element={<Termsandconditions />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/admindashboard" element={<Dashboard />} />
          <Route path="/applyloan" element={<Applyloan />} />

          {/* userroutes */}
          <Route path="/dashboard" element={<Userdashboard />} />

          <Route element={<UserRoutes />}>
            <Route path="/myloans" element={<Loan />} />
            <Route path="/usereditprofile" element={<Usereditprofile />} />
            <Route path="/usercardpaymentdetails" element={<Usereditcard />} />
            <Route path="/usereditpassword" element={<Usereditpassword />} />
            <Route path="/userdeleteprofile" element={<Userdeleteprofile />} />
            {/* <Route path="/userimpacts" element={<Impact/>}/> */}
          </Route>

          {/* adminroutes  */}
          <Route element={<AdminRoutes />}>
            <Route path="/admineditprofile" element={<Admineditprofile />} />
            <Route path="/admineditpassword" element={<Admineditpassword />} />
            <Route
              path="/admindeleteprofile"
              element={<Admindeleteprofile />}
            />
            <Route path="/approvalrequests" element={<Userapprovalrequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
