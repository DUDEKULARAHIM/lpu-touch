import React, { useState } from "react";

import Header from "../components/HomeComponents/Header";
import TimeTable from "../components/HomeComponents/TimeTable";
import Footer from "../components/HomeComponents/Footer";
import Tiles from "../components/HomeComponents/Tiles";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const tapHighlightStyle = {
    WebkitTapHighlightColor: "transparent",
    // You can also add other styles here
  };

  return (
    <>
      <Header />
      <div
        className=" flex flex-col mt-14 -z-50   noSelect select-none scroll-smooth  justify-center "
        style={tapHighlightStyle}
      >
        <TimeTable />
        <Tiles />
        <Footer />
      </div>
    </>
  );
};

export default Home;
