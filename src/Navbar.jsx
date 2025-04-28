import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";
import './index.css';
import{Link} from 'react-router-dom'
export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if (isSidebarOpen) setSidebarOpen(false);
  };

  return (
    <>
      <div className="navbar-container fixed top-0 left-0 w-full flex justify-between items-center text-white z-[1000] px-[10px] sm:px-[10px] md:px-[40px]  ">
       <Link to="/">
        <div className="logo-box flex items-center gap-2.5 bg-[#353639] px-12 py-8 rounded-b-xl ">
          <img src="/header.png" alt="Logo" className="w-[180px] h-auto object-cover" />
        </div>
        </Link>

        <div className="navbar-icons flex bg-[#d8d8d8] px-3 py-3 rounded-full cursor-pointer gap-2">
         <Link to="/contact">
          <div
            className="navbar-icon text-[20px] sm:text-[24px] md:text-[30px] text-[#ff9b42] bg-[#353639] px-4 py-4 rounded-full"
            onClick={scrollToContact}
          >
            <TfiEmail />
          </div>
          </Link>

          <div
            className="navbar-icon text-[20px] sm:text-[24px] md:text-[30px] text-[#ff9b42] bg-[#353639] px-4 py-4 rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      <div
        className={`sidebar fixed top-0 ${
          isSidebarOpen ? "right-0" : "right-[-100%]"
        } w-full sm:w-[80%] md:w-[60%] lg:w-[500px] h-screen bg-[#f5f5f5] transition-all duration-300 ease-in-out shadow-lg z-[999]`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-[20px] sm:text-[22px] md:text-[24px] text-[#ff9b42]"
        >
          
        </button>

        <ul className="sidebar-links list-none px-[30px] sm:px-[45px] mt-[25%] sm:mt-[20%] leading-[60px] sm:leading-[70px]">
  {[
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" }
  ].map((item) => (
    <li
      key={item.name}
      className="py-3 text-[16px] sm:text-[18px] font-bold cursor-pointer"
    >
      <Link
        to={item.link}
        onClick={() => setSidebarOpen(false)}
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

        <div className="sidebar-socials bg-[#2a9d8f] p-8 sm:p-10 flex justify-center gap-[40px] sm:gap-[70px] mt-[60px] sm:mt-[100px]">
          <a href="#" className=" text-white text-[18px] sm:text-[20px]">
            FB
          </a>
          <a href="#" className=" text-white text-[18px] sm:text-[20px]">
            TW
          </a>
        </div>
      </div>
    </>
  );
}
