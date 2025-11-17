import React from "react";
import logoSite from "../img/logo.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const changePage = useNavigate();

  return (
    <header className="flex items-center justify-around bg-transparent pt-3">
      <img className="h-11 w-auto" src={logoSite} alt="" />
      <ul className="flex gap-7 *:text-sm *:cursor-pointer *:hover:text-green-600 *:transition">
        <li>Home</li>
        <li>Featuerd</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-3">
        <button onClick={()=>{
          changePage("/Register")
        }} className="bg-green-500 hover:bg-green-700 py-2 px-6 text-white rounded-full active:scale-95 transition-all cursor-pointer ">
          Get started
        </button>
        <button onClick={()=>{
          changePage("/Login")
        }} className="py-2 px-6 rounded-full active:scale-95 transition-all border cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
