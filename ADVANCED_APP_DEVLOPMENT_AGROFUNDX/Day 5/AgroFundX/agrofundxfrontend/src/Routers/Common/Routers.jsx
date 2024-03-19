import React from "react";
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

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        {/* common routes  */}
        <Routes>
          <Route path="/facialrecognition" element={<FacialRecognition/>}/>
          <Route path="/facesignin" element={<Facesignin/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<Otpverify />} />
          <Route path="/verifyface" element={<Verifyface />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route
            path="//forgotpasswordotpverification"
            element={<Forgotpasswordotpverify />}
          />

          {/* userroutes */}

          {/* <Route element={<UserRoutes />}> */}

          {/* </Route> */}

          {/* adminroutes  */}
          {/* <Route element={<AdminRoutes/>}> */}

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
