import React from 'react';
import pic from "../assets/DashIcons/rms.png";
import bg from "../assets/time-card.png"

const Classcardtimetable = (props) => {
    return (
        <>
            <div className="flex flex-col m-2 mr-0  rounded-lg w-[210px]  shadow-black/40 shadow-md  max-w-[400px]  ">
                <div className="rounded-t-md flex" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    height: '105px',
                    width: '100%'
                }}>
                    <div className='p-2 ml-2'>
                        <h1 className=' text-lg'>{props.name}</h1>
                        <p className='  text-sm'>{props.room}</p>
                        <span className='bg-yellow-400 w-4 my-2 rounded-full flex p-0.5'></span>
                    </div>
                    <div className="flex justify-end w-[130px] items-center">
                        {/* <img src={pic} alt="img" className='w-[100px]' /> */}

                    </div>
                </div>
                <div className="bg-black/80    rounded-b-md flex items-center justify-center">
                    <h1 className='text-white text-sm py-[0.5px]'>{props.time}</h1>
                </div>
            </div></>
    )
}

export default Classcardtimetable