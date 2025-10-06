import React from 'react'
import slider1 from '../assests/slider1.jpg'

const Home = () => {
  return (
    <div>

      <div className=" text-center  mb-1 relative top-[400px] right-[450px]   font-bold">
        <p className='  border border-none p-[3px]'>LET'S MAKE YOUR LIFE HAPPIER</p>
        <h1 className=' border border-none p-[3px] text-5xl '>Healthy Living</h1>
        <button className=' border border-solid m-5 p-4 bg-green-700 rounded-[20px]'>Meet Our Docters</button>


      </div>
      <img src={slider1} alt="slider " className=" w-full h-[90vh]"></img>


    </div>
  )
}

export default Home

