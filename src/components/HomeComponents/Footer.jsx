import React from 'react';
import hambug from "../../assets/DashIcons/ham_bug.png";
import dash from "../../assets/images/dashboard_Orange.png";
import quiz from "../../assets/images/quick_quiz.png";
import happening from "../../assets/images/happenings.png";
import rms from "../../assets/images/rms.png";

const Footer = () => {
  return (

    <div className='footer  fixed -z-10 bg-white flex items-center justify-between shadow-md border-t p-3 w-full bottom-0'>
      <a href="/" >
        <div className="flex flex-col items-center justify-center">
          <img src={dash} className='w-7 p-1' />
          <h1 className='text-[#fc8073] text-xs'>Dashboard</h1>
        </div>
      </a>
      <a href="/loading" >
        <div className="flex flex-col items-center justify-center">
          <img src={happening} className='w-7 p-1' />
          <h1 className='text-black text-xs'>Happenings</h1>
        </div>
      </a>
      <a href="/loading" >
        <div className="flex flex-col items-center justify-center">
          <img src={rms} className='w-7 p-1' />
          <h1 className='text-black text-xs'>RMS</h1>
        </div>
      </a>
      <a href="/loading" >
        <div className="flex flex-col items-center justify-center">
          <img src={quiz} className='w-7 p-1' />
          <h1 className='text-black text-xs'>Quick Quiz</h1>
        </div>
      </a>
    </div>
  )
}

export default Footer