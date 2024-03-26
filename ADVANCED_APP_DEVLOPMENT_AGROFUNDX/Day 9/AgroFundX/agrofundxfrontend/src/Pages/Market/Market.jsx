import React from 'react'
import{Navbar}from"../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";

const Market = () => {
  return (
    <div>
      <Navbar />


      <div className="w-[100%] flex flex-col items-center justify-center text-xl mt-[7.5rem] bg-[#18332f] text-white p-[5rem] ">
        <h1 className="text-5xl flex items-center">
          Find an Expert solution for agricultural finance
        </h1>
        <p className="text-lg p-2  mt-5 text-white flex items-center">
          Advice from financial talent from all over the world.
        </p>

        <p className="text-lg p-2  text-whiteflex items-center ">
          Manage the entire project within AgrofundX...
        </p>

        <p className="text-lg p-2 mt-5 text-white flex items-center ">
          Find subsidies that match your financial status.
        </p>
        <button
          class="bg-white ml-[10rem] flex items-center mr-[12rem] text-[#8ba17f] border py-2 w-[200px] rounded-xl mt-5 justify-center  hover:scale-110 duration-300">
          Become a Member
        </button>
        <p className="text-md p-2 mt-5 text-white flex items-center ">
          No Upfront payments or hidden fees
        </p>
      </div>

      <div className="text-white text-xl bg-[#18332f] p-[2rem] text-left w-full">
        <h1 className="text-5xl">Gain Marketing Services</h1>
        <p className="">
          Our team is dedicated to offering personalized, data-driven market
          advisory and risk management services to help you maximize the value
          of your crops.
        </p>
      </div>

      <div className="text-white text-xl  flex justify-evenly bg-[#18332f] p-[2rem]  text-left ">
        <div className="flex flex-col p-[1rem] w-[20rem] gap-[2rem]">
          <FaHome className="text-white text-5xl" />
          <h1 className="text-5xl">Market</h1>
          <p>
            A technology platform and powerful crop marketing tool that supports
            your agricultural business decisions.
          </p>
          <button class="bg-white text-[#8ba17f] py-2 w-[200px] rounded-xl justify-center  hover:scale-110 duration-300">
            LearnMore
          </button>
        </div>
        <div className="flex flex-col w-[20rem] p-[1rem] gap-[2rem]">
          <MdAccountCircle className="text-white text-5xl" />
          <h1 className="text-5xl">Insights</h1>
          <p>
            The insights you need to make knowledgeable decisions developed by
            agricultural economists and leveraged by Advisors delivering
            customized marketing solutions for your farm.
          </p>
          <button class="bg-white text-[#8ba17f] py-2 w-[200px] rounded-xl justify-center  hover:scale-110 duration-300">
            Learn More
          </button>
        </div>
        <div className="flex flex-col p-[1rem] w-[20rem] gap-[2rem]">
          <FaFilterCircleDollar className="text-white text-5xl" />
          <h1 className="text-5xl">Premium Programs</h1>
          <p>
            Innovative marketing programs rewarding Farmers for implementing and
            utilizing regenerative farming practices, developed by partnering
            with organizations in the food and agriculture ecosystems.
          </p>
          <button class="bg-white text-[#8ba17f] py-2 w-[200px] rounded-xl justify-center  hover:scale-110 duration-300">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Market