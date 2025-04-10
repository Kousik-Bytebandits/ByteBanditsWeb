import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";

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
      <div className="fixed top-0 left-0 w-full flex justify-between items-center text-white z-[1000] px-[10px] sm:px-[20px] md:px-[40px] ">
        <div className="flex items-center gap-2.5 bg-[#353639] px-6 py-4 rounded-b-xl">
          <img src="/header.png" alt="Logo" className="w-[120px] h-auto object-cover" />
        </div>

        <div className="flex bg-[#d8d8d8] px-2 py-2 rounded-full cursor-pointer gap-2">
          <div
            className="text-[20px] sm:text-[24px] md:text-[30px] text-[#ff9b42] bg-black px-3 py-3 rounded-full"
            onClick={scrollToContact}
          >
            <TfiEmail />
          </div>

          <div
            className="text-[20px] sm:text-[24px] md:text-[30px] text-[#ff9b42] bg-black px-3 py-3 rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 ${
          isSidebarOpen ? "right-0" : "right-[-100%]"
        } w-full sm:w-[80%] md:w-[60%] lg:w-[500px] h-screen bg-[#f5f5f5] transition-all duration-300 ease-in-out shadow-lg z-[999]`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-[20px] sm:text-[22px] md:text-[24px] text-[#ff9b42]"
        >
          
        </button>

        <ul className="list-none px-[30px] sm:px-[45px] mt-[25%] sm:mt-[20%] leading-[60px] sm:leading-[70px]">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="py-3 text-[16px] sm:text-[18px] font-bold cursor-pointer"
              onClick={() => {
                if (item === "Contact") {
                  scrollToContact();
                } else {
                  setSidebarOpen(false);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-[#2a9d8f] p-8 sm:p-10 flex justify-center gap-[40px] sm:gap-[70px] mt-[60px] sm:mt-[100px]">
          <a href="#" className="text-white text-[18px] sm:text-[20px]">
            FB
          </a>
          <a href="#" className="text-white text-[18px] sm:text-[20px]">
            TW
          </a>
        </div>
      </div>
    </>
  );
}
