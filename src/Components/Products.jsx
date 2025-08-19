import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

const Products = () => {
var product = [
  { 
    title: "Arqitel", 
    description: "Lorem ipsum dolor sit amet...", 
    live: true, 
    case: false,
    video: "https://cdn.dribbble.com/userupload/23854044/file/original-5e84ed56c6b3568265f5fafb6a8e4ecc.gif"  // sample video link
  },
  { 
    title: "TTL", 
    description: "Lorem ipsum dolor sit amet...", 
    live: true, 
    case: false,
    video: "https://cdn.dribbble.com/userupload/42013360/file/original-800588d1f83fb447427299904ebf73c9.gif"
  },
  { 
    title: "YIR 2022", 
    description: "Lorem ipsum dolor sit amet...", 
    live: true, 
    case: true,
    video: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/9dce7252570863.5914e555c44a6.gif"
  },
  { 
    title: "Yahoo", 
    description: "Lorem ipsum dolor sit amet...", 
    live: true, 
    case: true,
    video: "https://cdn.dribbble.com/userupload/42270722/file/original-c574685a8f10c56431a43ff117ab803b.gif"
  },
  { 
    title: "Rainfall", 
    description: "Lorem ipsum dolor sit amet...", 
    live: true, 
    case: false,
    video: "https://cdn.dribbble.com/userupload/23854044/file/original-5e84ed56c6b3568265f5fafb6a8e4ecc.gif"
  }
]


    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val*21);
    }
    return (
        <div className=' bg-zinc-900 relative'>
            {product.map((val, index) => <Product key={index} val={val} mover={mover} count={index}/>)}

            <div className='absolute w-full h-full top-0 pointer-events-none '>
                <motion.div 
                initial={{ y: pos }}
                animate={{y:pos + `rem`}}
                transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.6}}
                 className="window absolute w-[26rem] h-[21rem] bg-fuchsia-600 left-[44%] -translate-x-[50%] rounded-2xl overflow-hidden ">
                    {/* <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}} className=" w-full h-full bg-fuchsia-800 "></motion.div>
                    <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}} className=" w-full h-full bg-fuchsia-600 "></motion.div>
                    <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}} className=" w-full h-full bg-fuchsia-500 "></motion.div>
                    <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}} className=" w-full h-full bg-fuchsia-400 "></motion.div>
                    <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}} className=" w-full h-full bg-fuchsia-300 "></motion.div> */}
                       
  {product.map((val, index) => (
  <motion.img
    key={index}
    src={val.video}
    alt={val.title}
    className="w-full h-full object-cover"
    animate={{ y: -pos + `rem` }}
    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
  />
))}

                </motion.div>
            </div>
        </div>
    )
}

export default Products