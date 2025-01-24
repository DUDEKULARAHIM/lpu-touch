import React from 'react';
import pic from "../../assets/DashIcons/rms.png";
import Classcardtimetable from '../../utils/Classcardtimetable';


const TimeTable = () => {
  return (
    <div className=' bg-white  '>
      <h1 className='text-xl p-4'>Today's Timetable</h1>
      <div className='tables flex overflow-x-scroll   no-scrollbar ml-2 pb-5' style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Classcardtimetable name='CSE322' room='34-502A' time='02-03 PM'/>
        <Classcardtimetable name='PEA308' room='34-506' time='03-04 PM'/>
        <Classcardtimetable name='PEV113' room='34-502A' time='04-05 PM'/>
        <Classcardtimetable name='CSE423' room='34-502A' time='05-06 PM'/>
      </div>
    </div>
  )
}

export default TimeTable