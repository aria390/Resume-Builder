import React from "react";
import New from "../Components/New";
import Header from "../Components/Header";
import LandOfSite from "../Components/LandOfSite";
import BuildResume from "../Components/BuildResume";
import Testimonials from "../Components/Testimonials";
import GetStarrter from "../Components/GetStarrter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="h-full">
      <New />
      <Header />
      <LandOfSite />
      <BuildResume />
      <Testimonials />
      <GetStarrter />
      <Footer/>
    </div>
  );
};

export default Home;
