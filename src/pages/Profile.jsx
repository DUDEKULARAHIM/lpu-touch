import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import shiva_img from "../assets/images/shiva_ums.jpeg";
import mourya_img from "../assets/images/mourya_ums.jpeg";
import adithya_img from "../assets/images/adithya_ums.jpeg";
import chaitu_img from "../assets/images/chaitu_ums.jpeg";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import usJson from "../utils/us.json";

const Profile = () => {

    const studentName = "sahit";
    const studentInfo = usJson[studentName];
    const personalInfo = studentInfo.personal_info;
    const reportingInfo = studentInfo.reporting_slip;
    return (
        <>
            <div className="flex select-none touch-none items-center justify-between bg-zinc-800 h-14">
                <a href="/">
                    <BiLeftArrowAlt className="text-white text-2xl m-3" />
                </a>
                <h1 className="w-full px-28 text-white font-extralight text-sm">Profile</h1>
            </div>

            <div className="m-2 bg-white shadow-md ">
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] rounded-lg p-4">
                    <img src={sahit_img} alt="shiva" className="w-40 h-40 rounded-lg" />
                    <h1 className="font-light text-sm py-1">{personalInfo.name}</h1>
                    <p className="text-[11px] tracking-normalfont-[1px]">{personalInfo.program}</p>
                </div>

                <div className="w-full flex-col text-white flex my-6 items-center justify-center">
                    <h1 className="text-xs font-light bg-zinc-800 w-full p-2 text-center">Basic</h1>
                    <div className="flex flex-col w-full justify-start pl-3 pr-1 py-2">
                        <p className="text-gray-600 font-bold  px-1 pt-1 text-xs">Father's Name</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.father}</p>
                        <p className="text-gray-600 font-bold  px-1 pt-3 text-xs">Mother's Name</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.mother}</p>
                        <p className="text-gray-600 font-bold  px-1 pt-3 text-xs">Permanent Address</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.address}</p>
                        <p className="text-gray-600 font-bold px-1 pt-3 text-xs">Correspondence Address</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.address}</p>
                        <p className="text-gray-600 font-bold px-1 pt-3 text-xs">Contact No.</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.contact}</p>
                        <p className="text-gray-600 font-bold px-1 pt-3 text-xs">Email</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.email}</p>
                        <p className="text-gray-600 font-bold px-1 pt-3 text-xs">Date Of Birth</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.DOB}</p>
                        <p className="text-gray-600 font-bold px-1 pt-3 text-xs">Gender</p>
                        <p className="text-gray-500 text-xs px-1 ">Male</p>
                    </div>
                </div>

                <div className="w-full flex-col text-white flex my-6 items-center justify-center">
                    <h1 className="text-xs font-light bg-zinc-800 w-full p-2 text-center ">Academic Details</h1>
                    <div className="flex flex-col w-full justify-start pl-3 pr-1 py-2">
                        <p className="text-gray-600 font-bold  px-1 pt-1 text-xs">Program</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.program}</p>
                        <p className="text-gray-600 font-bold px-1 pt-2 text-xs">Admissioin Session</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.admission}</p>
                        <p className="text-gray-600 font-bold px-1 pt-2 text-xs">Batch</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.batch}</p>
                        <p className="text-gray-600 font-bold px-1 pt-2 text-xs">Section</p>
                        <p className="text-gray-500 text-xs px-1 ">{personalInfo.section}</p>
                    </div>
                </div>

                <div className="w-full flex-col  text-white flex my-6 items-center justify-center">
                    <h1 className="text-xs font-light bg-zinc-800 w-full p-2 text-center">Hostel Details</h1>
                    <div className="flex flex-col w-full justify-start px-3 py-2">
                        <p className="text-gray-600 font-bold  px-1 pt-1 text-xs">Hostel</p>
                        <p className="text-gray-500 text-xs px-1 pb-3">{personalInfo.hostel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile