import React from 'react'
import slider4 from "../assests/slider4.jpg"


const About = () => {
  return (
    <div className=' '>
      <div className=" text-center  mb-1  absolute top-[1500px] right-[65%]   font-bold  z-10">

        <div className='flex  gap-[20px]'>
          <div className='flex gap-[8px]'>
            <h2 className='border border-none p-[3px] font-bold text-4xl'>Welcome to Your </h2>
            <span class="bg-black  border border-none p-[3px] font-bold text-4xl text-white  inline "  >H</span>
            <h2 className='border border-none p-[3px] font-bold text-4xl'>ealth </h2>
          </div>
        </div>

        <h1 className=' border border-none p-[3px] text-5xl '>Healthy Living</h1>
        <button className=' border border-solid m-5 p-4 bg-green-700 rounded-[20px]'>Meet Our Docters</button>
      </div>
      <img src={slider4} alt="slider " className=' border border-none m-[30px] w-[95%] h-[700px] overflow-x-hidden'></img>
    
    </div>
  )
}

export default About
