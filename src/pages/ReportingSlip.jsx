import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import til from "../assets/yono.png";
import shiva_img from "../assets/images/shiva_ums.jpeg";
import mourya_img from "../assets/images/mourya_ums.jpeg";
import adithya_img from "../assets/images/adithya_ums.jpeg";
import usJson from "../utils/us.json";
import chaitu_img from "../assets/images/chaitu_ums.jpeg";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import rahim_img from "../assets/images/rahim_ums.jpeg";



const ReportingSlip = () => {
  const studentName = "rahim";
  const studentInfo = usJson[studentName];
  const personalInfo = studentInfo.personal_info;
  const reportingInfo = studentInfo.reporting_slip;

  return (
    <>
      <div className="flex fixed top-0 inset-0 select-none touch-none items-center justify-between bg-zinc-800 h-14">
        <a href="/">
          <BiLeftArrowAlt className="text-white text-2xl m-3" />
        </a>
        <h1 className="w-full px-14 text-white font-extralight text-sm">Residential Reporting Slip</h1>
      </div>

      <div className="flex mt-12 items-center justify-center">
        <img src={til} alt="til" className="w-[80%] border-l border-gray-200 p-2 " />
      </div>

      <div className="flex items-center w-full px-8 flex-col justify-center">
        <h2 className="w-full font-semibold text-end">{}</h2>

        <img src={rahim_img} alt="shiva" className=" w-[40%] flex items-center justify-center  p-2 pb-3 m-2" />

        <hr className="w-[100%]" />
        <div className="flex flex-col justify-start w-full p-2">
          <p className="font-semibold text-xs py-2">Prov. Regd. No.: <span className="font-light">{personalInfo.reg}</span></p>
          <p className="font-semibold text-xs pb-2">Name: <span className="font-light">{personalInfo.name}</span></p>
          <p className="font-semibold text-xs pb-2">Father's Name: <span className="font-light">{personalInfo.father}</span></p>
          <p className="font-semibold text-xs pb-2">Mother's Name: <span className="font-light">{personalInfo.mother}</span></p>
          <p className="font-semibold text-xs pb-2">School Name: <span className="font-light">{personalInfo.school}</span></p>
          <p className="font-semibold text-xs pb-2">Programme: <span className="font-light">{personalInfo.program}</span></p>
          <p className="font-semibold text-xs pb-2">Address: <span className="font-light">{personalInfo.address}</span></p>
        </div>
        <hr className="w-[100%]" />


        <h2 className="w-full text-start font-semibold py-3">Residential Details:</h2>
        <p className="font-semibold text-start w-full text-xs pl-2 pb-2">Hostel: <span className="font-light">{reportingInfo.hostel}</span></p>
        <p className="font-semibold text-start w-full text-xs pl-2 pb-2">Seater: <span className="font-light">{reportingInfo.Seater}</span></p>
        <p className="font-semibold text-start w-full text-xs pl-2 pb-2">Room No: <span className="font-light">{reportingInfo.room}</span></p>


        <hr className="w-[100%] mt-4 mb-2" />

        <div className="w-full">
          <table className="w-full my-5">
            <tr>
              <td className="border p-4">1</td>
              <td className="border p-4 ">
                <span className="text-sky-700 font-semibold text-xs py-2">Residential Charges</span>
                <ul>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Due Amount: </span>{reportingInfo.hostel_due_paid}</li> 
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Paid Amount:</span>{reportingInfo.hostel_due_paid}</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Balance Amount:</span>0</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Fee Extension Date:</span><br /></li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100/80">
              <td className="border p-4">2</td>
              <td className="border p-4">
                <span className="text-sky-700 font-semibold text-xs py-2">Mess Charges</span><br />
                <ul>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Due Amount: </span>{reportingInfo.mess_due_paid}</li> 
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Paid Amount:</span>{reportingInfo.mess_due_paid}</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Balance Amount:</span>0</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Fee Extension Date:</span><br /></li>
                </ul>
              </td>
            </tr>
            <tr className="">
              <td className="border p-4">3</td>
              <td className="border p-4">
                <span className="text-sky-700 font-semibold text-xs py-2">GYM Charges</span><br />
                <ul>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Due Amount: </span>{reportingInfo.gym_due_paid}</li> 
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-">Paid Amount:</span>{reportingInfo.gym_due_paid}</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Balance Amount:</span>0</li>
                  <li className="text-[11px] font-light"><span className=" font-semibold text-[11px] py-1">Fee Extension Date:</span><br /></li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div >
    </>
  )
}

export default ReportingSlip