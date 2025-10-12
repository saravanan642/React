import React from 'react'
import slider4 from "../assests/slider4.jpg"
import slider5 from "../assests/slider5.jpg"


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
          <p className=' text-left'> lacinia nisi vitae velit volutpat venenatis.</p>
        </div>

        <div className=' border border-none mt-[30px] text-left'>
          <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus</p>
          <p>urna mattis. Ut placerat, diam a tempus vehicula.</p>
        </div>
        <div>
          <div className='flex  border border-none mt-[30px]'>
            <img src={slider5} alt='slider5'></img>

          </div>
          <div className=' border border-none '>
            <p>Dr. Neil Jackson</p>
            <p>General Principal</p>
          </div>
        </div>
      </div>

      <img src={slider4} alt="slider " className=' border border-none m-[30px] w-[95%] h-[700px] overflow-x-hidden'></img>

    </div>
  )
}

export default About
