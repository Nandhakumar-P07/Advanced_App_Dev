import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animationData1 from "../../Datas/frontpage_slow_utan-fiskar_layer01.json";
import animationData2 from "../../Datas/frontpage_slow_utan-fiskar_layer02.json";
import animationData3 from "../../Datas/frontpage_slow_fiskar.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Landingsection1 = () => {
  AOS.init();
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: false,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    const handleScrollStart = () => {
      setIsScrolling(true);
    };

    const handleScrollEnd = () => {
      setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScrollStart);
    window.addEventListener("scroll", handleScrollEnd);

    const handleScroll = () => {
      clearTimeout(scrollTimeout); // Clear previous timeout
      setScrollTimeout(
        setTimeout(() => {
          // Stop animation after 500ms of no scrolling
          defaultOptions3.autoplay = false;
        }, 500)
      );

      // Start animation on scroll
      defaultOptions3.autoplay = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, [scrollTimeout]);

  useEffect(() => {
    if (lottieRef.current) {
      if (isScrolling) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isScrolling]);

  const strokeDashoffset = 0.000974;
  const strokeDasharray = "161.824px, 6170.4px";
  const opacityone = 1;
  return (
    <div>
      <div className="bg-blueteal w-full">
        <div>
          <div className="pb-[10rem] ">
            <div className="w-[65%] pl-[7rem] pt-[17rem]  flex flex-col items-start gap-10">
              <p className="text-[#8ba17f] flex flex-col font-ambitextrabold leading-[90px] text-[5.5rem]  w-[60rem]">
                <span data-aos="fade-up" data-aos-duration="1000">
                  Together we give
                </span>
                <span data-aos="fade-up" data-aos-duration="1500">
                  nourishment to
                </span>
                <span data-aos="fade-up" data-aos-duration="2000">
                  the future
                </span>
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="flex items-center gap-2">
                <p className="hover-effect w-fit text-white">
                  Read more about the company
                </p>
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
              </div>
            </div>

            <div className="w-[65%] pl-[7rem] pt-[15rem] flex flex-col gap-[4rem] font-ambitextrabold">
              <button className="flex items-start gap-4">
                <p className="text-white font-ambit text-8xl">THE PROJECT</p>
                <span>
                  <svg
                    class="inline-block relative  w-4 h-4 mr-3 -stroke-green-boulogne"
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
              </button>
              <button className="flex items-start gap-4">
                <p className="text-white font-ambit text-8xl">CIRCULARITY</p>
                <span>
                  <svg
                    class="inline-block relative  w-4 h-4 mr-3 -stroke-green-boulogne"
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
              </button>
              <button className="flex items-start gap-4">
                <p className="text-white font-ambit text-8xl">SUBSIDIARY</p>
                <span>
                  <svg
                    class="inline-block relative  w-4 h-4 mr-3 -stroke-green-boulogne"
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
              </button>
              <button className="flex items-start gap-4">
                <p className="text-white font-ambit text-8xl">OUR PROCESS</p>
                <span>
                  <svg
                    class="inline-block relative  w-4 h-4 mr-3 -stroke-green-boulogne"
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
              </button>
            </div>
          </div>
          <div className="absolute top-[60%] right-[48%]">
            <div className="absolute z-20">
              <Lottie
                options={defaultOptions1}
                height={screenHeight * 1.46}
                width={screenWidth * 0.46}
              />
            </div>
            <div className="absolute z-10">
              <Lottie
                options={defaultOptions2}
                height={screenHeight * 1.46}
                width={screenWidth * 0.46}
              />
            </div>
            <div className="absolute z-0">
              <Lottie
                options={defaultOptions3}
                height={screenHeight * 1.46}
                width={screenWidth * 0.46}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <svg
          class="timeline-path absolute top-0 stroke-green-gui-shading fill-none opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.6 5669.7"
          data-timeline-bg-svg=""
        >
          <path
            fill="black"
            d="M1 0c.1 52.6 33.7 98.5 64.5 141.7C193.1 304.8 104.9 352.1 19.9 496c-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 1035.3 1 1081.2 1 1133.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 2169.3 1 2215.2 1 2267.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 3303.3 1 3349.2 1 3401.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 4437.3 1 4483.2 1 4535.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 5571.3 1 5617.2 1 5669.7"
          ></path>
        </svg>
        <svg
          class="timeline-path absolute top-0 stroke-green-text fill-none opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.6 5669.7"
          data-timeline-draw-svg=""
          style={{ opacityone }}
        >
          <path
            fill="none"
            d="M1 0c.1 52.6 33.7 98.5 64.5 141.7C193.1 304.8 104.9 352.1 19.9 496c-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 1035.3 1 1081.2 1 1133.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 2169.3 1 2215.2 1 2267.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 3303.3 1 3349.2 1 3401.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 4437.3 1 4483.2 1 4535.7v.3c.1 52.6 33.7 98.5 64.5 141.7 127.7 163.1 39.4 210.4-45.6 354.3-24.9 47.4-24.8 94.3 0 141.7 85 143.6 173.2 191.6 45.6 354.3C34.7 5571.3 1 5617.2 1 5669.7"
            style={{ strokeDashoffset, strokeDasharray }}
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Landingsection1;
