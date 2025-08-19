import { motion } from 'motion/react'
import React from 'react'

const Marquee = ({imgurl , direction}) => {
    return (
        <div  className='flex w-full gap-12 bg-zinc-900 whitespace-nowrap overflow-hidden' >
            <motion.div
             initial={{x: direction === "left" ? "0" : "-100%"}} 
            animate={{x:direction === "left" ? "-100%" : "0"}} 
            transition={{ease:"linear" , duration:12 ,  repeat: Infinity }} 
            className="flex flex-shrink-0 gap-20 py-5 pr40 ">   
            {imgurl.map((url, index )=> <img key={index} src={url} className='w-28 h-10  invert brightness-0'/>)}
            </motion.div>

                        <motion.div
             initial={{x: direction === "left" ? "0" : "-100%"}} 
            animate={{x:direction === "left" ? "-100%" : "0"}} 
            transition={{ease:"linear" , duration:12 ,  repeat: Infinity }} 
            className="flex flex-shrink-0 gap-20 py-5 pr40 ">   
            {imgurl.map((url, index )=> <img key={index} src={url} className='w-28 h-10  invert brightness-0'/>)}
            </motion.div>
        
           
        </div>
    )
}

export default Marquee