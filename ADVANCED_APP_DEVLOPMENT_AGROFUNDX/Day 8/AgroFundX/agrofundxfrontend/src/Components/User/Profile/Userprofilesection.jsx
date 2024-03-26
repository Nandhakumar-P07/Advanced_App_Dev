import React, { useState } from "react";

import Services from "../../../Service/Services";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../../../useContext/UseStates";
export const Userprofilesection = () => {

  const {user,updateUser}=useUser();

  const [userData, setUserData] = useState({
    gender: user?.gender || "",
    date: user?.date || "",
    location: user?.location || "",
    pincode: user?.pincode || "",
    website: user?.website || "",
    country: user?.country || "",
    mobileNumber: user?.mobileNumber || "",
    biographical: user?.biographical || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      gender: userData.gender || user?.gender,
      date: userData.date || user?.date,
      location: userData.location || user?.location,
      pincode: userData.pincode || user?.pincode,
      website: userData.website || user?.website,
      country: userData.country || user?.country,
      mobileNumber: userData.mobileNumber || user?.mobileNumber,
      biographical: userData.biographical || user?.biographical,
      withDrawalAmount: user?.withDrawalAmount,
    };
    console.log(formData);

    await Services.updateUserById(formData)
      .then((res) => {
        toast.custom((t) => (
          <div
            className={`bg-[#55ba45] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i class="fa-solid fa-circle-check"></i>{" "}
              </span>
              <div>
                <span className=" ">
                  Details updated successfully.Please check your details!
                </span>
              </div>
            </div>
          </div>
        ));
        console.log(formData);
      })
      .catch((err) => {
        toast.custom((t) => (
          <div
            className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i class="fa-solid text-xl fa-circle-xmark"></i>
              </span>
              <div>
                <span className="">
                  Could not update details.Please try again later!
                </span>
              </div>
            </div>
          </div>
        ));
      });
  };

  return (
    <main className="xl:h-full  p-5 xl:w-full  ">
      <div className="pt-10 text-darkteal">
        <p className="text-2xl font-ambitextrabold font-extrabold text-darkteal ">
          Edit profile
        </p>
      </div>
      <section className="text-darkteal xl:w-fit  lg:w-full flex flex-col gap-3 mt-5">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex lg:flex-col xl:items-center  lg:w-full xl:w-fit gap-5">
            <div className="flex-col flex gap-2">
              <div className="flex text-sm">
                <span className="font-bold font-productsansb">First Name</span>
                <span className="text-red">*</span>
              </div>
              <input
                name="firstName"
                id="firstName"
                onChange={handleInputChange}
                value={user?.firstName}
                type="text"
                className=" focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 py-2.5 border-[1px] w-[20em] lg:w-full rounded-lg border-lightgray2"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex-col flex gap-2">
              <div className="flex text-sm">
                <span className="font-bold font-productsansb">Last Name</span>
                <span className="text-red">*</span>
              </div>
              <input
                name="lastName"
                id="lastName"
                type="text"
                onChange={handleInputChange}
                value={user?.lastName}
                className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px] xl:w-[20em] rounded-lg lg:w-full border-lightgray2"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="flex lg:flex-col xl:items-center lg:w-full w-fit gap-5">
            <div className="flex-col flex gap-2">
              <div className="flex text-sm">
                <span className="font-bold font-productsansb">
                  Display Name
                </span>
                <span className="text-red">*</span>
              </div>
              <input
                value={user?.firstName + " " + user?.lastName}
                onChange={handleInputChange}
                className=" focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 py-2.5 border-[1px] w-[20em] lg:w-full rounded-lg border-lightgray2"
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex-col xl:w-fit flex gap-2">
              <div className="flex text-sm">
                <span className="font-bold font-productsansb">Gender</span>
                <span className="text-red">*</span>
              </div>
              <select
                name="gender"
                id="gender"
                onChange={handleInputChange}
                className="focus:outline-0 focus:focus:border-brightgreen  p-2.5  border-[1px] w-[20em] rounded-lg lg:w-full border-lightgray2"
                placeholder="">
                <option value={user?.gender}>{user?.gender}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Email</span>
              <span className="text-red">*</span>
            </div>
            <input
              value={user?.email}
              onChange={handleInputChange}
              name="email"
              id="id"
              className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Birthday</span>
              <span className="text-red">*</span>
            </div>
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              id="date"
              value={userData?.date}
              className="focus:outline-0  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Location</span>
              <span className="text-red">*</span>
            </div>
            <input
              name="location"
              id="location"
              value={userData?.location}
              onChange={handleInputChange}
              className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
              placeholder="Enter your address"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Country</span>
              <span className="text-red">*</span>
            </div>
            <select
              onChange={handleInputChange}
              name="country"
              id="country"
              className="focus:outline-0  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
              placeholder="">
              <option value={user?.country}>{user?.country}</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Phone Number</span>
              <span className="text-red">*</span>
            </div>
            <input
              name="mobileNumber"
              id="mobileNumber"
              min="1"
              max="9999999990"
              type="number"
              value={userData?.mobileNumber}
              onChange={handleInputChange}
              className="focus:outline-0  focus:focus:border-brightgreen px-4   p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
              placeholder="+91"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Pincode</span>
              <span className="text-red">*</span>
            </div>
            <input
              name="pincode"
              id="pincode"
              maxLength="6"
              max="999999"
              type="number"
              value={userData?.pincode}
              onChange={handleInputChange}
              className="focus:outline-0  focus:focus:border-brightgreen px-4   p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
              placeholder="Enter your pincode"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Website</span>
              <span className="text-red">*</span>
            </div>
            <input
              name="website"
              onChange={handleInputChange}
              id="website"
              type="text"
              value={userData?.website}
              className="focus:outline-0    focus:focus:border-brightgreen px-4 p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
              placeholder="http://"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Biographical</span>
              <span className="text-red">*</span>
            </div>
            <textarea
              name="biographical"
              id="biographical"
              value={userData?.biographical}
              onChange={handleInputChange}
              className="focus:outline-0  resize-none   focus:focus:border-brightgreen px-4 p-2.5 border-[1px]  w-[41.5em] lg:w-full h-[7.5em] rounded-lg border-lightgray2"
              placeholder="Introduce about yourself..."
            />
          </div>
          <div className="flex justify-end mt-2 mb-24">
            <button className="bg-[#8ba17f] rounded-md flex gap-3 text-white px-8 py-2">
              <span>Save Profile</span>
              <span>
                <i class="fa-solid fa-floppy-disk"></i>
              </span>
            </button>
          </div>
        </form>
      </section>
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />{" "}
    </main>
  );
};
