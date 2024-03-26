import React,{useState,useEffect} from "react";
import logo from "../../Assets/logo/logo.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useUser } from "../../useContext/UseStates";
import Services from "../../Service/Services";
import profile from "../../Assets/Images/nav/profile.png";
export const Navbar = () => {
  const isAdmin = localStorage.getItem("role") === "ADMIN";
  const isUSER = localStorage.getItem("role") === "USER";
  const { user, updateUser } = useUser();
  const [userId, setUserId] = useState(localStorage.getItem("userid") || null);


  const navigate = useNavigate();
  const svgStyle = {
    fill: "#8ba17f", // Set the fill color here
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("role");
    updateUser("");
    navigate("/signin");
  };

  const location=useLocation();
  const isdashboard =
    location.pathname === "/dashboard" ||
    location.pathname === "/myloans" ||
    location.pathname === "/admindashboard" ||
    location.pathname === "/approvalrequests" ||
    location.pathname === "/privacypolicy" ||
    location.pathname === "/applyloan" ||
    location.pathname === "/usereditprofile" ||
    location.pathname === "/usercardpaymentdetails"||
    location.pathname==="/usereditpassword"||
    location.pathname==="/userdeleteprofile"||
    location.pathname==="/admineditprofile"||
    location.pathname==="/admineditpassword"||
    location.pathname==="/admindeleteprofile"||
    location.pathname==="/finance";

      useEffect(() => {
        const userId = localStorage.getItem("userid");
        if (userId) {
          Services.getUser(userId)
            .then((res) => {
              updateUser(res.data);
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
              // setError(true);
              // setErrorMessage("Failed to retrieve user data");
            });
        }
      }, [userId]);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#18332f] z-50">
        <header
          className={` px-20 ${
            isdashboard ? "bg-white p-5" : "bg-[#18332f] p-10"
          }  w-full  flex items-center justify-around `}>
          <figure className="text-[#8ba17f] flex  items-center">
            <img className="w-10" src={logo} alt="" />
            <p
              onClick={() => navigate("/home")}
              className="text-2xl font-ambitextrabold font-extrabold hover:cursor-pointer wavy">
              <span style={{ "--i": 1 }}>A</span>
              <span style={{ "--i": 2 }}>g</span>
              <span style={{ "--i": 3 }}>r</span>
              <span style={{ "--i": 4 }}>o</span>
              <span style={{ "--i": 5 }}>F</span>
              <span style={{ "--i": 6 }}>u</span>
              <span style={{ "--i": 7 }}>n</span>
              <span style={{ "--i": 8 }}>d</span>
              <span style={{ "--i": 9 }}>X</span>
            </p>
          </figure>

          <div
            className={` flex xl:w-[34rem] ${
              isdashboard ? "text-black" : "text-white"
            } items-center justify-between `}>
            <span className="hover-effect" onClick={() => navigate("/market")}>
              Market
            </span>
            <span className="hover-effect" onClick={() => navigate("/shop")}>
              Shop
            </span>
            {/* <span
              className="hover-effect"
              onClick={() => navigate("/community")}>
              Community
            </span> */}
            <span className="hover-effect" onClick={() => navigate("/finance")}>
              Finance
            </span>
            <span onClick={() => navigate("/about")} className="hover-effect">
              Who we are
            </span>
            <span onClick={() => navigate("/contact")} className="hover-effect">
              Contact
            </span>
          </div>
          <div className="flex items-center justify-around gap-10">
            <span className="flex items-center gap-3.5">
              <span className="text-white hover-effect mt-1">Search</span>
              <span className="">
                <svg
                  class="inline-block   w-[18px] relative theme-fill-farms"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18.3 18.3"
                  style={svgStyle}>
                  <path
                    class="st0"
                    d="M6.6 13.2C3 13.2 0 10.3 0 6.6S3 0 6.6 0s6.6 3 6.6 6.6-2.9 6.6-6.6 6.6zM6.6 2C4.1 2 2 4.1 2 6.6s2.1 4.6 4.6 4.6 4.6-2.1 4.6-4.6S9.2 2 6.6 2z"></path>
                  <path
                    class="st0"
                    d="M17.3 18.3c-.3 0-.5-.1-.7-.3l-3.9-3.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.9 3.9c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
                </svg>
              </span>
            </span>

            <div className="flex lg:hidden items-center gap-5">
              {user ? (
                <>
                  <Menu placement="bottom-end">
                    <MenuHandler>
                      <button className="text-darkteal outline-0  rounded-lg p-1 gap-3 flex items-center ">
                        <span>
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                        <span className="text-[#8ba17f]">{user?.firstName}</span>
                        {user?.profileImage ? (
                          <figure className="w-fit  ">
                            <img
                              className="w-8 h-8 rounded-full "
                              src={user?.profileImage}
                              alt=""
                            />
                          </figure>
                        ) : (
                          <figure className="w-fit  ">
                            <img
                              className="w-8 h-8 rounded-full "
                              src={profile}
                              alt=""
                            />
                          </figure>
                        )}
                      </button>
                    </MenuHandler>
                    {isAdmin ? (
                      <MenuList className="border-none cursor-pointer font-ambitregular text-teal w-[18em]   rounded-lg flex flex-col gap-1 bg-white items-start shadow-lg   ">
                        <p
                          onClick={() => navigate("/admindashboard")}
                          className="hover:outline-0 hover:bg-hoverteal  text-[15px] flex items-center gap-3 rounded-md px-2 py-2 w-full ">
                          <i class="fa-solid fa-cloud"></i>
                          <span className=" "> Dashboard</span>
                        </p>
                        <p
                          onClick={() => navigate("/admincreatecampaign")}
                          className="hover:outline-0 hover:bg-hoverteal text-[15px] rounded-md px-2 py-2 w-full  flex items-center gap-3 ">
                          <i class="fa-solid fa-play"></i>
                          <span className="">Fundplus Start a campaign</span>
                        </p>
                        <p
                          onClick={() => navigate("/admindashboard")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3 ">
                          <i class="fa-solid fa-folder"></i>
                          <span className="">Admin Campaigns</span>
                        </p>
                        <p
                          onClick={() => navigate("/admincampaignapproval")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-square-check"></i>
                          <span className="">Users Campaign approval</span>
                        </p>

                        <p
                          onClick={() => navigate("/userslist")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-2  ">
                          <p>
                            <i class="fa-solid relative right-1   text-darkteal fa-users-line"></i>{" "}
                          </p>
                          <span className="">Users list</span>
                        </p>
                        <p
                          onClick={() => navigate("/admineditprofile")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-user"></i>
                          <span className="">Profile Settings</span>
                        </p>
                        <p
                          onClick={handleLogout}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-right-from-bracket"></i>
                          <span className="">Logout</span>
                        </p>
                      </MenuList>
                    ) : (
                      <MenuList className="border-none  font-ambitregular cursor-pointer text-teal w-[15em]  rounded-lg flex flex-col gap-1 bg-white items-start shadow-lg   ">
                        <p
                          onClick={() => navigate("/dashboard")}
                          className="hover:outline-0 hover:bg-hoverteal  text-[15px] flex items-center gap-3 rounded-md px-2 py-2 w-full ">
                          <i class="fa-solid fa-cloud"></i>
                          <span className=" ">Dashboard</span>
                        </p>
                        <p
                          onClick={() => navigate("/createcampaign")}
                          className="hover:outline-0 hover:bg-hoverteal text-[15px] rounded-md px-2 py-2 w-full  flex items-center gap-3 ">
                          <i class="fa-solid fa-money-check-dollar"></i>{" "}
                          <span className="">Apply loan</span>
                        </p>
                        <p
                          onClick={() => navigate("/dashboard")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3 ">
                          <i class="fa-solid fa-wheat-awn"></i>{" "}
                          <span className="">My Shopping</span>
                        </p>
                        <p
                          onClick={() => navigate("/usercampaigndonated")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-handshake"></i>{" "}
                          <span className="">My loans</span>
                        </p>
                        {/* <p className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-droplet"></i>
                          <span className="">Blood Donated</span>
                        </p> */}
                        <p
                          onClick={() => navigate("/userbookmarks")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-bookmark"></i>
                          <span className="">My Bookmarks</span>
                        </p>
                        <p
                          onClick={() => navigate("/usereditprofile")}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-user"></i>
                          <span className="">Profile Settings</span>
                        </p>
                        <p
                          onClick={handleLogout}
                          className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                          <i class="fa-solid fa-right-from-bracket"></i>
                          <span className="">Logout</span>
                        </p>
                      </MenuList>
                    )}
                  </Menu>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/signin")}
                    className="text-white  flex items-center gap-2">
                    <span className="hover-effect mt-1">SignIn</span>
                    <svg
                      class="inline-block relative  w-3 h-3  -stroke-green-boulogne transform -rotate-45"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      xmlns="http://www.w3.org/2000/svg">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linejoin="round">
                        <g stroke="#8BA17F">
                          <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-white  flex items-center gap-2">
                    <span className="hover-effect mt-1">Signup</span>
                    <svg
                      class="inline-block relative  w-3 h-3  -stroke-green-boulogne transform -rotate-45"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      xmlns="http://www.w3.org/2000/svg">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linejoin="round">
                        <g stroke="#8BA17F">
                          <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};
