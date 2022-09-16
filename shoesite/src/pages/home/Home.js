import React from "react";
import AboutSection from "../../components/aboutsection/AboutSection";
import Client from "../../components/client/Client";
// import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Product from "../../components/product/Product";
import Shop from "../../components/shop/Shop";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <div>
      <Nav />
      <Slider />
      <Product />
      <Shop />

      <Footer />
    </div>
  );
}
