import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Sheet from "react-modal-sheet";
import MyBottomSheet from "../components/HomeComponents/MyBottomSheet";
import { useParams } from "react-router-dom";
// import MealLink from "./MealLink"; // Import your MealLink component
import MealLink from "../utils/MealLink";
import shiva_img from "../assets/images/shiva_ums.jpeg";
import mourya_img from "../assets/images/mourya_ums.jpeg";
import adithya_img from "../assets/images/adithya_ums.jpeg";
import chaitu_img from "../assets/images/chaitu_ums.jpeg";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import usJson from "../utils/us.json";

const Mess = (props) => {
  const { sheetOpen } = props;
  const { messType } = props;

  const studentName = "sahit";
  const studentInfo = usJson[studentName];
  const personalInfo = studentInfo.personal_info;
  const reportingInfo = studentInfo.reporting_slip;

  return (
    <>
      <div className="flex select-none touch-none items-center justify-between bg-zinc-800 h-14">
        <Link to="/">
          <BiLeftArrowAlt className="text-white text-2xl m-3" />
        </Link>
        <h1 className="text-white font-extralight text-sm ml-6">Mess Coupon</h1>
        <a href="/history"> <h1 className="text-white  text-base  font-semibold  p-1 ">Meal History</h1></a>
      </div>
      <div className="flex items-center justify-center flex-col p-2">
        {/* <h1 className="text-xl text-center p-8 mt-3">
          Tap on the meal name to scan and avail food.
        </h1>
        <div className="flex flex-col items-center   justify-center">
          <MealLink mealLink="Breakfast" messType={messType} />
          <MealLink mealLink="Lunch" messType={messType} />
          <MealLink mealLink="Dinner" messType={messType} />
          <MealLink mealLink="Tea" messType={messType} />
        </div> */}
        <div className="w-[98%] flex flex-col border rounded-sm shadow-lg">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] rounded-lg p-4">
            <img src={sahit_img} alt="shiva" className="w-32 h-32 rounded-lg" />
            <h1 className="font-bold text-sm py-1">{personalInfo.name}</h1>
            {/* <p className="text-[11px] tracking-normalfont-[1px]">{personalInfo.program}</p> */}
            <div className="w-full items-start flex flex-col justify-center">
              <p className="text-gray-900 font-extrabold px-1 pt-2 text-xs">Father's Name</p>
              <p className="text-gray-900 text-xs px-1 ">{personalInfo.father}</p>
              <p className="text-gray-900 font-extrabold  px-1 pt-2 text-xs">Mother's Name</p>
              <p className="text-gray-900 text-xs px-1 ">{personalInfo.mother}</p>
              <p className="text-gray-900 font-extrabold  px-1 pt-2 text-xs">Program Name</p>
              <p className="text-gray-900 text-xs px-1 ">{personalInfo.program}</p>
              <p className="text-gray-900 font-extrabold  px-1 pt-2 text-xs">Hostel</p>
              <p className="text-gray-900 text-xs px-1 pb-3">{personalInfo.hostel}</p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xl text-center p-2 font-bold mt-3">
              Tap on the meal name to scan and avail food.
            </h1>
            <div className="w-full p-6 flex flex-col items-center justify-center">
              <div className="w-full flex flex-row items-center gap-4 justify-between">
                <MealLink mealLink="Breakfast" messType={messType} />
                <MealLink mealLink="Lunch" messType={messType} />
              </div>
              <div className="w-full flex flex-row items-center gap-4 justify-between">
                <MealLink mealLink="Dinner" messType={messType} />
                <MealLink mealLink="Tea" messType={messType} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyBottomSheet sheetOpen={sheetOpen} messType={messType} />
    </>
  );
};

export default Mess;
