import React from 'react'
import { PiArrowBendDownRightBold } from "react-icons/pi";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-fit px-4 gap-8 py-2 bg-zinc-200 rounded-full text-black flex items-center justify-between  '>
        <span className='text-sm font-medium '>{title}</span>
        <PiArrowBendDownRightBold />
    </div>
  )
}

export default Button