import React from 'react';
import pic from "../../assets/DashIcons/rms.png";
import Classcardtimetable from '../../utils/Classcardtimetable';


const TimeTable = () => {
  return (
    <div className=' bg-white  '>
      <h1 className='text-xl p-4'>Today's Timetable</h1>
      <div className='tables flex overflow-x-scroll   no-scrollbar ml-2 pb-5' style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Classcardtimetable name='INT253' room='34-502A' time='01-02 PM'/>
        <Classcardtimetable name='INT293' room='34-502A' time='02-03 PM'/>
        <Classcardtimetable name='PSY293' room='33-508' time='03-04 PM'/>
        <Classcardtimetable name='PSY293' room='33-508' time='04-05 PM'/>
      </div>
    </div>
  )
}

export default TimeTable