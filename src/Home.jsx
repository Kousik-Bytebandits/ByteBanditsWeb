import Solution from "./Solution";
import Blog from "./Blog";
import Navbar from "./Navbar";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

import "./App.css";

export default function AnimatedWebsite() {
  
  
  return (
    <div className="w-full overflow-x-hidden bg-[whitesmoke] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center   uppercase text-[#353639]  overflow-hidden">
  {/* Floating 3D shapes */}
  <img src="shape -1.png" alt="Orange Shape" className="floating absolute top-[-400px] left-[-550px] w-[900px] z-0" />
  <img src="shape-3.png" alt="White Shape" className="floating absolute top-[270px] right-[1300px] w-[600px]  z-100" />
  <img src="shape-2.png" alt="Green Shape" className="floating absolute top-[-70px] right-[-500px] w-[800px] h-[700px] z-0" />
  <img src="shape-4.png" alt="Loop Shape" className="floating absolute top-[170px] left-[200px] w-[100px] z-100" />
  <img src="shape-5.png" alt="Loop Shape" className="floating absolute bottom-[170px] right-[450px] w-[100px] z-100" />

  {/* Animated Title */}
  {[
    "TECH THAT TALKS",
    "DESIGN THAT",
    "DAZZLES"
  ].map((line, lineIndex) => (
    <div
      key={lineIndex}
      className="  flex flex-wrap justify-center  text-[115px] leading-[110px] tracking-[1px] text-center  "
    >
      {line.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-300 hover:scale-y-120 origin-bottom ${
            char === " " ? "" : ""
          }`}
        >
          {char}
        </span>
      ))}
      
    </div>
    
  ))}
<p className="year">Since 2024</p>
  

</section>



      {/* Image Section */}
      <section className="h-screen">
        <img src="hero.png" alt="Hero" className="w-full h-90% object-cover " />
      </section>

      {/* About Section */}
      <section className="max-w-[1200px] mx-auto py-[100px] px-[50px] text-[#333]">
        <p className="text-left mb-10">About Us</p>
        <div className="flex gap-8">
          <div className="flex-1 text-4xl  font-bold">
            DISCOVER <br /> OUR <span className="text-green-400">AGENCY</span>
            <div className="border-l-4 border-orange-500 pl-[30px] text-sm mt-30 max-w-[400px] font-inter text-[#666] ">
            <p >
              Welcome to <span className="text-green-400">Byte Bandits</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
            </p>
            </div>
            
          </div>
          <div className="flex-2  text-base leading-relaxed max-w-[600px] text-[#444]">
           
            <p >
              At <span className="text-green-400">Byte Bandits</span>, we believe technology is more than just functionality — it&apos;s about building emotional connections through digital experiences. Our mission is to combine your vision with our technical and creative expertise to craft solutions that not only engage and inspire, but also drive growth.
              Using the latest tools, modern frameworks, and bold ideas, we turn concepts into impactful products. Whether it&apos;s a brand, a platform, or an app — when you trust us with your idea, we don&apos;t just build it — we elevate it. The result? A solution that leaves a lasting impression on your users — and on your business.
            </p>
            <p>We specialize in creating powerful brands, smart marketing strategies, and standout digital experiences. Our team of skilled developers, designers, marketers, and content creators works with passion and precision to help your business shine in the digital space.
We don’t just build – we listen, strategise, and craft solutions that align with your goals. Whether it’s a website, app, ad campaign, or a full-scale product launch, we tailor every move to make sure your brand connects with the right audience, at the right time, on the right platform.
</p>
          </div>
        </div>

        <div className="flex justify-center gap-[100px] mt-[150px]">
  {[
    {
      img: "shape-7.png",
      title: "EXPERT TEAM",
      desc: "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
    },
    {
      img: "shape-8.png",
      title: "INNOVATIVE SOLUTIONS",
      desc: "We offer unique and creative approaches that help your business stand out in the market and achieve success.",
    },
    {
      img: "shape-9.png",
      title: "CLIENT FOCUS",
      desc: "We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.",
    },
  ].map((item, i) => (
    <div key={i} className="text-center max-w-[300px]">
      <img
        src={item.img}
        alt={item.title}
        className={`${i === 0 ? "w-[142px]" : "w-[108px]"} mx-auto`}
      />
      <p className={`${i===0 ? "mt-2": "mt-10"} font-anton text-lg font-bold `}>{item.title}</p>
      <p className="text-sm text-[#666] mt-1">{item.desc}</p>
    </div>
  ))}
</div>

      </section>

      <section>
         <Solution />
      </section>
 
      <section className="bg-[#3a3a3c] text-white py-20 px-11  text-center font-poppins">
  <p className="text-xs uppercase text-gray-400 tracking-widest mb-3 text-left px-32">
    Our Clients
  </p>
  <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-left px-32">
    Where <span className="text-red-400">Bold</span> Ideas Become<br />
    Iconic <span className="text-orange-300">Brands.</span>
  </h2>

  {/* Clients Logos */}
  <div className="flex justify-center flex-wrap gap-15 mt-16">
    {[
      "image 51.png", 
      "image 52.png",
      "image 53.png",
      "image 54.png",
      "image 55.png",
    ].map((logo, index) => (
      <div
        key={index}
        className="w-[200px] h-[200px] bg-none p-3 rounded-sm  hover:scale-105 transition-transform duration-300"
      >
        <img
          src={logo}
          alt={`Client ${index + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
    ))}
  </div>
</section>

<section className="bg-[#f9f9f9] text-gray-900 py-20 px-10 font-poppins">
  <div className="max-w-[1300px] mx-auto">
    {/* Subheading */}
    <p className="text-xs uppercase text-gray-500 tracking-widest mb-3 text-left">
      Our Tools
    </p>

    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-left mb-12">
      Our <span className="bg-gradient-to-r text-[#844BA6] bg-clip-text">Technology</span> Stack
    </h2>

    {/* Grid of Tool Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
      {[
        { name: "Photoshop", img: "image 31.png" },
        { name: "Illustrator", img: "image 35.png" },
        { name: "Figma", img: "image 30.png" },
        { name: "Premiere Pro", img: "image 33.png" },
        { name: "After Effects", img: "image 34.png" },
        { name: "Java", img: "image 41.png" },
        { name: "React", img: "image 37.png" },
        { name: "Node.js", img: "Mask group.png" },
        { name: "React Native", img: "image 40.png" },
        { name: "Python", img: "image 39.png" },
        { name: "MongoDB", img: "mongo.png" },
        { name: "Redis", img: "image 47.png" },
        { name: "MySQL", img: "image 48.png" },
        { name: "SQL Server", img: "image 49.png" },
        { name: "AWS", img: "image 50.png" },
      ].map((tool, index) => (
        <div
          key={index}
          className="w-[200px] h-[200px] border-2 border-purple-300 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-purple-50"
        >
          <img
            src={tool.img}
            alt={tool.name}
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

<section className="w-full font-poppins">
  {/* Contact Section */}
 
<div className="flex flex-col md:flex-row h-auto md:h-[500px] w-full">
  {/* Left Content */}
  <div className="bg-[#2c2c2c] text-white flex flex-col justify-left md:items-center items-start px-10 py-14 md:w-1/2 space-y-6">
    <p className="text-xs uppercase text-gray-400  pl-3">
      Contact
    </p>
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-left">
      LET’S <span className="text-orange-400">MAKE</span><br />
      AN <span className="text-orange-400">IMPACT</span><br />
      TOGETHER.
    </h2>
    <p className="text-sm text-gray-300 max-w-sm text-left border-l-4 border-orange-400 px-5 ml-25">
      Welcome to <span className="text-teal-400 font-semibold">BYTEBANDITS</span> where your ideas come to life. 
      We specialize in crafting unique brands, captivating campaigns, and effective digital strategies.
    </p>
    <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-all">
      CONTACT
    </button>
  </div>

    {/* Right Image */}
    <div className="md:w-1/2 w-full h-[300px] md:h-auto">
      <img
        src="IMG2.jpg" 
        alt="Team working"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Our Agency Section */}
  <div className="bg-white text-center py-20 px-6">
    <p className="text-xs uppercase text-gray-500 mb-4">Our Agency</p>
    <h2 className="text-3xl md:text-4xl font-black leading-relaxed max-w-6xl mx-auto mb-6">
      <span className="text-[#FAAC61]">BYTEBANDITS</span> IS WHERE BOLD IDEAS BECOME
      <span className="text-[#FAAC61]"> POWERFUL</span> DIGITAL
      <span className="text-[#FAAC61]"> REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN
      WITH PURPOSE, AND BRING <span className="text-[#FAAC61]">BRANDS TO LIFE</span>.
      CHOOSE <span className="text-[#FAAC61]">BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.
    </h2>
    <div className="flex justify-center items-center mt-8 gap-6 ">
    <p className="mt-4 text-xs text-gray-500 ">
      We may be new, but we’re already building a portfolio we’re proud of.
    </p>
    <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-all">
      VIEW PORTFOLIO
    </button>
    </div>
  </div>
</section>

{/* Tapes X Section */}
<section className="relative w-full h-[500px] bg-white overflow-hidden">
  {/* Tape 1 - Diagonal from top left to bottom right */}
  <img
    src="tape-1.png"
    alt="Tape 1"
    className="absolute top-1/2 left-0 w-[700%] rotate-[15deg] -translate-y-1/2 z-0"
  />

  {/* Tape 2 - Diagonal from bottom left to top right */}
  <img
    src="tape-2.png"
    alt="Tape 2"
    className="absolute top-1/2 left-0 w-[700%] rotate-[-15deg] -translate-y-1/2 z-0"
  />

  {/* 3D Shape in Center */}
  <div className="relative z-10 flex justify-center items-center h-full">
    <img
      src="shape-5.png"
      alt="3D Shape"
      className="w-[100px] h-[100px] object-contain"
    />
  </div>
</section>


{/* Blog Section */}
<Blog />
{/* Let's Talk Section */}
<section className="w-full py-16 px-40 bg-white text-left">
  <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#454545] tracking-wide mb-15">
    Let&apos;s Talk
  </h2>
</section>

{/* Footer Section */}
<footer className="bg-[#2e2e30] text-white pt-16 pb-6">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Logo + About */}
    <div>
    <div className="w-[100px] mb-4">
  <img
    src="ByteBandits 2.png" 
    alt="Byte Bandits Logo"
    className="w-full h-auto object-contain"
  />
</div>

      
      <p className="mt-4 text-sm text-gray-300">
        We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
      </p>
    </div>

    {/* Office Info */}
    
     
      <div className="flex flex-col gap-2 text-sm text-gray-300">
      <h4 className="text-sm font-semibold mb-4 text-gray-400">OFFICE</h4>
  <div className="flex items-start gap-2">
    <MdLocationOn className="text-lg mt-[2px]" />
    <p>
      plot no.3a, door no.1/1033,<br />
      kumudham nagar extension,<br />
      mugaliivakkam, Chennai -600125
    </p>
  </div>

  <div className="flex items-center gap-2">
    <MdPhone className="text-lg" />
    <p>Phone: +91 79048 12982</p>
  </div>

  <div className="flex items-center gap-2">
    <MdEmail className="text-lg" />
    <p>Email: <a href="mailto:bbtechworks@gmail.com" className="underline">bbtechworks@gmail.com</a></p>
  </div>
</div>


    {/* Links */}
    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-400">LINKS</h4>
      <ul className="space-y-2 text-sm text-gray-300 underline">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-400">SOCIAL MEDIA</h4>
      <div className="flex flex-wrap gap-3">
        <a href="#"><img src="image 23.png " alt="Instagram" className="w-6 h-6" /></a>
        <a href="#"><img src="image 24.png" alt="WhatsApp" className="w-6 h-6" /></a>
        <a href="#"><img src="Group 21.png" alt="LinkedIn" className="w-6 h-6" /></a>
        <a href="#"><img src="image 27.png " alt="Twitter" className="w-6 h-6" /></a>
        <a href="#"><img src="image 28.png " alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src="image 26.png" alt="Threads" className="w-6 h-6" /></a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-gray-400 text-sm mt-10 border-t border-[#444] pt-4">
    Copyright © byte Bandits. All Rights Reserved.
  </div>
</footer>


    </div>
  );
}
