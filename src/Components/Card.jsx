import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Card = ({width , start , para , hover}) => {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl ${hover} ${width} min-h-[26rem] flex justify-between flex-col`}>
        <div className="w-full">
                    <div className="flex justify-between items-center w-full">
            <h3>hehehehee</h3>
            <BsArrowRight />
        </div>

            <div className="">
                <h1 className='font-3xl text-white font-medium mt-7'>Something here</h1>
            </div>
        </div>
        <div className="w-full mt-30 text-white">
            {start && (
                <>
                
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Drove achieve</h1>
            <button className='px-4 py-2 border-[1px] border-zinc-50 rounded-full mt-5'>Contact Us</button>
                </>               
            ) 
        }

        {para && (
             <p className='font-medium text-sm text-zinc-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        )}
           
        </div>
    </div>
  )
}

export default Card