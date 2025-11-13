import React from "react";
import logoSite from "../img/logo.svg";

const Header = () => {
  return (
    <div>
      <img src={logoSite} alt="" />
      <ul>
        <li>Home</li>
        <li>Featuerd</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li>Get started</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
