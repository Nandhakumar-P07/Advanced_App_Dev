import React from "react";
import profile from "../../../Assets/Images/nav/profile.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../useContext/UseStates";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { CiCalculator2 } from "react-icons/ci";
import { IoBookmarks } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";

const Dashboardsection = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  return (
    <>
      <main className="">
        <aside className=" lg:hidden dash z-10 mt-20 h-screen overflow-y-scroll bg-white  fixed  w-[20em] ">
          <div
            className="px-7

          ">
            {/* <div className="flex gap-4 cursor-pointer border-b-2 border-lightwhite p-3 w-full ">
              {user?.profileImage ? (
                <figure className="w-fit  ">
                  <i Fmg
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
            <div className=" flex flex-col gap-3 pb-4">
              <div className="">
                <p className="text-[#8094ae] text-sm">TOTAL LOAN</p>
                <p className="text-xl text-lightteal">45,750.385 INR</p>
              </div>
              <div className="flex justify-between">
                {" "}
                <p>INTEREST</p> <p>15k</p>
              </div>
              <div className="flex justify-evenly pb-3">
                <p className="px-4 py-2 bg-darkteal2 text-white rounded-xl">
                  Details
                </p>{" "}
                <p className="px-4 py-2 border border-darkteal2 hover:bg-darkteal2 hover:text-white text-darkteal2 rounded-xl"
                onClick={()=> navigate("/applyloan")}>
                  Apply Loan
                </p>
              </div>
            </div>
            <div><p className="text-[#8094ae] text-sm"> MENU</p></div>
            <div className="flex px-3 flex-col gap-2 cursor-pointer ">
              <div
                onClick={() => navigate("/dashboard")}
                className="flex rounded-md bg-hoverteal hover:duration-300 hover:bg-hoverteal hover:text-[#779567] text-black items-center gap-3 p-3">
                  <MdOutlineDashboard className="w-[1.5rem] h-[1.5rem] text-darkteal2" />
                <p className="font-medium ">Dashboard</p>
              </div>
              <div
                onClick={() => navigate("/myloans")}
                className="flex rounded-md hover:duration-300 hover:bg-hoverteal hover:text-[#779567] text-black items-end gap-3 p-3">
<AiOutlineDollar className="w-[1.5rem] h-[1.5rem] text-darkteal2" />
                <p className="font-medium">My loans</p>
              </div>

              <div
                onClick={() => navigate("/interests")}
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
<FaCalendarAlt className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">Interest </p>
              </div>
              <div
                onClick={() => navigate("/userbookmarks")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3   p-3">
                <IoBookmarks className="w-[1.5rem] h-[1.5rem] text-darkteal2" />
                <p className="font-medium ">My Bookmarks</p>
              </div>
              <div
                onClick={() => navigate("/userwithdrawals")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black  items-center gap-3 p-3">
<BiMoneyWithdraw className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">Withdrawals</p>
              </div>
              <div
                onClick={() => navigate("/userdonations")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <CiCalculator2 className="w-[1.5rem] h-[1.5rem] text-darkteal2" />
                <p className="font-medium ">EMI Calculater</p>
              </div>
              <div
                onClick={() => navigate("/usertransactionhistory")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <FaHistory className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">Transaction history</p>
              </div>
              <div
                onClick={() => navigate("/estimatedrepayments")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
                <MdPayment className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">Estimated Repayments</p>
              </div>

              <div
                onClick={() => navigate("/usereditprofile")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-[#779567] text-black items-center gap-3 p-3">
<TbUserEdit className="w-[1.5rem] h-[1.5rem] text-darkteal2"/>
                <p className="font-medium ">Edit profile</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Dashboardsection;
