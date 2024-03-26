import React, { useState } from "react";
import visa from "../../../Assets/Images/Footer/visa.svg";
import toast, { Toaster } from "react-hot-toast";
import Services from "../../../Service/Services";
import lemon from "../../../Assets/Images/Card/lemon.svg";
import { useUser } from "../../../useContext/UseStates";
const Usercardpaymentdetails = () => {
  const [cardnumber, setCardnumber] = useState("");
  const [cardmonth, setCardmonth] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userid") || null);
  const [cardyear, setCardyear] = useState(0);
  const [cardcvv, setCardcvv] = useState(0);
  const [cardname, setCardname] = useState("");
  const {user,updateUser}=useUser();
  const handleUpdateCardDetails = async (e) => {
    e.preventDefault();
    const updatedUserCardDetails = {
      cardNumber: cardnumber,
      cardMonth: cardmonth,
      cardYear: cardyear,
      cardName: cardname,
      cardCvv: cardcvv,
    };

    await Services.userUpdateUserCardDetails(
      updatedUserCardDetails,
      localStorage.getItem("userid")
    )

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
                <span className="flex-wrap w-[10em]">
                  Added card successfully.Verification is in progress!
                </span>
              </div>
            </div>
          </div>
        ));

        // toast.success("Updated card details");
        if (userId) {
          Services.getUser(userId)
            .then((res) => {
              updateUser(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
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
                  Unable to Add card.Please try again Later!
                </span>
              </div>
            </div>
          </div>
        ));
      });
  };

  return (
    <>
      <main className="xl:h-full  relative ">
        <section className="relative   dark:border-lightgray xl:top-[3rem] p-5  xl:left-[2em] xl:w-[50rem] rounded-lg xl:h-full xl:mb-12 flex flex-col gap-5 ">
          <div className="  flex justify-between items-center  rounded-t-lg  pb-3">
            <h1 className="font-bold  text-darkteal  text-3xl  dark:text-white">
              Payment Details
            </h1>
          </div>
          <div className="py-5 ">
            <p className="font-bold font-ambitextrabold  text-darkteal   text-3xl mb-3 dark:text-white">
              Saved card
            </p>

            <div className="grid xl:grid-cols-2 xl:gap-x-5 font-ambitextrabold  gap-y-2">
              {user?.usercarddetails?.map((usercards, index) => (
                <div
                  className={`credit-card bg-gradient-to-r from-lightteal via-darkteal to-darkteal   xl:w-[24rem] rounded-2xl px-5 py-8 flex flex-col gap-6 text-white`}>
                  <figure className="flex justify-between gap-5">
                    <svg
                      width="40"
                      height="46"
                      viewBox="0 0 51 45"
                      class="AnimatedCardGraphic__chip">
                      <defs>
                        <linearGradient
                          id="chip-gradient"
                          y1="40%"
                          y2="58%"
                          data-js-target="AnimatedCardGraphic.chipGradient">
                          <stop offset="0%" stop-color="#FFF"></stop>
                          <stop offset="18%" stop-color="#CFCFCF"></stop>
                          <stop offset="50%" stop-color="#FAFCFF"></stop>
                          <stop offset="68%" stop-color="#CFCFCF"></stop>
                          <stop offset="100%" stop-color="#FFF"></stop>
                        </linearGradient>
                        <mask id="chip-mask">
                          <path
                            d="M12 36v9H7.7c-2.68 0-3.65-.28-4.63-.8A5.45 5.45 0 0 1 .8 41.93c-.52-.98-.8-1.95-.8-4.62V36h12zm21.07-6a7 7 0 0 0 4.68 5.63l.25.08V45H13v-9.29a7.01 7.01 0 0 0 4.89-5.45l.04-.26h15.14zM51 36v1.3c0 2.68-.28 3.65-.8 4.63a5.45 5.45 0 0 1-2.27 2.27c-.98.52-1.95.8-4.62.8H39v-9h12zm0-13v12H40a6 6 0 0 1-6-6v-6h17zm-34 0v6a6 6 0 0 1-5.78 6H0V23h17zm16-7v13H18V16h15zm18-6v12H34v-6a6 6 0 0 1 5.78-6H51zm-40 0a6 6 0 0 1 6 6v6H0V10h11zM38 0v9.29A7 7 0 0 0 33.07 15H17.93A7 7 0 0 0 13 9.29V0h25zm5.3 0c2.68 0 3.65.28 4.63.8a5.45 5.45 0 0 1 2.27 2.27c.52.98.8 1.95.8 4.62V9H39V0h4.3zM12 0v9H0V7.7c0-2.68.28-3.65.8-4.63A5.45 5.45 0 0 1 3.07.8C4.05.28 5.02 0 7.69 0H12z"
                            fill="#fff"></path>
                        </mask>
                      </defs>

                      <rect
                        x="0"
                        y="0"
                        width="51"
                        height="45"
                        fill="#828396"
                        rx="6"></rect>
                      <rect
                        x="-51"
                        y="-45"
                        width="102"
                        height="98"
                        fill="url(#chip-gradient)"
                        mask="url(#chip-mask)"
                        data-js-target="AnimatedCardGraphic.chip"></rect>
                    </svg>{" "}
                    <img className=" " src={lemon} width="30" alt="" />
                  </figure>

                  <p className="text-2xl flex gap-3 items-center  font-bold">
                    <span>{usercards?.cardNumber.slice(0, 4)}</span>

                    <span>{usercards?.cardNumber.slice(4, 8)}</span>
                    <span>{usercards?.cardNumber.slice(8, 12)}</span>
                    <span>{usercards?.cardNumber.slice(12, 16)}</span>
                  </p>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      {/* <p>Valid thru:</p> */}
                      <span className="font-bold font-poppins">
                        {/* {usercards?.cardMonth}/{usercards?.cardYear} */}
                        {usercards.cardName.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        class="AnimatedCardGraphic__visa"
                        width="72"
                        height="27"
                        viewBox="0 0 84 27">
                        <path
                          fill="#fff"
                          d="M42 1l-5.43 26H30l5.43-26H42zm28 17h6L73.8 8 70 18zm7.81 9l-.8-3.88h-8.59L67.02 27H60L70.04 2.9A3.04 3.04 0 0 1 72.89 1h5.7L84 27h-6.19zm-17.09-8.94C60.7 23.5 55.95 27 48.7 27c-3.1-.03-6.07-.66-7.69-1.39l1.25-5.72c1.61.73 3.63 1.7 7.1 1.65 1.99-.03 4.12-.8 4.14-2.56.01-1.14-.9-1.96-3.59-3.24-2.61-1.25-6.09-3.35-6.05-7.1C43.9 3.53 48.7 0 55.53 0c2.67 0 4.8.57 6.47 1.15L60.79 6.7a13.29 13.29 0 0 0-6.82-1.16c-2 .25-2.9 1.25-2.93 2.18-.07 3.08 9.71 3.46 9.68 10.35zM32 1L20.96 27h-7.2L8.35 6.25C8 4.97 7.72 4.51 6.72 3.97A28.75 28.75 0 0 0 0 1.75L.16 1h11.59c1.48 0 2.8.97 3.14 2.65l2.87 15.05L24.85 1H32z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                  {/* <div className="">
                <p className=" text-xl">{Users.cardname}</p>
              </div> */}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleUpdateCardDetails}>
            <div className="xl:w-full  dark:bg-darkgray1 dark:border-none border-lightgray1  flex  flex-col gap-5 bg-white rounded-xl  ">
              <div className="flex justify-between xl:w-full   border-lightgray1  ">
                <p className="font-bold text-darkteal  dark:text-white  text-2xl">
                  Add Card
                </p>
                <figure className="flex gap-5">
                  <img width="50" src={visa} />
                </figure>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className=" text-lightgray ">
                  Card Number<span> *</span>
                </label>
                <input
                  className="focus:border-lightteal focus:outline-none rounded-lg xl:w-full border-[1px] py-2.5 px-2.5 dark:bg-bluegray dark:text-white border-lightgray1"
                  placeholder="XXXX XXXX XXXX XXXX"
                  maxLength="16"
                  type="text"
                  required
                  onChange={(e) => setCardnumber(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <label className="text-lightgray ">
                    Expiration Date <span> *</span>
                  </label>
                  <div className="flex xl:w-[10rem]">
                    <input
                      className="focus:border-lightteal border-[1px] focus:outline-none px-2.5 py-2.5  lg:w-[5em]  rounded-l-lg xl:w-[10rem]  dark:bg-bluegray dark:text-white  border-lightgray1"
                      placeholder="Month"
                      maxLength="2"
                      required
                      type="text"
                      onChange={(e) => setCardmonth(e.target.value)}
                    />
                    <input
                      placeholder="Year"
                      className="focus:border-lightteal border-[1px] focus:outline-none px-2.5 py-2.5  lg:w-[5em] rounded-r-lg xl:w-[10rem]  dark:bg-bluegray dark:text-white  border-lightgray1"
                      maxLength="2"
                      type="text"
                      required
                      onChange={(e) => setCardyear(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-lightgray">
                    CVV / CVC <span>*</span>
                  </label>
                  <input
                    className="focus:border-lightteal focus:outline-none py-2.5 px-2.5  xl:w-[15rem]  dark:bg-bluegray dark:text-white border-[1px] border-lightgray1  rounded-lg"
                    type="password"
                    minLength="3"
                    maxLength="3"
                    placeholder="XXX"

                    required
                    onChange={(e) => setCardcvv(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className=" text-lightgray font-medium">
                  Name on Card <span>*</span>
                </label>
                <input
                  className="focus:border-lightteal border-[1px] focus:outline-none px-2.5 py-2.5 rounded-lg  dark:bg-bluegray dark:text-white border-2 border-lightgray1"
                  type="text"
                  placeholder="Enter card holder name"
                  required
                  onChange={(e) => setCardname(e.target.value)}
                />
              </div>
              <button className="flex items-center justify-center bg-[#8ba17f] text-white p-2 font-bold rounded-lg">
                <span>Add Card</span>
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
        />
      </main>
    </>
  );
};

export default Usercardpaymentdetails;
