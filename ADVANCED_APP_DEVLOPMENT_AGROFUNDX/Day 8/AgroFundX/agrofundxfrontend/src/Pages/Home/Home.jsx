import React, { Suspense, lazy } from "react";
import { Navbar } from "../../Common/Navbar/Navbar";
import Footer from "../../Common/Footer/Footer";
const Landingsection1 = lazy(() =>
  import("../../Components/Home/Landingsection1")
);
const Landingsection2 = lazy(() =>
  import("../../Components/Home/Landingsection2")
);
const Landingsection3 = lazy(() =>
  import("../../Components/Home/Landingsection3")
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Landingsection1 />
      <Landingsection2 />
      <Landingsection3 />
      <Footer />
    </>
  );
};

export default Home;
