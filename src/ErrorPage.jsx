import Navbar from "./Navbar";
import { FaPoop } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="bg-[#ececea] relative min-h-screen bg-[#f5f5f3] overflow-hidden">
      <Navbar />

      {/* Floating 3D shapes with custom rem positions and sizes */}
      <img
        src="shape-1.png"
        alt="Orange Shape"
        className="absolute floating shape-1 top-[-25rem] left-[-32.5rem] w-[59.75rem] z-0"
      />
      <img
        src="shape-3.png"
        alt="White Shape"
        className="absolute floating shape-3 top-[30rem] left-[-24rem] w-[44.375rem] z-0"
      />
      <img
        src="shape-2.png"
        alt="Green Shape"
        className="absolute floating shape-2 top-[1.5rem] right-[-30.5rem] w-[50.5rem] h-[57.5rem] z-0"
      />
      <img
        src="shape-4.png"
        alt="Loop Shape"
        className="absolute floating shape-4 top-[20.125rem] left-[33.75rem] w-[7.5rem] z-[100]"
      />

      {/* Centered 404 Content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10 px-[1rem]">
        
         <FaPoop className="text-[2.2rem] text-black mb-[0.5rem]" />
        <p className="text-sm tracking-widest uppercase text-[#37363a] font-bold mb-[4.5rem]">Oops!</p>
        <h1 className="text-[5.75rem] md:text-[10rem] font-[anton] uppercase text-[#353639] leading-none tracking-wide ">
          <span className="inline-block mr-[0.5rem] ">Error</span>
          <span className="text-[#3bc68f] mx-5">404</span>
        </h1>
        <p className="mt-[1rem] text-[#d7d7d5] text-[3.525rem] uppercase font-[anton] font-normal">Looks like you got lost</p>

       <Link to='/'><button className="mt-[2rem] px-[3rem] py-[1.5rem] text-[0.85rem] year font-semibold tracking-widest uppercase border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          Back to Homepage
        </button></Link> 
      </div>
    </div>
  );
}
