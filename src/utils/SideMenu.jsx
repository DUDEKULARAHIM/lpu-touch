import React from "react";

const SideMenu = ({ text, imageURL }) => {
  return (
    <div>
      <div className=" border-b p-3 flex ">
        <img className="w-7 h-7  p-1 mr-4 " src={`${imageURL}`} />
        <p className=" text-black tracking-wider text-sm  py-1">{text}</p>
      </div>
    </div>
  );
};

export default SideMenu;
