import React from "react";
import ContactSection1 from "../../Components/Contact/ContactSection1.jsx";
import ContactSection2 from "../../Components/Contact/ContactSection2.jsx";
import ContactSection3 from "../../Components/Contact/ContactSection3.jsx";
import { Navbar } from "../../Common/Navbar/Navbar";
import  Footer  from "../../Common/Footer/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#18332f]">
        <ContactSection1 />
        <ContactSection2 />
        <ContactSection3 />
      </div>
      <Footer />
    </>
  );
};
