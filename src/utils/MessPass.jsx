import React, { useState, useEffect } from "react";
import MealApproved_gif from "../assets/mess/Success_updated.gif";
import TimeDate from "./TimeDate";
import VerificationCode from "./VerificationCode";
import sahit_img from "../assets/images/sahit_ums.jpeg";
import usJson from "../utils/us.json";
import { useNavigate } from "react-router-dom";

const MessPass = (props) => {
  const studentName = "sahit";
  const studentInfo = usJson[studentName];
  const personalInfo = studentInfo.personal_info;
  const reportingInfo = studentInfo.reporting_slip;

  const { mealType } = props;
  const { messType } = props;
  const navigate = useNavigate();

  // State for timer and current time
  const [timeLeft, setTimeLeft] = useState(30); // Timer in seconds
  const [currentTime, setCurrentTime] = useState({
    date: "",
    time: "",
  });

 // Timer logic
 useEffect(() => {
  if (timeLeft > 0) {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  } else {
    navigate("/");
  }
}, [timeLeft, navigate]);


  // Date and time update logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsDate = {
        month: "short",
        day: "numeric",
        year: "numeric",
      };
      const optionsTime = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const formattedDate = now.toLocaleDateString("en-US", optionsDate);
      const formattedTime = now.toLocaleTimeString("en-US", optionsTime);

      setCurrentTime({ date: formattedDate, time: formattedTime });
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="px-3 py-2 flex items-center justify-center">
    {/* Outer Container */}
    <div className="relative border border-gray-400 w-[26rem] rounded-2xl shadow-[0px_0px_18px_-4px_rgba(0,0,0,0.75)] shadow-black">
      {/* Timer at the Top */}
      <div className="absolute top-1 right-1">
        <div className="bg-neutral-400 text-gray-600 px-3 py-1 rounded-full">
          <span id="timer" className="text-black text-xl font-thin">
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Spacer */}
      <div className="text-transparent">-</div>

      {/* Existing Content */}
      <div className="p-1 mt-2 flex-row flex justify-start ml-3 gap-5">
        {/* Profile Section */}
        <div className="w-32 flex shadow-[0px_0px_18px_-10px_rgba(0,0,0,0.75)] shadow-black border bg-black border-black justify-center items-center h-32 rounded-full">
          <img
            className="rounded-full shadow-[0px_0px_18px_-10px_rgba(0,0,0,0.75)] shadow-black w-[100%] h-[100%]"
            src={sahit_img}
            alt=""
          />
        </div>
        <div className="flex mt-2 text-shadow font-semibold flex-col items-start justify-center">
          <h1 className="mb-2 text-3xl">{mealType}</h1>
          <h1 className="text-lg">{personalInfo.reg}</h1>
          <h1 className="tracking-wide max-[375px]:text-[0.96rem] text-lg">
            {personalInfo.name}
          </h1>
          <h1 className="text-lg">{messType}</h1>
        </div>
      </div>

      {/* Other Content */}
      <div className="flex justify-center flex-col mt-1">
        {/* Student Info */}
        <div className="mb-1 px-1">
          <div className="border border-transparent  rounded-lg p-1 flex flex-col bg-gray-100/50 text-lg">
            <p className="text-black font-light">
              P132: B.Tech. (Computer Science and
              <p>Engineering)(2024)</p>
            </p>
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex mb-2 mt-2 px-5 gap-28">
          <p className="text-black text-xl drop-shadow-lg ">
            {currentTime.date}
          </p>
          <p className="text-black text-xl drop-shadow-lg">
            {currentTime.time}
          </p>

        </div>

        {/* Meal Approved Section */}
        <div className="text-center mt-4">
          <h1 className="text-2xl mb-2 font-semibold text-[#5bbf24]">
            Meal Approved
          </h1>
          <img
            className="bg-green-700 p-4 w-[100%] h-[100%]"
            src={MealApproved_gif}
            alt="Meal Approved"
          />
        </div>
      </div>

      {/* Father's and Mother's Info */}
      <div className="flex flex-col pl-5 mt-5 gap-2">
        <div>
          <h1 className="text-black/80 font-semibold">Father's Name</h1>
          <h2 className="text-black/60">
            {personalInfo.father} &nbsp; ({personalInfo.contact})
          </h2>
        </div>
        <div>
          <h1 className="text-black/80 font-semibold">Mother's Name</h1>
          <h2 className="text-black/60">{personalInfo.mother}(-)</h2>
        </div>
        <div>
          <h1 className="text-black/80 font-semibold">Session</h1>
          <h2 className="text-black/60">
            P132:B.Tech. (Computer Science and Engineering)
          </h2>
        </div>
        <div>
          <h1 className="text-black/80 font-semibold">Hostel</h1>
          <h2 className="text-black/60">
            Boys Hostel-03-B201-Bed A (Std AC 4 Seater)
          </h2>
        </div>
      </div>

      {/* Verification Code */}
      <div className="mt-10">
        <div className="p-6">
          <VerificationCode />
        </div>
      </div>
    </div>
  </div>
);

};

export default MessPass;
