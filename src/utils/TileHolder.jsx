import React from 'react'
import announceM from "../assets/DashIcons/announcement.png"

const TileHolder = (props) => {
  const { img, name } = props

  return (
      <div className='h-36 w-[6rem] border flex flex-col relative items-center justify-center shadow-md rounded-md bg-[#fffbef]'>
      <span className="flex px-2 text-[14px] rounded-md absolute top-0 right-0 -m-2 bg-gradient-to-r from-[#fc7b73] to-[#ffd97a] text-black">{props.span}</span>
        <div className='flex flex-col gap-5 mt-2 justify-center w-full py-2.5 px-0.5 items-center'>
          <img className='h-12 w-12 ' src={img} alt='' />
          <h1 className='bg-[#ffc890] font-light text-center py-0.5 w-full rounded-[0.25rem] text-sm'>{name}</h1>
        </div>
      </div>
  )
}

export default TileHolder