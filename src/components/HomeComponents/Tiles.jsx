import React from "react";
import TileHolder from "../../utils/TileHolder";
import announceM from "../../assets/DashIcons/announcement.png"
import fee from "../../assets/DashIcons/fee.png"
import attendence from "../../assets/DashIcons/attendance.png"
import assignment from "../../assets/DashIcons/assignment.png"
import result from "../../assets/DashIcons/result.png"
import exam from "../../assets/DashIcons/exam.png";
import library from "../../assets/DashIcons/library.png";
import event from "../../assets/DashIcons/event.png";
import rmsstatus from "../../assets/DashIcons/mentor.png";
import {BiPlus} from "react-icons/bi";

const Tiles = () => {
  return (
    <>
      <div className="flex  -z-20 flex-col   justify-center items-center ">
        <div className="flex justify-between gap-20 items-center p-4">
          <div className="flex gap-2 flex-col ">
            <h1 className=" text-xl font-normal">Add More Tiles</h1>
            <p className=" text-xs ">Click on the plus button to add menu grids.</p>
          </div>
          <BiPlus className="bg-black text-white p-1 text-3xl rounded-full"/>
        </div>
        <div className="p-4 gap-5 flex flex-col mb-20   items-center">
          <div className="flex  gap-8 items-center">
          <TileHolder img={announceM} name={"Announce"} span={"0"}/>
          <TileHolder img={fee} name={"Fee Statement"} />
          <TileHolder img={attendence} name={"Attendance"} span={"88%"}/>
          </div>
          <div className="flex gap-8 items-center">
          <TileHolder img={assignment} name={"Assignment"} span={"20"}/>
          <TileHolder img={result} name={"Results"} span={"7.12"}/>
          <TileHolder img={exam} name={"Exams"} span={"9"}/>
          </div>
          <div className="flex gap-8 items-center">
          <TileHolder img={library} name={"Library"} />
          <TileHolder img={event} name={"Events"} />
          <TileHolder img={rmsstatus} name={"RMS Status"} />
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Tiles;
