import React from 'react'
import { Link } from "react-router-dom";
import slider1 from '../assests/slider1.jpg'
import slider2 from "../assests/slider2.jpg"
import About from './About'
import Contacts from './Contacts';


const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div className='flex flex-col sticky'>

            <div className=" text-center  mb-1  absolute top-[500px] right-[65%]   font-bold  ">
              <p className='  border border-none p-[3px]'>LET'S MAKE YOUR LIFE HAPPIER</p>
              <h1 className=' border border-none p-[3px] text-5xl '>Healthy Living</h1>
              <div className='border border-none mt-[30px]'>
                <Link to='/about' className=' border border-solid m-5 p-4 bg-green-700 rounded-[20px]'>Meet Our Docters</Link>
              </div>
            </div>

          </div>
          <img src={slider1} alt="slider  gap-[20px] " className='h-[1000px]  '></img>
        </div>


        <About />
        <Contacts/>



      </div >

    </div >

  )
}

export default Home

