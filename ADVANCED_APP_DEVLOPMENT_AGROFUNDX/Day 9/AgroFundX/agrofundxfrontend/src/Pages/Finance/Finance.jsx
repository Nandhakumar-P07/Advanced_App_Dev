import React from "react";
import { Navbar } from "../../Common/Navbar/Navbar";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { FcFlowChart } from "react-icons/fc";

const Finance = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pl-[10rem]  flex flex-col gap-4">
        <div className="w-screen">
          {" "}
          <p className="text-4xl font-ambitbold  justify-center pt-[10rem]">
            A New Age Lending Solution
          </p>{" "}
        </div>
        <div>
          <p className=" text-xl">
            FBN Finance makes it easy and affordable for family farmers to
            finance their operation for the next generation.
          </p>
        </div>
      </div>
      <div className="mt-[2rem] pr-[28rem] pl-[10rem]">
        <div className="border-darkteal2 border mt-[1rem]"></div>
      </div>

      <div className="flex gap-[3rem] ml-[10rem] items-center mt-[2rem]">
        <div className="">
          <p className="text-2xl font-ambitbold text-[#779667] text-center">
            2,400 +
          </p>
          <p className="text-2xl font-ambitbold">Farmers Served</p>
        </div>
        <div>
          <p className="text-2xl font-ambitbold text-[#779667] text-center">
            $1.5B+
          </p>
          <p className="text-2xl font-ambitbold">Funds Committed</p>
        </div>
        <div>
          <p className="text-2xl font-ambitbold text-[#779667] text-center">
            28%
          </p>
          <p className="text-2xl font-ambitbold">Average Savings</p>
        </div>
        <div>
          <p className="text-2xl font-ambitbold text-[#779667] text-center">
            10,000+
          </p>
          <p className="text-2xl font-ambitbold">Member Farmers</p>
        </div>
      </div>
      <div className="mt-[2rem] pr-[28rem] pl-[10rem]">
        <div className="border-darkteal2 border mt-[1rem]"></div>
      </div>

      <div className="flex gap-[3rem] justify-evenly ml-[10rem] items-center py-[2rem] w-full mt-[2rem] pr-[20rem]">
        <div className="flex flex-col gap-4">
          <i class="text-7xl text-[#779667] fa-solid fa-bars-progress"></i>
          <p className="text-2xl font-ambitbold">Great Rates</p>
          <p>
            With FBN Finance you can feel confident that you are getting a great
            rate. We are often able to save customers thousands of dollars
            thanks to our low overhead, competitive rates and nationwide
            network.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <i class="text-7xl text-[#779667] fa-solid fa-sitemap"></i>
          <p className="text-2xl font-ambitbold">Apply in Minutes</p>
          <p>
            Our secure and straightforward online application will save you time
            and provide you with the right tools to track your application's
            progress.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <i class="text-7xl text-[#779667] fa-regular fa-handshake"></i>
          <p className="text-2xl font-ambitbold">Exceptional Service</p>
          <p>
            We are dedicated to family farmers. We work with growers and
            producers to provide creative solutions to their financing needs,
            approaching every farmer’s situation uniquely and never with a
            cookie-cutter recommendation.
          </p>
        </div>
      </div>
      <div className="ml-[10rem] ">
        <h1 className=" text-4xl font-ambitbold py-[1rem]">
          Financial Products
        </h1>
        <p className="text-2xl">
          Select a product below to get started and find your rate in minutes.
          Or call 866-619-3080 to speak with our loan advisor team immediately.
        </p>

        <div className="flex py-[2rem] gap-[5rem]">
          <div className="w-[30rem]">
            <i class="text-7xl text-[#779667] py-[2rem] fa-solid fa-scale-unbalanced"></i>
            <h1 className=" text-4xl font-ambitbold py-[1rem]">
              Farm Land Loans
            </h1>
            <p className="text-2xl">
              Save thousands by financing your farm or ranch at a great rate
              with a team that knows ag.
            </p>
            <button class="bg-[#8ba17f] flex items-center  font-ambitbold text-xl text-white border py-2 w-[200px] rounded-lg mt-5 justify-center  hover:scale-110 duration-300">
              Apply Now
            </button>
          </div>
          <div className="w-[30rem]">
            <i class="text-7xl text-[#779667] py-[2rem] fa-solid fa-wheat-awn"></i>
            <h1 className=" text-4xl font-ambitbold py-[1rem]">
              Farm Operating Lanes
            </h1>
            <p className="text-2xl">
              Apply with an easy application and flexible terms. Revolving lines
              of credit start at 7.85%. Long-term operating loans start at
              7.84%.
            </p>
            <button class="bg-[#8ba17f] flex items-center  font-ambitbold text-xl text-white border py-2 w-[200px] rounded-lg mt-5 justify-center  hover:scale-110 duration-300">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex gap-[5rem]">
          <div className="w-[30rem]">
            <i class="text-7xl text-[#779667] py-[2rem] fa-solid fa-tractor"></i>
            <h1 className=" text-4xl font-ambitbold py-[1rem]">
              Farm Equipment
            </h1>
            <p className="text-2xl">
              Buy your next piece of new or used ag equipment from a dealer,
              auction, or individual. Rates start at 6.95%.
            </p>
            <button class="bg-[#8ba17f] flex items-center  font-ambitbold text-xl text-white border py-2 w-[200px] rounded-lg mt-5 justify-center  hover:scale-110 duration-300">
              Apply Now
            </button>
          </div>
          <div className="w-[30rem]">
            <i class="text-7xl text-[#779667] py-[2rem] fa-solid fa-coins"></i>
            <h1 className=" text-4xl font-ambitbold py-[1rem]">
              Farm Land Loans
            </h1>
            <p className="text-2xl">
              Get up to 25% of your farm’s value in cash. With no interest
              payments, ever.
            </p>
            <button class="bg-[#8ba17f] flex items-center  font-ambitbold text-xl text-white border py-2 w-[200px] rounded-lg mt-5 justify-center  hover:scale-110 duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
