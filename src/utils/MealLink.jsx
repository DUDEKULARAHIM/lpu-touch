import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const MealLink = ({ mealLink, messType }) => (
  <Link to={`/scan/${mealLink}/${messType}`} className="w-full">
    <button className="w-full font-semibold flex my-2 items-center rounded py-4 shadow-black/40 shadow-lg justify-center bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] text-black">
      {mealLink}
      <BsArrowRightShort className="text-black text-2xl" />
    </button>
  </Link>
);

export default MealLink;
