import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdOutlineFileDownload, MdScale } from "react-icons/md";
import {motion} from "framer-motion"


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-zinc-300 py-10 px-8 overflow-hidden'>
<FaRegFileAlt></FaRegFileAlt>
<p className='text-xs mt-5 font-semibold leading-tight ' >{data.desc}</p>

<div className='footer absolute bottom-0 w-full   left-0 '>
<div className='flex justify-between items-center mb-4 py-3 px-8 '>
      <h4>{data.filesize}</h4>
      
     <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
     {data.close ? <IoIosClose size="0.9em"  color='#fff' ></IoIosClose> :  <MdOutlineFileDownload size="0.9em"  color='#fff'></MdOutlineFileDownload>}
    
     </span>  
</div> 
{
  data.tag.isOpen&& (<div className={`tag w-full py-4 ${data.tag.tagcolor==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
    <h3 className='text-sm font-semibold  ' >{data.tag.tagTitle}</h3>
</div>)  }

</div>
    </motion.div>
  )
}

export default Card
