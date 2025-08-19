import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900'> 
        <div className="max-w-screen-xl mx-auto py-6 gap-32 flex">

            <div className="basis-1/2">
                <h1 className='text-[11.5rem] tracking-tight font-semibold leading-none text-white'>refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-4">
            <div className='basis-1/3'>
                <h4 className='mb-8 text-zinc-300'>Social</h4>
                {["instagram" , "twitter (x?)" , "LinkedIn"].map((item , index)=><a key={index} className='bolck mt-4 capitalize text-zinc-500 flex' >{item}</a>)}
            </div>

                        <div className='basis-1/3'>
                <h4 className='mb-8 text-zinc-300'>Social</h4>
                {["instagram" , "twitter (x?)" , "LinkedIn"].map((item , index)=><a key={index} className='bolck mt-4 capitalize text-zinc-500 flex' >{item}</a>)}
            </div>

            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-white text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                <img className='w-22 mt-8' src="https://www.shutterstock.com/shutterstock/videos/1069438189/thumb/1.jpg?ip=x480" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer