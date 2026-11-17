import React from "react";

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="bg-black px-6 py-2 rounded-full text-white uppercase text-xs">
        Target audience
      </span>
      <span className="bg-gray-50 px-6 py-2 rounded-full uppercase text-xs flex items-center gap-2 font-medium">
        <i className="ri-phone-line"></i>digital banking platform
      </span>
    </div>
  );
};

export default Nav;
