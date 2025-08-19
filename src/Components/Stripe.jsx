import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-5 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center text-white'>
        <img className= 'w-8 h-8 scale-125 object-contain' src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>

    </div>
  )
}

export default Stripe