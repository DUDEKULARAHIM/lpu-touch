import React from "react";
import MealApproved_gif from "../assets/mess/Success_updated.gif";
import TimeDate from "../utils/TimeDate";
import VerificationCode from "../utils/VerificationCode";
import shiva_img from "../assets/images/shiva_ums.jpeg";
import mourya_img from "../assets/images/mourya_ums.jpeg";
import adithya_img from "../assets/images/adithya_ums.jpeg";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import chaitu_img from "../assets/images/chaitu_ums.jpeg";
import usJson from "../utils/us.json";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from 'react-icons/bi';
import rahim_img from "../assets/images/rahim_ums.jpeg";

const History = (props) => {
  const studentName = "rahim";
  const studentInfo = usJson[studentName];
  const personalInfo = studentInfo.personal_info;
  const reportingInfo = studentInfo.reporting_slip;

  const { mealType } = props;
  const { messType } = props;
  return (
    <>
      <div className="flex select-none touch-none items-center justify-between bg-zinc-800 h-14">
        <Link to="/mess">
          <BiLeftArrowAlt className="text-white text-2xl m-3" />
        </Link>
        <h1 className="text-white font-extralight text-sm ml-6">Meal History</h1>
        <p>&nbsp;</p>
        {/* <a href="/history"> <h1 className="text-white  text-base  font-semibold  p-1 ">Meal </h1></a> */}
      </div>

    
      <div className=" px-3 py-2 flex  items-center justify-center  ">
        <div className=" border  border-gray-400  w-[26rem] rounded-2xl shadow-[0px_0px_18px_-4px_rgba(0,0,0,0.75)] shadow-black ">
          <div className=" p-1 mt-2  flex-row-reverse flex  justify-around ">
            <div className="  w-32 flex  shadow-[0px_0px_18px_-10px_rgba(0,0,0,0.75)] shadow-black   border bg-black border-black justify-center  items-center h-32 rounded-full  ">
              <img
                className="  rounded-full shadow-[0px_0px_18px_-10px_rgba(0,0,0,0.75)] shadow-black  w-[100%] h-[100%]"
                src={rahim_img}
                alt=""
              />
            </div>
            <div className=" flex mt-2 [text-shadow:0px_0px_1px_var(#00000)]  font-semibold   drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] flex-col  items-start justify-center">
              <h1 className="mb-2 text-2xl">{mealType}</h1>
              <h1>{personalInfo.reg}</h1>
              <h1 className=" tracking-wide   max-[375px]:text-[0.96rem]">
                {personalInfo.name}
              </h1>
              <h1>{messType}</h1>
            </div>
          </div>
          <div className="flex justify-center  items-center flex-col mt-3 ">
            <h1 className="text-2xl mt-2 ml-2 mb-2 [text-shadow:0px_0px_1px_var(--tw-shadow-color)]      font-semibold text-[#5bbf24]">
              Meal Approved
            </h1>
            <img
              className="w-[100%] h-[100%] rounded-2xl"
              src={MealApproved_gif}
              alt=""
            />
          </div>
          <TimeDate />
          <div className=" p-6">
            <VerificationCode />
          </div>
        </div>
      </div>
    </>
  )
}

export default History
