import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full bg-zinc-900'>
        <div className="max-w-screen-lg mx-auto py-30 flex gap-1">
            <Card width={"basis-1/3"} start={false} para={true} />
            <Card  width={"basis-2/3"} start={true} para={false} hover={"hover:bg-violet-600 " }/>
        </div>
    </div>
  )
}

export default Cards