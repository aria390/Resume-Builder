import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../img/logo.svg";

const Dashboard = () => {
  const changePage = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      changePage("/login");
    }
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-4 px-10">
        <img src={logo} alt="" />
        <div className="flex gap-4 items-center">
          <p>
            Hi <span></span>
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              changePage("/");
            }}
            className="px-6 py-2 rounded-full border border-gray-400 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
