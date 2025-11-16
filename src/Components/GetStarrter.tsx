import React from "react";

const GetStarrter = () => {
  return (
    <div className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-16 mt-28 ">
      <div className="flex text-left items-center justify-between gap-8 px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
        <span className="text-xl font-medium max-w-md text-slate-800">
          Build a Professional Resume That Helps You Stand Out and Get Hired
        </span>
        <button className="rounded py-3 px-8 bg-green-600 hover:bg-green-700 transition text-white cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarrter;
