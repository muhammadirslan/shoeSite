import React from "react";
// import { NavLink } from "react-router-dom";
import logo from "../ProductImages/logo.png";
const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <ul>
          <img src={logo} className="logo" alt="Logo" />
          <p>Home</p>
          <p>Shoes</p>
          <p>Boots</p>
          <p>About Us</p>
          <p>Contact</p>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
