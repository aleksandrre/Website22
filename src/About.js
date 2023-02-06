import React from "react";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Navbar from "./components/navbar/Navbar";
import Deadline2 from "./components2/deadline2/Deadline2";
import Section21 from "./components2/section21/Section21";
import Section22 from "./components2/section22/Section22";
import Section23 from "./components2/section23/Section23";
import Footer2 from "./components2/footer2/Footer2";
import Footer from "./components/footer/Footer";

import "./main.css";
const About = () => {
  return (
    <>
      <Navbar />
      <Deadline2 />
      <Section21 />
      <Section22 />
      <Section23 />
      <Section4 />
      <Section5 />
      <Footer2 />
      <Footer />
    </>
  );
};

export default About;
