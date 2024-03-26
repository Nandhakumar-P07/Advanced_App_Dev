import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection2 = () => {
     const call = () => {
       window.location.href = "tel:9626209856";
     };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cwyco8v",
        "template_c7jnu0d",
        e.target,
        "Kdtzo2HAJyNk2AcFa"
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
                <i class="fa-solid fa-circle-check"></i>
              </span>
              <div>
                <span className="">
                  Email sent successfully.Our team will contact you soon!
                </span>
              </div>
            </div>
          </div>
        ));
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
                  Unable to contact fundplus.Please try again Later!
                </span>
              </div>
            </div>
          </div>
        ));
      });
  }

  return (
    <>
      <main className="xl:h-[42rem]">
        <section className="flex lg:flex-col   items-start justify-around ">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-[#8ba17f] font-bold text-[15px]">
                Enquiries
              </h1>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-white font-ambitextrabold font-bold text-3xl">
                CONTACT INFORMATION
              </p>
            </div>
            <div className="flex items-start justify-between w-full text-lg">
              <div className="flex flex-col gap-5">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="text-[#8ba17f] font-bold text-[15px]">
                  General enquiries
                </h1>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="text-white">
                  <a
                    className="hover-effect w-fit"
                    href="mailto:agrofundx@gmail.com">
                    agrofundx@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-5">
                  <h1
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="text-[#8ba17f] font-bold text-[15px]">
                    Address
                  </h1>
                  <ul className="text-white">
                    <li data-aos="fade-down" data-aos-duration="1500">
                      Kovaipudur 2424
                    </li>
                    <li data-aos="fade-down" data-aos-duration="1600">
                      7271 Coimbatore
                    </li>
                    <li data-aos="fade-down" data-aos-duration="1700">
                      India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex  items-start justify-between text-lg">
              <ul className="flex flex-col gap-3">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="text-[#8ba17f] font-bold text-[15px]">
                  Org. number
                </h1>

                <div className="">
                  <span
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    className="hover:cursor-pointer text-white hover-effect"
                    onClick={call}>
                    9626209856
                  </span>
                </div>
              </ul>
              <ul className="flex flex-col relative mr-5 gap-3">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="text-[#8ba17f]  font-bold">
                  Our locations
                </h1>

                <li className="w-fit">
                  <span
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    className="hover:cursor-pointer flex flex-col w-[10px] text-white ">
                      <span>India</span>
                      <span>Srilanka</span>


                  </span>
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="xl:w-[35rem] lg:p-5   text-black xl:p-8 rounded-3xl">
            <div className="flex flex-col gap-7">
              <h1 className="font-bold   text-white font-ambitextrabold text-center   text-4xl">
                Send us message
              </h1>
              <div className="flex lg:flex-col gap-8 ">
                <div className="flex flex-col gap-1">
                  <p className="text-lightgray2">
                    Your name <span>*</span>
                  </p>
                  <input
                    className=" form-input rounded-md
                     border-bordergray text-black xl:w-[14rem]"
                    type="text"
                    name="user_name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lightgray2">
                    Email address <span>*</span>
                  </p>
                  <input
                    className=" form-input rounded-md border-bordergray xl:w-[14rem]"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray2">
                  Mobile Number <span>*</span>
                </p>
                <input
                  type="text"
                  maxLength="10"
                  name="user_mobilenumber"
                  className=" form-input rounded-md border-bordergray xl:w-[30rem]"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray2">
                  Message <span>*</span>
                </p>
                <textarea
                  className="form-textarea resize-none rounded-md border-bordergray lg:h-[5em] xl:h-[5.5rem] xl:w-[30rem]"
                  type=""
                  name="message"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="form-checkbox rounded-[5px] bg-lightgray2 border-none "
                  type="checkbox"
                  name=""
                  value=""
                  required
                />
                <p className="text-lightgray2 text-sm">
                  By submitting this form you agree to our terms and conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#8ba17f] text-white  mt-5 px-4 py-2 font-semibold  rounded-lg">
                Send Message
              </button>
              <input
                type="reset"
                value="Clear"
                className="bg-[#8ba17f] text-white  mt-5 px-4 py-2 font-semibold  rounded-lg"
              />
            </div>
          </form>
        </section>
      </main>
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
    </>
  );
};

export default ContactSection2;
