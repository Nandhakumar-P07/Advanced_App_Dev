import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import ImageCompressor from "image-compressor.js";
import logo from "../../Assets/logo/logo.gif";
import { useNavigate } from "react-router-dom";
import Services from "../../Service/Services";
import { useUser } from "../../useContext/UseStates";
import { TbAlertHexagon } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineLeft } from "react-icons/ai";
import * as faceapi from "face-api.js";
import axios from "axios";
import { useUserImage } from "../../useContext/UseStates";

const Facesignin = () => {
  const [firstImg, setFirstImg] = useState(null);
  const [secondImg, setSecondImg] = useState(null);
  const [noFacesFound, setNoFacesFound] = useState(false);
  const [moreThanOneFace, setMoreThanOneFace] = useState(false);
  const [matchFound, setMatchFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showcamera, setShowcamera] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const [successmessage, setSuccessmessage] = useState(
    "Email verified successfully"
  );
  const [errormessage, setErrormessage] = useState(
    "Please try again later! unable to update image"
  );

  const webcamRef = useRef(null);
  const { userfaceimage, updateUserFaceImage } = useUserImage();
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);
  const [blobImage, setBlobImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    await Services.getUserFaceImage(email)
      .then(async (res) => {
        // Make the callback function async
        console.log(res.data);
        setSuccess(true);
        setShowcamera(true);
        const imageUrl = res.data;
        const imgURL = await convertWebPToPNG(imageUrl); // Await conversion
        setFirstImg(imgURL);
      })
      .catch((err) => {
        setSuccess(false);
        setError(true);
        setErrormessage("Unable to verify email. Please try again later!");
      });
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.faceExpressionNet.loadFromUri("/models2");
        await faceapi.nets.faceRecognitionNet.loadFromUri("/models2");
        await faceapi.nets.ssdMobilenetv1.loadFromUri("/models2");
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models2");
        await faceapi.nets.mtcnn.loadFromUri("/models2");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models2");
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models2");
        await faceapi.nets.ageGenderNet.loadFromUri("/models2");
      } catch (e) {
        console.log(e);
      }
    };
    loadModels();
  }, []);

  const saveImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const blobImage = imageSrc;
      setSecondImg(imageSrc);
      console.log(secondImg);
      setShowWebcam(false);

      return blobImage;
    } catch (error) {
      console.error("Error capturing webcam image:", error);
    }
  };
  console.log(firstImg);
  console.log(secondImg);

  const recaptureImage = () => {
    setCapturedImage(null);
    setShowWebcam(true);
    setSecondImg(null);
  };

  const convertWebPToPNG = async (webpUrl) => {
    try {
      const imageResponse = await axios.get(webpUrl, { responseType: "blob" });
      const blob = imageResponse.data;
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL("image/png");
    } catch (error) {
      console.error("Error converting WebP to PNG:", error);
      return null;
    }
  };

  const checkMatch = async () => {
    setLoading(true);
    const firstImgElement = document.getElementById("first-img");
    const faces = await faceapi
      .detectAllFaces(firstImgElement)
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withFaceExpressions()
      .withAgeAndGender();

    if (faces.length === 0) {
      setSuccess(false);
      setNoFacesFound(true);
      setError(true);
      setErrormessage("No faces found in the first image");
      setLoading(false);
      return;
    } else if (faces.length > 1) {
      setSuccess(false);
      setMoreThanOneFace(true);
      setError(true);
      setErrormessage("More than one face found in the first image");
      setLoading(false);
      return;
    }

    const resizedFaces = faceapi.resizeResults(faces, {
      height: 300,
      width: 300,
    });

    findMatch(faces[0]);
  };

  const findMatch = async (face) => {
    setLoading(true);
    const matchScore = 0.63;
    const secondImgElement = document.getElementById("second-img");
    const secondImgDescriptors = await faceapi
      .detectAllFaces(secondImgElement)
      .withFaceLandmarks()
      .withFaceDescriptors();

    const labeledFace = new faceapi.LabeledFaceDescriptors("Face", [
      face.descriptor,
    ]);
    const faceMatcher = new faceapi.FaceMatcher(labeledFace, matchScore);

    const results = await Promise.all(
      secondImgDescriptors.map((f) => faceMatcher.findBestMatch(f.descriptor))
    );

    const foundIndex = results.findIndex((i) => i._label === "Face");
    if (foundIndex !== -1) {
      const matched = [secondImgDescriptors[foundIndex]];
      const resizedMatched = faceapi.resizeResults(matched, {
        height: 300,
        width: 300,
      });

      setMatchFound(true);
      setSuccess(true);

      setSuccessmessage("Face matched successfully");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setMatchFound(false);
      setSuccess(false);
      setSuccessmessage("");
      if (moreThanOneFace) {
        setError(true);
        setErrormessage("More than one face");
      } else if (noFacesFound) {
        setError(true);
        setErrormessage("No faces found in the second image");
      } else {
        setError(true);
        setErrormessage("Face not matched");
      }
    }
    setLoading(false);
  };

  const handleReturn = () => {
    navigate("/signin");
  };

  return (
    <>
      <main>
        <section>
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

          <div className=" xl:w-[100%] z-[2] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen  xl:bg-[#fbf8f6] lg:h-screen  lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em]   xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-14 xl:mb-12 lg:mt-10">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-16  flex flex-col xl:gap-8 lg:gap-5">
                <div>
                  <h2 className="text-[#333333] lg:text-2xl  leading-[50px] xl:text-4xl">
                    Lets login with face authentication
                  </h2>
                </div>
                {loading && <p>Loading...</p>}
                {noFacesFound && <p>No faces found in the first image</p>}
                {moreThanOneFace && (
                  <p>More than one face found in the first image</p>
                )}
                {matchFound && <p>Match found!</p>}
                {matchFound === false && <p>No match found</p>}
              </div>
            </aside>
            <div className=" xl:rounded-tl-[5em] bg-white xl:w-[55em] shadow-xl grid place-content-end">
              {showcamera ? (
                <>
                  <div className="xl:px-32 xl:py-8 px-32 lg:p-8">
                    <div className="flex  flex-col gap-6  xl:w-[37rem]">
                      <h1 className="text-xl  tracking-wide text-darkgray">
                        Keep your camera straight
                      </h1>
                      <h1 className="text-md  tracking-wide text-darkgray">
                        Your details will not be shared to anyone.
                      </h1>
                      <div className="flex  flex-col gap-2">
                        {firstImg && (
                          <div>
                            <img
                              id="first-img"
                              src={firstImg}
                              alt="First"
                              style={{ display: "none" }}
                            />
                            {/* <canvas id="canvas1" /> */}
                          </div>
                        )}
                        <div>
                          {showWebcam ? (
                            <div className="">
                              <Webcam
                                ref={webcamRef}
                                width="350"
                                className="rounded-xl "
                              />
                            </div>
                          ) : (
                            <div>
                              <img
                                id="second-img"
                                src={secondImg}
                                width="350"
                                className="rounded-xl"
                                alt="Second"
                              />
                              {/* <canvas id="canvas2" /> */}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="lg:relative xl:px-32  xl:py-12 lg:px-8 lg:py-12 xl:border-t-[1px]  xl: border-lightgray1 ">
                    <div className="flex  lg:items-center xl:items-center lg:gap-5 lg:flex-col  ">
                      {showWebcam ? (
                        <div
                          onClick={saveImage}
                          className="text-darkgray  flex  border-[1px] lg:min-w-[85vw]  border-lightgray1 p-3.5 px-12   hover:bg-[#f5f5f5] lg:justify-center rounded-xl font-bold items-center gap-5">
                          <button>Capture Image</button>
                        </div>
                      ) : (
                        <div
                          onClick={recaptureImage}
                          className="text-darkgray  flex  border-[1px] lg:min-w-[85vw]  border-lightgray1 p-3.5 px-12   hover:bg-[#f5f5f5] lg:justify-center rounded-xl font-bold items-center gap-5">
                          <button>Recapture Image</button>
                        </div>
                      )}

                      <div className="">
                        <button
                          onClick={checkMatch}
                          className="bg-brown xl:w-[15em] lg:min-w-[85vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                          Verify Face
                        </button>
                      </div>
                    </div>
                  </footer>
                </>
              ) : (
                <div>
                  <header className="">
                    <p className="text-darkgray xl:text-end lg:text-start xl:p-12 lg:p-0 lg:px-8 tracking-wider">
                      Don't have an account?
                      <span
                        className="underline cursor-pointer hover:no-underline"
                        onClick={() => navigate("/signup")}>
                        Sign up
                      </span>
                    </p>
                  </header>
                  <form onSubmit={handleEmailSubmit}>
                    <div className="xl:px-32 xl:h-[25em]   xl:py-12 px-32 lg:p-8">
                      <div className="flex flex-col gap-6  xl:w-[37rem]">
                        <h1 className="text-xl  tracking-wide text-darkgray">
                          Enter your email address
                        </h1>
                        <h1 className="text-md  tracking-wide text-darkgray">
                          Camera will be automatically opened after email
                          verification
                        </h1>
                        <div className="flex flex-col gap-2">
                          <input
                            placeholder="Email Address"
                            className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite  lg:w-[100%] border ${
                              isEmail ? "border-lightgray1" : "border-red"
                            } rounded-xl`}
                            type="email"
                            onChange={handleEmailChange}
                          />

                          {!isEmail && (
                            <div className="flex items-center gap-3 text-red">
                              <span>
                                <TbAlertHexagon />
                              </span>
                              <p className="text-sm">
                                Please enter your email.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <footer className="lg:relative xl:px-32  xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl: border-lightgray1 ">
                      <div className="flex xl:justify-between  lg:items-center xl:items-center lg:gap-5 lg:flex-col  ">
                        <div
                          onClick={handleReturn}
                          className="text-darkgray  flex  border-[1px] lg:min-w-[80vw]  border-lightgray1 p-3.5 px-12   hover:bg-[#f5f5f5] lg:justify-center rounded-xl font-bold items-center gap-5">
                          <span className="lg:hidden">
                            <AiOutlineLeft />
                          </span>
                          <button className="">Return to sign in </button>
                        </div>
                        <div className="">
                          {loader ? (
                            <button className="bg-[#a1a0a0] xl:w-[15em] lg:min-w-[85vw]  p-6 rounded-2xl shadow-md  text-white font-bold relative xl:left-6 ">
                              <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                              </div>
                            </button>
                          ) : (
                            <button className="bg-brown xl:w-[15em] lg:min-w-[85vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                              Verify Email
                            </button>
                          )}
                        </div>
                      </div>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Facesignin;
