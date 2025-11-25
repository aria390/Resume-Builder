import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../img/logo.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "../Api/axios";

interface Itype {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
interface Api {
  user: Itype;
}

const Header_Dashboard = () => {
  const changePage = useNavigate();

  const token = localStorage.getItem("token");

  const { data } = useQuery<Api>({
    queryKey: ["getthem"],
    queryFn: async () => {
      const { data } = await axios.get<Api>("/api/users/data", {
        headers: {
          Authorization: token,
        },
      });
      return data;
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      changePage("/login");
    }
  });

  return (
    <div className="flex flex-col shadow">
      <div className="flex justify-between items-center py-4 px-36 text-slate-800 transition-all">
        <img src={logo} alt="" />
        <div className="flex gap-4 items-center">
          <p>Hi, {data?.user.name}</p>
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

export default Header_Dashboard;
