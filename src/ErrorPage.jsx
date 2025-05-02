import Navbar from "./Navbar";
import { FaPoop } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="error-section bg-[#ececea] relative min-h-screen bg-[#f5f5f3] overflow-hidden">
      <Navbar />
     <div className="error-shapes">
      {/* Floating 3D shapes with custom rem positions and sizes */}
      <img
        src="shape-1.png"
        alt="Orange Shape"
        className="absolute floating ershape-1 md:top-[-25rem] md:left-[-32.5rem] w-[59.75rem] z-0"
      />
      <img
        src="shape-3.png"
        alt="White Shape"
        className="absolute floating ershape-3 md:top-[30rem] md:left-[-24rem] w-[44.375rem] z-0"
      />
      <img
        src="shape-2.png"
        alt="Green Shape"
        className="absolute floating ershape-2 md:top-[1.5rem] md:right-[-30.5rem] w-[50.5rem] h-[57.5rem] z-0"
      />
      <img
        src="shape-4.png"
        alt="Loop Shape"
        className="absolute floating ershape-4 md:top-[20.125rem] md:left-[33.75rem] w-[7.5rem] z-[100]"
      />
      </div>
      {/* Centered 404 Content */}
      <div className="error-container flex flex-col items-center justify-center min-h-screen text-center relative z-10 px-[1rem]">
        
         <FaPoop className="poop text-[2.2rem] text-black mb-[0.5rem]" />
        <p className="poop-para text-sm tracking-widest uppercase text-[#c5c5c3] font-bold mb-[4.5rem]">Oops!</p>
        <h1 className="error-head text-[5.75rem] md:text-[10rem] font-[anton] uppercase text-[#353639] leading-none tracking-wide ">
          <span className="inline-block mr-[0.5rem] ">Error</span>
          <span className="text-[#3bc68f] mx-5">404</span>
        </h1>
        <p className="error-para mt-[1rem] text-[#d7d7d5] text-[3.525rem] uppercase font-[anton] font-normal">Looks like you got lost</p>

       <Link to='/'><button className="error-button mt-[3rem] px-[3rem] py-[1.5rem] text-[0.85rem] year font-semibold tracking-widest uppercase border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          Back to Homepage
        </button></Link> 
      </div>
    </div>
  );
}
