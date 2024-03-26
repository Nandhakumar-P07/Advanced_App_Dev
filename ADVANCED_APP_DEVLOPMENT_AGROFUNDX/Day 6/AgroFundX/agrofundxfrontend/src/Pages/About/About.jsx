import React from "react";
import { Navbar } from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";

const About = () => {
  return (
    <div className="w-screen bg-[#18332f]">
      <Navbar />
      <div className="container   ">
        <div className="bg-[#18332f] ml-[25rem] p-[5rem] text-left text-white w-[40rem]">
          <h1 className="text-lg text-[#8ba17f] font-bold mb-4">About us</h1>
          <h1 className="text-4xl text-white font-bold font-ambitextrabold  mb-4">
            WHO WE ARE
          </h1>
          <div className="mb-8">
            <p className="text-2xl text">
              AgriculturalFundX is a pioneering financial institution deeply
              rooted in the agricultural sector. Our mission is to empower
              farmers and agribusinesses by providing tailored financial
              solutions that foster growth and sustainability.
            </p>
            <div className="text-white py-[3rem]">
              <h1 className=" text-lg text-[#8ba17f] font-bold mb-4">
                Our story
              </h1>
              <p className="text-xl">
                AgriculturalFundX's story is one of humble beginnings and
                steadfast commitment. Founded with a simple yet powerful mission
                to empower farmers, our journey has been marked by resilience
                and dedication.
              </p>
              <p className="text-xl mt-[1rem]">
                From our inception, we've strived to bridge the gap between
                financial services and the agricultural community, offering
                tailored solutions to meet their unique needs.
              </p>
              <p className="text-xl mt-[1rem]">
                Through unwavering dedication and a deep-rooted passion for
                agriculture, we've grown into a trusted partner for farmers,
                providing essential support and guidance to help them thrive.
              </p>
            </div>

            <div className="text-white py-[3rem]">
              <h1 className=" font-bold mb-4 text-lg text-[#8ba17f]">
                SUSTAINABILITY
              </h1>
              <div className="text-white text-lg gap-[2rem] flex flex-col">
                <p className="">
                  At AgriculturalFundX, sustainability isn't just a buzzword –
                  it's our core philosophy ingrained in every aspect of our
                  operations.
                </p>
                <p>
                  From our commitment to responsible lending practices to our
                  emphasis on supporting environmentally friendly farming
                  techniques, sustainability is at the heart of everything we
                  do. We prioritize investments that promote long-term
                  ecological balance, social equity, and economic prosperity
                  within the agricultural sector.
                </p>
                <p>
                  Our partnerships with sustainable farming initiatives and
                  conservation programs reflect our dedication to preserving
                  natural resources and fostering resilient farming communities.
                </p>
                <p>
                  By championing sustainable practices, we aim to create a
                  future where agriculture thrives harmoniously with the planet,
                  ensuring prosperity for generations to come. AgriculturalFundX
                  is not just a financial institution – it's a catalyst for
                  sustainable change in the agricultural landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 p-[3rem] text-xl text-left w-[40rem] ml-[27rem] text-white">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <p className="pb-[1rem]">
            At AgriculturalFundX, sustainability isn't just a buzzword – it's
            our core philosophy ingrained in every aspect of our operations.
            From our commitment to responsible lending practices to our emphasis
            on supporting environmentally friendly farming techniques,
            sustainability is at the heart of everything we do. We prioritize
            investments that promote long-term ecological balance, social
            equity, and economic prosperity within the agricultural sector.
          </p>
          <ul className="list-disc ml-8">
            <li>
              Loans and financing options to support farm operations and
              expansions.
            </li>
            <li>
              Subsidies and grants assistance to maximize profitability and
              sustainability.
            </li>
            <li>
              Financial planning and management guidance to optimize resources
              and mitigate risks.
            </li>
            <li>
              Scheme implementation and support to navigate regulatory
              requirements and government programs.
            </li>
            <li>And much more...</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
