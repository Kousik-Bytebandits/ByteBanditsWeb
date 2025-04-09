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
      <div className="fixed top-0 left-15 w-[90%] flex justify-between items-center text-white z-[1000]">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 px-12 py-6 bg-[#353639] rounded-b-xl">
  <img src="/header.png" alt="Logo" className="w-35 h-15 rounded-md object-cover" />
</div>


        {/* Mail & Menu Button Group */}
        <div className="flex bg-[#d8d8d8] px-2 py-2 rounded-full cursor-pointer gap-2 mt-4">
          {/* Email Icon */}
          <div
            className="text-[30px] text-[#ff9b42] bg-black px-3 py-3 rounded-full"
            onClick={scrollToContact}
          >
            <TfiEmail />
          </div>

          {/* Menu Toggle Icon */}
          <div
            className="text-[30px] text-[#ff9b42] bg-black px-3 py-3 rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          isSidebarOpen ? "right-0" : "right-[-100%]"
        } w-[500px] sm:w-full h-screen bg-[#f5f5f5] transition-all duration-300 ease-in-out shadow-lg z-[999]`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-[22px] text-[#ff9b42]"
        >
          <FiX />
        </button>

        {/* Navigation Links */}
        <ul className="list-none px-[45px] mt-[20%] leading-[70px]">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="py-4 text-[18px] font-bold cursor-pointer"
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

        {/* Sidebar Footer */}
        <div className="bg-[#2a9d8f] p-10 flex justify-center gap-[70px] mt-[100px]">
          <a href="#" className="text-white text-[20px]">
            FB
          </a>
          <a href="#" className="text-white text-[20px]">
            TW
          </a>
        </div>
      </div>
    </>
  );
}
