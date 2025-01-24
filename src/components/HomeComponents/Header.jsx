import React, { useState } from "react";
import hambug from "../../assets/DashIcons/ham_bug.png";
import notifica from "../../assets/DashIcons/notification.png";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";

const Header = (props) => {
  const { isOpen } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-white h-16 touch-none select-none fixed inset-0 shadow-md">
      <div className="flex justify-between p-4">
        <img
          className="w-8 h-6 cursor-pointer"
          src={hambug}
          alt="logo"
          onClick={toggleSidebar}
        />

        <h1 className="text-xl  font-medium tracking-wide">Dashboard</h1 >
        <div className="relative">
          <span className="flex px-1 text-[12px] rounded-md absolute top-0 right-0 -mx-0.75 -my-1.5 bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] text-black">47</span>
          <img className="w-8 h-8" src={notifica} alt="user"
            onClick={closeSidebar} />
        </div>
      </div>
      {isSidebarOpen && (
        <div className=" w-[100vw] transition-all">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
      )}
    </div>
  );
};

export default Header;
