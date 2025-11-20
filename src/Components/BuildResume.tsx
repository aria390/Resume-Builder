import React from "react";
import Group_image from "../img/group-image-1.png";

const BuildResume = () => {
  return (
    <div id="feacher" className="pt-50">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="flex items-center justify-center w-40 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
          <span>Simple Process</span>
        </div>
        <span className="text-4xl font-semibold">Build your resume</span>
        <span className="text-slate-500">
          Our streamlined process helps you create a professional resume in
          minutes with <br /> intelligent AI-powered tools and features.
        </span>
      </div>
      <div className="flex justify-center items-center pr-30">
        <div>
          <img className="w-170" src={Group_image} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="group">
            <div className="flex gap-2 p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 rounded-xl transition-colors cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-violet-600"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
              <div>
                <h3 className="text-base font-semibold text-slate-700">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get instant insights into your finances with live dashboards.
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex gap-2 p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 rounded-xl transition-colors cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-600"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
              <div>
                <h3 className="text-base font-semibold text-slate-700">
                  Bank-Grade Security
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  End-to-end encryption, 2FA, compliance with GDPR standards.
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex gap-2 p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 rounded-xl transition-colors cursor-pointer ">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <div>
                <h3 className="text-base font-semibold text-slate-700">
                  Customizable Reports
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Export professional, audit-ready financial reports for tax or
                  internal review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
