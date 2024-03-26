import React,{useEffect,useState,} from "react";
import logo from "../../Assets/logo/logo.gif";
import expresscard from "../../Assets/Images/Footer/expresscard.svg";
import mastercard from "../../Assets/Images/Footer/mastercard.svg";
import paypal from "../../Assets/Images/Footer/paypal.svg";
import visa from "../../Assets/Images/Footer/visa.svg";
import { useNavigate } from "react-router-dom";
import animation from "../../Datas/footlead.json";

import Lottie from "react-lottie";

const Footer = () => {


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [scrollTimeout, setScrollTimeout] = useState(null);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };





    const handleScroll = () => {
      clearTimeout(scrollTimeout); // Clear previous timeout
      setScrollTimeout(
        setTimeout(() => {
          // Stop animation after 500ms of no scrolling
        }, 500)
      );

      // Start animation on scroll
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);


    };
  }, [scrollTimeout]);

   const call = () => {

     window.location.href = "tel:9626209856";
   };
     const defaultOptions1 = {
       loop: true,
       autoplay: true,
       animationData: animation,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };
  const navigate = useNavigate();
  return (
    <>
      <footer className="  bg-[#18332f] h-full max-w-[100%]  bottom-0  text-white ">
        <button className="flex items-center gap-3">
          {/* <img width="30" src={logo} alt="" /> */}
          <span className="font-bold text-lg px-20  pt-32 text-[#8ba172] font-ambitextrabold">
            AgroFundX AS
          </span>
        </button>
        <section className="grid xl:grid-cols-4 lg:grid-cols-2 items-start xl:gap-32 lg:gap-16  px-20 py-12  ">
          <div className="flex flex-col gap-10">
            <ul className="text-white flex flex-col gap-3 text-lg  ">
              <li className="text-[#8ba17f] font-bold text-[15px]">Links</li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Announcements</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Who we are</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Market</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Our process</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Support</span>
              </li>
            </ul>
            <ul className="text-lg">
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span onClick={()=>navigate("/privacypolicy")} className="hover-effect">Privacy policy</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  gap-10 text-lg">
            <ul className="flex flex-col gap-3">
              <h1 className="text-[#8ba17f] font-bold text-[15px]">
                General enquiries
              </h1>
              <li className="w-fit">
                <a
                  className="hover-effect w-fit"
                  href="mailto:agrofundx@gmail.com">
                  agrofundx@gmail.com
                </a>{" "}
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h1 className="text-[#8ba17f] font-bold text-[15px]">
                Org. number
              </h1>

              <li className="w-fit">
                <span
                  className="hover:cursor-pointer hover-effect"
                  onClick={call}>
                  9626209856
                </span>
              </li>
            </ul>
          </div>
          <div className=" text-lg">
            <ul className="flex flex-col gap-1.5">
              <h1 className="text-[#8ba17f] font-bold text-[15px]">Address</h1>{" "}
              <li>Kovaipudur 2424</li>
              <li>7271 Coimbatore</li>
              <li>India</li>
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-3">
              <h1 className="text-[#8ba17f] font-bold text-[15px]">
                Sites and social media
              </h1>{" "}
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">LinkedIn</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Facebook</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Whatsapp</span>
              </li>
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-3 -stroke-green-boulogne"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Instagram</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h1 className="text-[#8ba17f] font-bold text-[15px]">
                A part of
              </h1>{" "}
              <li className="flex items-center">
                <span>
                  <svg
                    class="inline-block relative  w-3 h-3 mr-2 -stroke-green-boulogne transform -rotate-45"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <g stroke="#8BA17F">
                        <path d="M4.534.93a.189.189 0 000 .267l2.614 2.614H.397a.189.189 0 100 .378h6.75l-2.88 2.88a.189.189 0 10.267.268l3.203-3.204a.189.189 0 000-.266L4.801.93a.189.189 0 00-.267 0"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hover-effect">Fundplus</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex justify-between xl:px-32 mt-10   items-end   border-bordergray   ">
          <div className="">
            <p className="text-[12px]">Design:Agrofundx</p>
          </div>
          <div className="relative bottom-0 ">
            <Lottie
              options={defaultOptions1}
              height={screenHeight * 0.35}
              width={screenWidth * 0.28}
            />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
