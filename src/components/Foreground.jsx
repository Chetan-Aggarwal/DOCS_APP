import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref= useRef(null);


   const data = [
    {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae diam ornare, mollis dui at.",
filesize: ".9mb", close: true, tag:{isOpen:true, tagTitle:"Download Now", tagcolor:"green" },
 },
 {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae diam ornare, mollis dui at.",
filesize: ".9mb", close: false, tag:{isOpen:true, tagTitle:"Download Now", tagcolor:"blue" },
 },
 {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae diam ornare, mollis dui at.",
filesize: ".9mb", close: true, tag:{isOpen:true, tagTitle:"Upload", tagcolor:"green" },
 },
   ];

  return (
    
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
           {data.map((items,index)=>(
            <Card data={items} reference={ref}></Card>
           ))}
          
        </div> 
  
  )
}

export default Foreground
