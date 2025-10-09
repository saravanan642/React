import React from 'react'
import slider1 from '../assests/slider1.jpg'
import slider2 from "../assests/slider2.jpg"


const Home = () => {
  return (
    <div>
      <div className='flex flex-col'> 
        <div className=' relative'>
          <div className=" text-center  mb-1  absolute top-[500px] right-[65%]   font-bold  z-10">
            <p className='  border border-none p-[3px]'>LET'S MAKE YOUR LIFE HAPPIER</p>
            <h1 className=' border border-none p-[3px] text-5xl '>Healthy Living</h1>
            <button className=' border border-solid m-5 p-4 bg-green-700 rounded-[20px]'>Meet Our Docters</button>
          </div>
          <img src={slider1} alt="slider  gap-[20px] " className='h-[1000px]  '></img>
        </div>

      



      </div>

    </div>

  )
}

export default Home

