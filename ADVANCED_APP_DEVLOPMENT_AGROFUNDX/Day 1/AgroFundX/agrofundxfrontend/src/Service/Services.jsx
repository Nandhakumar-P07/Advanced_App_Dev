import { Auth, UserApi, AdminApi ,cloudinary} from "./axios";

class Services {
  // authentication services

  SendOtp(email, name) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("name", name);
    return Auth.post("/signup/sendotp", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  sendVerifyOtp(email) {
    const requestdata = new FormData();
    requestdata.append("email", email);
    return Auth.post("/verifyemail/sendotp", requestdata, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  UserSignup(user) {
    return Auth.post("/usersignup", user);
  }
  UserLogin(email, password) {
    return Auth.post("/userlogin", { email: email, password: password });
  }

  userUpdateImage(email, userImage) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("userImage", userImage);
    return Auth.put("/uploaduserfaceimage", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  uploadCloudinary(imageData)
  {
    return cloudinary.post("/image/upload",imageData);

  }

  getUserFaceImage(email)
  {
    return Auth.get(`/usergetfaceimage/${email}`);
  }

  userUpdateProfileImage(email, userProfileImage) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("userProfileImage", userProfileImage);
    return UserApi.put("/uploaduserprofileimage", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}


export default new Services();