import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

const otpContext = createContext();

const verifyemailContext = createContext();

const userfaceimageContext = createContext();

export function useUserImage() {
  return useContext(userfaceimageContext);
}

export function useUser() {
  return useContext(userContext);
}

export function useVerifyEmail() {
  return useContext(verifyemailContext);
}

export function useOtp() {
  return useContext(otpContext);
}

export const UseStates = ({ children }) => {
  const [userfaceimage, setUserfaceimage] = useState("");
  const [user, setUser] = useState({});
  const [otp, setOtp] = useState("");
  const [verifyemail, setVerifyemail] = useState("");

  function updateUser(newemail) {
    setUser(newemail);
  }

  function updateUserFaceImage(newimage) {
    setUserfaceimage(newimage);
  }

  function updateverifyEmail(newemail) {
    setVerifyemail(newemail);
  }

  function updateOtp(newotp) {
    setOtp(newotp);
  }

  const userContextValue = {
    user,
    updateUser,
  };

  const userImageContextValue = {
    userfaceimage,
    updateUserFaceImage,
  };

  const otpContextValue = {
    otp,
    updateOtp,
  };
  const emailContextValue = {
    verifyemail,
    updateverifyEmail,
  };
  return (
    <userContext.Provider value={userContextValue}>
      <userfaceimageContext.Provider value={userImageContextValue}>
        <otpContext.Provider value={otpContextValue}>
          <verifyemailContext.Provider value={emailContextValue}>
            {children}
          </verifyemailContext.Provider>
        </otpContext.Provider>
      </userfaceimageContext.Provider>
    </userContext.Provider>
  );
};
