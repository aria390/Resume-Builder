import React from "react";
import New from "../Components/New";
import Header from "../Components/Header";
import LandOfSite from "../Components/LandOfSite";

const Home = () => {
  return (
    <div className="h-full">
      <New />
      <Header />
      <LandOfSite />
    </div>
  );
};

export default Home;
