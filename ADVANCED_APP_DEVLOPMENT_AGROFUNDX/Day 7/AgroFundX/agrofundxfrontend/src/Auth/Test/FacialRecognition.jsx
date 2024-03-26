import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import Webcam from "react-webcam";
import axios from "axios";
import ImageCompressor from "image-compressor.js";
import Services from "../../Service/Services";

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState(null);
  const [secondImg, setSecondImg] = useState(null);
  const [noFacesFound, setNoFacesFound] = useState(false);
  const [moreThanOneFace, setMoreThanOneFace] = useState(false);
  const [matchFound, setMatchFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const webcamRef = React.useRef(null);

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

  const fetchFirstImage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/agrofundx/auth/usergetfaceimage/${email}`
      );
      const imageUrl = response.data;
      const imgURL = await convertWebPToPNG(imageUrl);
      setFirstImg(imgURL);
    } catch (error) {
      console.error("Error fetching first image:", error);
    }
  };




  const saveImage = async () => {
  const imageSrc = webcamRef.current.getScreenshot();
  try {
    const blobImage = imageSrc;
    setSecondImg(imageSrc);
    console.log(secondImg);
    return blobImage;
  } catch (error) {
    console.error("Error capturing webcam image:", error);
  }
  };

  console.log(secondImg);

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
      setNoFacesFound(true);
      setLoading(false);
      return;
    } else if (faces.length > 1) {
      setMoreThanOneFace(true);
      setLoading(false);
      return;
    }

    const resizedFaces = faceapi.resizeResults(faces, {
      height: 300,
      width: 300,
    });
    faceapi.draw.drawDetections(
      document.getElementById("canvas1"),
      resizedFaces
    );

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
      faceapi.draw.drawDetections(
        document.getElementById("canvas2"),
        resizedMatched
      );
      setMatchFound(true);
    } else {
      setMatchFound(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Facial Recognition</h2>
      <form onSubmit={fetchFirstImage}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Fetch First Image</button>
      </form>
      {firstImg && (
        <div>
          <img
            id="first-img"
            src={firstImg}
            alt="First"
            // style={{ display: "none" }}
          />
          <canvas id="canvas1" />
        </div>
      )}
      <br />
      <br />
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
      </div>
      <br />
      <button onClick={saveImage}>Save Second Image</button>
      <br />
      {secondImg && (
        <div>
          <img
            id="second-img"
            src={secondImg}
            alt="Second"
          />
          <canvas id="canvas2" />
        </div>
      )}
      <br />
      <button onClick={checkMatch} disabled={!firstImg || !secondImg}>
        Check Match
      </button>
      {loading && <p>Loading...</p>}
      {noFacesFound && <p>No faces found in the first image</p>}
      {moreThanOneFace && <p>More than one face found in the first image</p>}
      {matchFound && <p>Match found!</p>}
      {matchFound === false && <p>No match found</p>}
    </div>
  );
};

export default FacialRecognition;

