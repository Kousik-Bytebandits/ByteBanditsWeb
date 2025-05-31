import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/index.css';

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigation = (item) => {
    setSidebarOpen(false);
    if (item.href.startsWith("#")) {
   
      navigate("/", { state: { scrollTo: item.href.substring(1) } });
    } else {

      navigate(item.href);
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-section" },
    { name: "Services", href: "#service-section" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "#blog-section" },
    {name:"Careers", href:'/career'},
  ];

  return (
    <>
      <div className="navbar-container fixed top-0 left-0 w-full flex justify-between items-center text-white z-[1000] px-[10px] sm:px-[10px] md:px-[40px]">
        <Link to="/">
          <div className="logo-box flex items-center gap-2.5 bg-[#353639] px-12 py-8 rounded-b-xl">
            <img src="/images/header.png" alt="Logo" className="w-[180px] h-auto object-cover" />
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
        } w-full sm:w-[80%] lg:w-[500px] h-screen bg-[#f5f5f5] transition-all duration-300 ease-in-out shadow-lg z-[999]`}
      >
        <ul className="sidebar-links list-none px-[30px] sm:px-[45px] mt-[25%] sm:mt-[20%] leading-[60px] sm:leading-[70px]">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="py-3 md:text-[22px] sm:text-[18px] font-bold cursor-pointer nav-content"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
