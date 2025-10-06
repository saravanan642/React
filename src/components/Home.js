import React from 'react'
import slider1 from '../assests/slider1.jpg'

const Home = () => {
  return (
    <div>

      <div className=" text-center  mb-1 relative top-[400px] right-[450px] text-4xl">
        <p>LET'S MAKE YOUR LIFE HAPPIER</p>
        <h2>Healthy Living</h2>
        <button>Meet Our Docters</button>


      </div>
      <img src={slider1} alt="slider " className=" w-full h-[90vh]"></img>


    </div>
  )
}

export default Home

