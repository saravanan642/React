import React from 'react'
import slider4 from "../assests/slider4.jpg"


const About = () => {
  return (
    <div className=' '>
      <div className=" text-center  mb-1  absolute top-[1300px] right-[55%]   font-bold  z-10">
        <div className=' flex gap-[10px]'>
          <h2 className='border border-none p-[3px] font-bold text-4xl '>Welcome to Your </h2>
          <div className='flex g-[10px]'>
            <span class="bg-black  border border-none p-[3px] font-bold text-4xl text-white  mt-[5px] ">H</span>
            <h2 className='border border-none p-[3px] font-bold text-4xl'>ealth </h2>
          </div>
        </div>
        <div className=' border border-none mt-[30px]'>
          <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur</p>
          <p>lacinia nisi vitae velit volutpat venenatis.</p>
        </div>
      </div>
      <img src={slider4} alt="slider " className=' border border-none m-[30px] w-[95%] h-[700px] overflow-x-hidden'></img>

    </div>
  )
}

export default About
