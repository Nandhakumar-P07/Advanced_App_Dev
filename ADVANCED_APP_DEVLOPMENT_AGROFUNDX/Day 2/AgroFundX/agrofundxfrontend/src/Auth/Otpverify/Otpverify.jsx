import React, { useEffect, useState } from "react";
import { TbAlertHexagon } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo/logo.gif";
import Services from "../../Service/Services";
import { useUser, useOtp } from "../../useContext/UseStates";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import "../../Assets/Styles/App.css";
const Otpverify = () => {
  const isEmail = true;

  //timer

  const [timeremaining, setTimeremaining] = useState(90);

  const minutes = Math.floor(timeremaining / 60);
  const seconds = timeremaining % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  useEffect(() => {
    const timeinterval = setInterval(() => {
      setTimeremaining((prev) => prev>0? prev-1:0);
    }, 1000);

      if (timeremaining === 0) {
        clearInterval(timeinterval);
      }
    return () => clearInterval(timeinterval);
  }, [timeremaining]);

  useEffect(() => {
    if (timeremaining === 0) {
      updateOtp(0); // Assuming updateOtp is a function to update OTP
    }
  }, [timeremaining]); // Adding timeremaining as a dependency


  const { otp, updateOtp } = useOtp();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, updateUser } = useUser();
  const [loader, setLoader] = useState(true);
  const [successmessage, setSuccessmessage] = useState(
    ` Welcome to our AgroFundX ${user.firstName}`
  );

  const [errormessage, setErrormessage] = useState("Please enter valid otp");

  const [inputvalues, setInputvalues] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, element, backspace) => {
    if (backspace) {
      const updatedValues = [...inputvalues];
      updatedValues[index] = "";
      setInputvalues(updatedValues);
      if (element.previousSibling && index > 0) {
        element.previousSibling.focus();
      }
    } else if (!isNaN(element.value)) {
      const updatedValues = [...inputvalues];
      updatedValues[index] = element.value;
      setInputvalues(updatedValues);
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const navigate = useNavigate();
  console.log(timeremaining);

  const handleResendCode = async () => {
    if(timeremaining==0)
    {
    await Services.SendOtp(user.email, user.firstName)
      .then((res) => {
        setTimeout(() => {
          setSuccess(true);
          setError(false);
          setSuccessmessage("Otp resent successfully Please verify your email!");
          setTimeremaining(90);
          console.log(res.data);
          updateOtp(res.data);
        }, 3000);
      })
      .catch((err) => {
        setLoader(true);
        setTimeout(() => {
          console.log(err);
          setError(true);
          setLoader(false);
          setErrormessage(err.response.data);
        }, 3000);
        setTimeout(() => {
          navigate("/signin");
        }, 5000);
      });
    }
    else
    {
      setSuccess(false);
      setError(true);
      setErrormessage(`Otp is still valid for ${timeremaining} seconds`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(false);
    setError(false);
    setSuccess(false);
    const combinedValue = inputvalues.join("");

    if (!combinedValue || combinedValue.length < 6) {
      setLoader(true);
      setErrormessage("Please enter valid otp!")
      setError(true);
    } else {
      if (otp == combinedValue) {
        console.log(otp);
        setLoader(false);
        await Services.UserSignup(user)
          .then((res) => {
            setTimeout(() => {
              setSuccess(true);
              setSuccessmessage(res.data);
              setLoader(true);
            }, 3000);
            setTimeout(() => {
              navigate("/verifyface");
            }, 5000);
          })
          .catch((err) => {
            setError(true);
            setErrormessage(err.response.data);
          });
      } else {
        setError(true);
        setErrormessage("Unable to verify email!")
        setLoader(true);
      }
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full font-productsansr">
          {error && (
            <>
              <div className="max-w-full z-[1] fixed w-full flex items-center justify-between p-3 gap-3 bg-lightred">
                <div className="flex  items-center gap-3">
                  <span>
                    <TbAlertHexagon className="text-red" />
                  </span>
                  <p className="text-red">{errormessage}</p>
                </div>
                <button className="text-xl" onClick={() => setError(false)}>
                  <AiOutlineClose className="text-red" />
                </button>
              </div>
            </>
          )}
          {success && (
            <>
              <div className="max-w-full  z-[1] fixed w-full  flex items-center justify-between p-3 gap-3 bg-lightgreen">
                <div className="flex  items-center gap-3">
                  <span>
                    <GoIssueClosed className="text-brightgreen" />
                  </span>
                  <p className="text-brightgreen">{successmessage}</p>
                </div>
                <button className="text-xl" onClick={() => setSuccess(false)}>
                  <AiOutlineClose className="text-brightgreen" />
                </button>
              </div>
            </>
          )}
          <div className="xl:w-[100%] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen xl: bg-lightwhite lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure
                onClick={() => navigate("/signin")}
                className="w-14 xl:mb-12">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-16  flex flex-col  xl:gap-8 lg:gap-5">
                <div className="flex flex-col gap-5">
                  <p className="text-darkgray2 lg:text-2xl  leading-[50px] xl:text-4xl">
                    Verify your account
                  </p>
                  <p className="text-darkgray2 ">
                    We've sent a verification code to the email{" "}
                    <span>{user.email}</span>
                  </p>
                </div>
              </div>
            </aside>
            <div className=" xl:rounded-tl-[5em]  bg-white lg:w-full xl:w-[55em] shadow-xl">
              <form onSubmit={handleSubmit}>
                <div className="xl:px-32 xl:h-[33em]  lg:h-[20em] grid place-content-center relative xl:top-24  xl:py-12 lg:min-w-full lg:p-8">
                  <div className="flex flex-col p-5  lg:gap-4 xl:gap-6 lg:w-full xl:w-[37rem]">
                    <h1 className="text-xl  tracking-wide text-darkgray2">
                      Verification code
                    </h1>
                    <div className="flex flex-col xl:gap-5 lg:gap-8">
                      <div className="flex xl:w-full lg:gap-2 xl:justify-between">
                        {inputvalues.map((value, index) => (
                          <input
                            key={index}
                            value={value}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                e.target,
                                e.target.value === ""
                              )
                            }
                            className={`xl:px-[2em] xl:py-[2em] lg:w-[2.5em] lg:h-[2.5em] lg:px-[14px]   xl:w-[5em]  xl:h-[4.5em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite   border ${
                              isEmail ? "border-lightgray1" : "border-red"
                            } rounded-xl`}
                            type="text"
                            maxLength={1}
                          />
                        ))}
                      </div>

                      {!isEmail && (
                        <div className="flex items-center gap-3 text-red">
                          <span>
                            <TbAlertHexagon />
                          </span>
                          <p className="text-sm">Please enter your email.</p>
                        </div>
                      )}
                      <div>
                        {timeremaining > 0 ? (
                          <p className="text-darkgray2">
                            This code will expire in{" "}
                            <span id="timer">{formattedTime}</span>. Need a new
                            code?
                          </p>
                        ) : (
                          <p className="text-darkgray2">
                            The verification code has expired. Need a new code?
                          </p>
                        )}
                        <p
                          onClick={handleResendCode}
                          className="underline hover:no-underline cursor-pointer">
                          Resend code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl:border-lightgray1 w-full xl:fixed">
                  <div className=" flex lg:items-center xl:items-center lg:gap-10 lg:flex-col  ">
                    {loader ? (
                      <button className="bg-brown xl:w-[10em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl  shadow-md  text-white font-bold relative xl:left-[32em] ">
                        verify
                      </button>
                    ) : (
                      <button className=" xl:w-[8em]   bg-[#e4e4e4] lg:min-w-[90vw]  hover:duration-100 p-5 rounded-xl  shadow-md  text-white font-bold relative  xl:left-[32em] ">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                          <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                          <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                        </div>
                      </button>
                    )}
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Otpverify;
