import React, { useState, useRef,useEffect } from "react";
import Webcam from "react-webcam";
import ImageCompressor from "image-compressor.js";
import logo from "../../Assets/logo/logo.gif";
import { useNavigate } from "react-router-dom";
import Services from "../../Service/Services";
import { useUser } from "../../useContext/UseStates";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import * as faceapi from 'face-api.js';

import { TbAlertHexagon } from "react-icons/tb";

const Verifyface = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successmessage, setSuccessmessage] = useState(
    "Image updated successfully"
  );
  const [errormessage, setErrormessage] = useState("Please try again later! unable to update image");

  const webcamRef = useRef(null);
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);
  const [blobImage, setBlobImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);

  const [data, setData] = useState("");



   useEffect(() => {
     async function loadModels() {
       await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
     }
     loadModels();
   }, []);

   const captureImage = async () => {
     const imageSrc = webcamRef.current.getScreenshot();
     const blobImage = dataURItoBlob(imageSrc);
     setCapturedImage(imageSrc);
     setBlobImage(blobImage);
     setShowWebcam(false);

     try {
       // Detect faces in the captured image
       const canvas = document.createElement("canvas");
       const ctx = canvas.getContext("2d");
       const img = new Image();
       img.onload = async () => {
         canvas.width = img.width;
         canvas.height = img.height;
         ctx.drawImage(img, 0, 0, img.width, img.height);
         const detections = await faceapi.detectAllFaces(canvas);
         if (detections.length > 0) {
           console.log("Face detected");
           // Continue with image processing or saving
           setError(false);
           setSuccess(true);
           setSuccessmessage("Face captured successfully Please click save image!")
         } else {
           console.log("No face detected");
           setSuccess(false);
           setShowWebcam(true);
           setError(true);
           setErrormessage("Please show your face for capture");
         }
       };
       img.src = imageSrc;
     } catch (error) {
       console.error("No Face Detected");
     }
   };

  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  const recaptureImage = () => {
    setCapturedImage(null);
    setShowWebcam(true);
  };
  const saveImage = async () => {
    const selectedImage = blobImage;
    setErrormessage(" ");


    if (selectedImage) {
      const compressedImage = await compressImage(selectedImage);
      const imageData = new FormData();
      imageData.append("file", compressedImage);
      imageData.append("upload_preset", "qmcjfiqx");

      await Services.uploadCloudinary(imageData)
        .then((res) => {
          // setData(res.data.secure_url);
           Services.userUpdateImage(user.email, res.data.secure_url)
            .then((res) => {
              console.log(res.data);
              setSuccess(true);
              setTimeout(() => {
                navigate("/signin");
              }, 5000);
            })
            .catch((error) => {
              setError(true);
              setErrormessage("Please Click Capture image!")
              console.error("Error uploading image:", error);
            });
        })
        .catch((err) => {
          console.log(err);
        });

        console.log(data);


    }
  };

  const compressImage = async (image) => {
    return new Promise((resolve, reject) => {
      new ImageCompressor(image, {
        quality: 0.9,
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
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
          <div className=" xl:w-[100%] z-[2] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen  xl:bg-lightwhite lg:h-screen  lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em]   xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-14 xl:mb-12 lg:mt-10">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-16  flex flex-col xl:gap-8 lg:gap-5">
                <div>
                  <h2 className="text-[#333333] lg:text-2xl  leading-[50px] xl:text-4xl">
                    Let's verify your identity
                  </h2>
                </div>
              </div>
            </aside>
            <div className=" xl:rounded-tl-[5em] bg-white xl:w-[55em] shadow-xl grid place-content-end">
              <div className="xl:px-32 xl:py-8 px-32 lg:p-8">
                <div className="flex  flex-col gap-6  xl:w-[37rem]">
                  <h1 className="text-xl  tracking-wide text-darkgray">
                    Keep your camera straight
                  </h1>
                  <h1 className="text-md  tracking-wide text-darkgray">
                    Your details will not be shared to anyone.
                  </h1>
                  <div className="flex  flex-col gap-2">
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
                            src={capturedImage}
                            alt="Captured"
                            width="350"
                            className="rounded-xl"
                          />
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
                      onClick={captureImage}
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
                      onClick={saveImage}
                      className="bg-brown xl:w-[15em] lg:min-w-[85vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                      Save Image
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Verifyface;







