import React, { useState, useEffect } from "react";

function TimeDate() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    setCurrentDate(formattedDate);

    const formattedTime = today.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTime(formattedTime);
  }, []);

  return (
    <div className="px-10">
      <div className="flex  justify-between items-center">
        <p>Date</p>
        <p className="text-gray-500">{currentDate}</p>
      </div>
        <div className="border border-gray-400 my-2"></div>
      <div>
        <div className="flex  justify-between items-center">
          <p>Time</p>
          <p className="text-gray-500">{currentTime}</p>
        </div>
      </div>
    </div>
  );
}

export default TimeDate;
