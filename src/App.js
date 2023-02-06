import React from "react";
import "./app.css";
import Deadline from "./components/deadline/Deadline";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
function App() {
  return (
    <>
      <Navbar />
      <Deadline />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
