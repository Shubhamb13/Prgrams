import { useEffect } from "react";
import "./Port.scss"
import { gsap } from "gsap";
const Port = () =>{
    
   
    return(
        <div className="" >
            <div className="nav">
                <nav className=" container  flex items-center justify-between">
                    <div className="">
                        <a href="#" className="text-3xl font-bold sm:text-3xl">Shubham Bhadarage</a>
                    </div>
                    <div className="nav-items flex items-center space-x-11 ">
                        <ul className="flex ">
                            <li className="md:m-6" ><a href="#" className="text-black hover:text-yellow-600 font-bold ">HOME</a></li>
                            <li className="md:m-6"><a href="#" className="text-black hover:text-yellow-600 font-bold ">SKILLS</a></li>
                        </ul>
                        <button className="bg-black text-white px-8 py-2 font-bold hover:text-yellow-400  md:w-fit rounded">Full Screen</button>
                    </div>
                </nav>
            </div>
            <div className=" main  ">
                <div className="main1">
                     <h2 className="text-4xl font-bold"> Hello I'm Shubham Bhadarage</h2><br />
                     <h2 className="text-4xl font-bold">Frontend Developer</h2><br />
                     <h5 className="text-xl text-black-200">I hope You are doing Well</h5>
                     <div className="btn">
                        <button className=" btn1 bg-black text-white px-8 py-2 font-bold hover:text-yellow-400  md:w-fit rounded ">Hire Me</button>
                        <button className="bg-white text-black px-8 py-2 font-bold hover:text-yellow-400  md:w-fit rounded">Resume <i className="fa-solid fa-download"></i> </button>
                        <div className="flex justify-item  flex mt-5 ml-20 gap-5">
                        <ul className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"><i className="fa-brands fa-github"></i></ul>
                        <ul className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"><i className="fa-brands fa-linkedin"></i></ul>
                        <ul className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"><i className="fa-brands fa-instagram"></i></ul>
                        </div>
                     </div>
                </div>
                <div className="main2">
                   <img src={"https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_1280.jpg"} alt=""  className="mimg " />
                   
                </div>
            </div><br />
            <section className="sec">
                <div>
                    <h1 className=" text-3xl font-black text-gray-400 ">My Skills</h1><hr className="" /><br />
                    <h5 className="text-gray-400">Here are my skills</h5>
                </div><br /><br />
                    
              <div className="flex">
                <div className="flex1">
                    <ul>
                        <li>Html </li>
                        <li>CSS </li>
                        <li>javascript</li>
                        <li>Tailwind Css</li>
                    </ul>
                </div>
                <div className="flex2">
                    <div>
                        React.js
                    </div>
                    <div>
                        node.js
                    </div>
                </div>
              </div>
             </section>
        </div>
    )
}
export default Port