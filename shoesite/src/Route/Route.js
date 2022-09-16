import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import ContactUs from "../pages/contactus/ContactUs";
import Home from "../pages/home/Home";
import OurShoes from "../pages/ourShoes/OurShoes";
import OurShop from "../pages/ourshop/OurShop";

export default function route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shoes" element={<OurShoes />} />
        <Route path="/ourshop" element={<OurShop />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
