import LOGO from "../assests/7.jpg"
function Home() {
    return (
        <div>
            <div className=" bg-blue-500 flex px-4 py-3  gap-5 justify-around" >
                <div className=" font-bold flex gap-2 " >
                    <img src={LOGO}  alt="logo" className=" w- 8 h-6  rounded-3xl"/>
                    <h1>HEADER</h1>
                </div>
                <div className="  text-white  gap-10 flex justify-end">
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Serives</a>
                </div>
            </div>


        </div>

    )
} export default Home