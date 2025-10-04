import slider1 from "../assests/slider1.jpg"
function Home() {
    return (
        <div>
            <div className=" flex  gap-44 justify-around px-3 py-3  border border-solid  " >
                <div>
                    <p>Welcome to a Professional Health Care</p>
                </div>

                <div className=" flex gap-10">
                    <p> 🖁010-060-0160</p>
                    <p> ⏱️6:00 AM - 10:00 PM (Mon-Fri)</p>
                    <p> 📧info@company.com</p>
                </div>
            </div>

            {/* header */}
            <div className="flex justify-between cursor-pointer">
                <div className=" px-60 py-10   font-bold ">
                    <span class="bg-green-400 "  >H</span>
                    <a href="#">ealth Center</a>
                </div>
                <div className=" justify-evenly flex" >
                    <div className="flex gap-10 font-bold py-10">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contacts</a>
                        <a href="#">Docters</a>
                        <a href="#">News</a>
                    </div>

                    <button class=" text-white font-semibold px-20 py-2 ">

                        <div className="bg-green-900 text-white font-semibold w-[200px] h-[50px] flex items-center justify-center rounded-lg cursor-pointer hover:bg-green-800 transition">
                            Make an Appointment
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div className=" text-center  mb-1">
                <p>LET'S MAKE YOUR LIFE HAPPIER</p>
              

                <h2>Healthy Living</h2>
                <button>Meet Our Docters</button>
        

                </div>
                <img src={slider1} alt="slider " className=" w-full h-[90vh]"></img>
            </div>

            <div>
                
            </div>




























        </div>

    )
} export default Home