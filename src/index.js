import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Visit from "./Visit";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Culture from "./visit'schildren/Culture";
import Relax from "./visit'schildren/Relax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/relax" element={<Relax />} />
    </Routes>
  </BrowserRouter>
);
