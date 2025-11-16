import React from "react";
import New from "../Components/New";
import Header from "../Components/Header";
import LandOfSite from "../Components/LandOfSite";
import BuildResume from "../Components/BuildResume";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="h-full">
      <New />
      <Header />
      <LandOfSite />
      <BuildResume />
      <Testimonials />
    </div>
  );
};

export default Home;
