import React from "react";
import LeftTop from "./LeftTop";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between items-start w-[35%]">
      <LeftTop />
      <div className="mt-30 font-extrabold text-6xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
