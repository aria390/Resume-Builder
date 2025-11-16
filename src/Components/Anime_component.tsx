import React from "react";

type TypeOfComents = {
  image: string;
  FullName: string;
  Email: string;
  children: React.ReactNode;
};

const Anime_component = ({
  image,
  FullName,
  Email,
  children,
}: TypeOfComents) => {
  return (
    <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={image} alt="User Image" />
        <div className="flex flex-col">
          <span>{FullName}</span>
          <span className="text-xs text-slate-500">{Email}</span>
        </div>
      </div>
      <span className="text-sm py-4 text-gray-800">{children}</span>
    </div>
  );
};

export default Anime_component;
