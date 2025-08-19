import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

const Work = () => {


    const [images , setImages] = useState(
  [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89ade0ed64c35085a922_deethumbnail_4_3.png" , top: "50%" , left: "50%" , isActive: false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d429dd783017a5e1b10e_BCGP%20-%204%203.webp" , top: "56%" , left: "44%" , isActive: false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d62264feae5abf67700d_Rainfall%20-%204%203.webp" , top: "45%" , left: "56%" , isActive: false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694ef851adea7c86198b690_Botify%20-%204%203.webp" , top: "60%" , left: "53%" , isActive: false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203.webp" , top: "43%" , left: "40%" , isActive: false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5407cdf203d6e70483a_Showcase-%204%203.webp" , top: "65%" , left: "55%" , isActive: false},


    ]
    );

 const { scrollYProgress } = useScroll()

scrollYProgress.on("change" , (data)=>{
  function imagesShow(arr){
      setImages((prev)=> 
        prev.map((elem , index)=>
        arr.indexOf(index) === -1 ? {...elem , isActive:false} : {...elem , isActive:true}

      )
      );
  }
  switch(Math.floor(data*100)){
    case 0:
      imagesShow([]);
      break;
          case 1:
       imagesShow([0]);
      break;
          case 2:
       imagesShow([0,1]);
      break;
          case 3:
       imagesShow([0,1,2]);
      break;
          case 4:
      imagesShow([0,1,2,3]);
      break;
          case 5:
       imagesShow([0,1,2,3,4]);
      break;


      
  }
})


  return (


    <div className="w-full ">
            
    <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className="text-[30vw] leading-none font-medium select-none text-white tracking-tight ">work</h1>
        <div className="absolute w-full h-full top-0  ">
            {images.map((elem , index)=>(elem.isActive &&  <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top , left: elem.left}}></img>))}
        </div>
    </div>
    </div>
  )
}

export default Work