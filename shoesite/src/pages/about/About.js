import React from "react";
import AboutSection from "../../components/aboutsection/AboutSection";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Client from "../../components/client/Client";

export default function About() {
  return (
    <div>
      <Nav />
      <AboutSection />
      <Client />
      <Footer />
    </div>
  );
}
