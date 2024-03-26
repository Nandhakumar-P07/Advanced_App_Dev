import React from "react";
import profile from "../../../Assets/Images/nav/profile.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../useContext/UseStates";
import { MdRequestQuote } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TbUserEdit } from "react-icons/tb";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  return (
    <>
      <main className="">
        <aside className=" lg:hidden dash  mt-20 h-screen overflow-y-scroll bg-white  fixed  w-[20em] ">
          <div
            className="px-7 pt-[4rem]

          ">
            {/* <div className="flex gap-4 cursor-pointer border-b-2 border-lightwhite p-3 w-full ">
              {user?.profileImage ? (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={user?.profileImage}
                    alt=""
                  />
                </figure>
              ) : (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={profile}
                    alt=""
                  />
                </figure>
              )}
              <div>
                <p className="text-sm  font-bold text-black">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[#779567] text-sm">IN</p>
              </div>
            </div> */}
<div className="flex flex-col gap-2 pb-3">
<div className="flex items-center gap-3"> <p className="text-[#8094ae] text-lg"> Pending requests :  </p><p className="font-ambitbold"> 35</p></div>
<div className="flex items-center gap-[4.3rem]"> <p className="text-[#8094ae] text-lg"> New Users :  </p><p className="font-ambitbold"> 15</p></div>
</div>
            <div className="flex px-3 flex-col gap-2 cursor-pointer ">
              <div
                onClick={() => navigate("/approvalrequests")}
                className="flex rounded-md bg-hoverteal hover:duration-300 hover:bg-hoverteal hover:text-[#779567] text-black items-center gap-3 p-3  ">
<MdRequestQuote className="w-[1.5rem] h-[1.5rem] text-darkteal2"  />
                <p className="font-medium ">Approval Requests</p>
              </div>
              <div
                onClick={() => navigate("/myloans")}
                className="flex rounded-md p-3 hover:duration-300 hover:bg-hoverteal hover:text-[#779567] text-black items-center gap-3 ">
<i class="fa-solid fa-money-bill-wheat text-xl text-darkteal2"></i>
                <p className="font-medium ">Manage subsidy</p>
              </div>

              <div
                onClick={() => navigate("/interests")}
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <PiUserListBold className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">User lists</p>
              </div>
              <div
                onClick={() => navigate("/userbookmarks")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <FaHandshakeSimple className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">User Transactions</p>
              </div>
              <div
                onClick={() => navigate("/userwithdrawals")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black  items-center gap-3 p-3">
<i class="fa-solid fa-hand-holding-dollar text-xl text-darkteal2"></i>
                <p className="font-medium ">Intrests received</p>
              </div>
              <div
                onClick={() => navigate("/userdonations")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <i class="fa-solid fa-money-bill-trend-up text-xl text-darkteal2"></i>
                <p className="font-medium ">Revenue generated</p>
              </div>
              <div
                onClick={() => navigate("/usertransactionhistory")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <i class="fa-solid fa-desktop text-xl text-darkteal2"></i>
                <p className="font-medium ">Manage webinars</p>
              </div>
              <div
                onClick={() => navigate("/estimatedrepayments")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <i class="fa-solid fa-hands-holding-circle text-xl text-darkteal2"></i>
                <p className="font-medium ">Insurance details</p>
              </div>

              <div
                onClick={() => navigate("/usereditprofile")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <TbUserEdit className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium">Edit profile</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default AdminDashboard;
