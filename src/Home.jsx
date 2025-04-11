import Solution from "./Solution";
import Blog from "./Blog";
import Navbar from "./Navbar";
import CrossedTape from "./CrossedTape";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import "@fontsource/inter"; 
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./App.css";

export default function AnimatedWebsite() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  return (
    <div className="w-full overflow-x-hidden bg-[whitesmoke] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] flex flex-col justify-center items-center text-center ...">

  {/* Floating 3D shapes */}
  <img src="shape -1.png" alt="Orange Shape" className="floating absolute top-[-430px] left-[-590px] w-[1000px] z-0" />
  <img src="shape-3.png" alt="White Shape" className="floating absolute top-[300px] right-[1550px] w-[850px]  z-100" />
  <img src="shape-2.png" alt="Green Shape" className="floating absolute top-[-120px] right-[-650px] w-[1000px] h-[1000px] z-0" />
  <img src="shape-4.png" alt="Loop Shape" className="floating absolute top-[160px] left-[480px] w-[120px] z-100" />
  <img src="shape-5.png" alt="Loop Shape" className="floating absolute top-[470px] right-[660px] w-[130px] z-100" />

  {/* Animated Title */}
  {["TECH THAT TALKS", "DESIGN THAT", "DAZZLES"].map((line, lineIndex) => (
  <div
    key={lineIndex}
    className=" flex flex-wrap justify-center items-center text-[60px] sm:text-[40px] md:text-[90px] lg:text-[120px] sm:leading-[50px] md:leading-[100px] lg:leading-[140px] font-[anton] text-[#353639] sm:space-x-4 lg:space-x-6  "
  >
    {line.split(" ").map((word, wIndex) => (
      <div key={wIndex} className="flex  ">
        {word.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform dura[#8F8F8F] hover:scale-y-110 origin-bottom"
          >
            {char}
          </span>
        ))}
      </div>
    ))}
  </div>
))}

<p className="year text-[25px]  ">SINCE 2024</p>
  

</section>



<section
      ref={scrollRef}
      className="w-full h-[60vh] sm:h-[50vh] md:h-[70vh] mb-10 relative ">
      {/* Background Image */}
      <img
        src="hero.png"
        alt="Hero"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Scroll Down Icon */}
      <motion.img
        src="scroll-down.png"
        alt="Scroll Down"
        style={{ rotate }}
       className="absolute -top-21 right-42 w-40 h-40 z-30"
      />
    </section>

 {/* About Section */}
 <section className=" mx-50  sm:py-[80px]  sm:px-[30px] md:px-[50px] text-[#333]">
        <p className="text-left mb-10 text-[14px] sm:text-[14px] text-[#818181] year">ABOUT US</p>
        <div className="flex flex-col lg:flex-row  items-start">
          <div className="flex-1 text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.3] font-[anton]">
            DISCOVER <br /> OUR <span className="text-[#50BD8A]">AGENCY</span>
            <div className="border-l-4 border-[#FAAC61] pl-[20px] text-[14px] sm:text-[15px] mt-[50px] max-w-[400px]  text-[#666]">
              <p className="about mt-15">
                Welcome to <span className="text-[#50BD8A]">Byte Bandits</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
              </p>
            </div>
          </div>
          <div className="flex-1 text-[14px] sm:text-[16px] leading-relaxed text-[#444] mt-6 lg:mt-0 ">
            <p className="about">
              At <span className="text-[#50BD8A] ">Byte Bandits</span>,we believe technology is more than just functionality — it&apos;s about building emotional connections through digital experiences. Our mission is to combine your vision with our technical and creative expertise to craft solutions that not only engage and inspire, but also drive growth.
              Using the latest tools, modern frameworks, and bold ideas, we turn concepts into impactful products. Whether it&apos;s a brand, a platform, or an app — when you trust us with your idea, we don&apos;t just build it — we elevate it. The result? A solution that leaves a lasting impression on your users — and on your business.</p>
              <p className="mt-2 about">We specialize in creating powerful brands, smart marketing strategies, and standout digital experiences. Our team of skilled developers, designers, marketers, and content creators works with passion and precision to help your business shine in the digital space.
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
      <p className={`${i===0 ? "mt-2": "mt-10.5"}  text-lg font-[anton] `}>{item.title}</p>
      <p className="text-sm text-[#666] mt-1 inter ">{item.desc}</p>
    </div>
  ))}
</div>
       
        
      </section>
      <section>
         <Solution />
      </section>
 
      <section className="bg-[#3a3a3c] text-white py-20 px-11  text-center h-190"> 
  <p className="mx-50 text-xs uppercase text-[#818181] tracking-widest mb-3 text-left  inter">
    Our Clients
  </p>
  <h2 className="text-4xl md:text-6xl font-[anton] uppercase leading-tight text-left mx-50 mt-15">
    Where <span className="text-[#BA4D4D]">Bold</span> Ideas Become<br />
    Iconic <span className="text-[#FAAC61]">Brands.</span>
  </h2>

  {/* Clients Logos */}
  <div className="flex justify-center flex-wrap gap-30 mt-15">
    {[
       "image 54.png",
      "image 53.png",
      "image 52.png",
      "image 51.png",
      "image 55.png",
    ].map((logo, index) => (
      <div
        key={index}
        className="w-[250px] h-[300px] bg-none p-3 rounded-sm  hover:scale-105 transition-transform duration-300"
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

<section className="bg-[#f9f9f9]  mt-25 mx-50 px-10 py-20">
  <div className="max-w-[1500px] ">
    {/* Subheading */}
    <p className="text-xs inter uppercase text-[#818181] tracking-widest mb-3 text-left ">
      Our Tools
    </p>

    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-[anton] uppercase leading-tight text-left mt-15 ">
      Our <span className="bg-gradient-to-r text-[#844BA6] bg-clip-text">Technology</span> Stack
    </h2>

    {/* Grid of Tool Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-15 justify-items-center lg:ml-25 mt-20">
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
          className="w-[250px] h-[200px] border-2 border-[#844BA6] rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300 bg-purple-50"
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

<section className="w-full mt-20">
  {/* Contact Section */}
 
<div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full">
  {/* Left Content */}
  <div className="bg-[#2c2c2c] text-white flex flex-col  md:items-center   px-10 py-14 md:w-1/2 space-y-15">
    <p className="mr-42 uppercase text-left text-[#818181] year  ">
      Contact
    </p>
    <h2 className="text-4xl md:text-6xl font-[anton] leading-tight text-left ">
      LET’S <span className="text-[#FAAC61]">MAKE</span><br />
      AN <span className="text-[#FAAC61]">IMPACT</span><br />
      TOGETHER.
    </h2>
    <p className="text-[16px] text-gray-300 max-w-sm text-left border-l-4 border-[#FAAC61] px-5 ml-32">
      Welcome to <span className="text-[#50BD8A] font-semibold">BYTEBANDITS</span> where your ideas come to life. 
      We specialize in crafting unique brands, captivating campaigns, and effective digital strategies.
    </p>
    <button className="bg-[#50BD8A] tracking-[2px] text-[18px] text-white px-6 py-4 rounded-full text-sm font-semibold w-50 transition-all">
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
  <p className="uppercase text-[#818181] inter mb-4 tracking-wide">Our Agency</p>

  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-[anton] leading-tight max-w-8xl mx-auto space-y-4 mt-15 text-[#312F2F]">
    <div><span className="text-[#FAAC61]">BYTEBANDITS</span> IS WHERE BOLD IDEAS BECOME <span className="text-[#FAAC61]">POWERFUL</span> </div>
    <div>DIGITAL <span className="text-[#FAAC61]">REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN </div>
    <div>WITH PURPOSE, AND BRING <span className="text-[#FAAC61]">BRANDS TO LIFE</span>. CHOOSE</div>
    <div> <span className="text-[#FAAC61]">BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.</div>
  </h2>

  <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-12 mt-15 sm:mt-14 px-2">
    <div className="text-[#818181] text-sm inter max-w-md sm:leading-[1] sm:mt-1 ">
      We may be new, but we’re already building<br/> <span className="ml-29 ">a portfolio we’re proud of</span>
    </div>

    <button className="bg-[#50BD8A] text-[16px] hover:bg-[#43a976] text-black px-8 py-6 rounded-full text-sm inter font-semibold transition-all whitespace-nowrap">
      VIEW PORTFOLIO
    </button>
  </div>
</div>

</section>

{/* Tapes X Section */}
<CrossedTape />


{/* Blog Section */}
<Blog />
{/* Let's Talk Section */}
<section className="w-full py-16  bg-white text-left">
  <h2 className="text-4xl md:text-[60px] mx-50 font-[anton] uppercase text-[#454545]  mb-15">
    Let&apos;s Talk
  </h2>
</section>

{/* Footer Section */}
<footer className="bg-[#353639] text-white pt-16 pb-6">
  <div className="max-w-10xl  px-6 grid grid-cols-1 md:grid-cols-4 gap-1">
    
    {/* Logo + About */}
    <div className="ml-20">
    <div className="w-[200px] h-[80px] mb-4 ">
  <img
    src="ByteBandits 2.png" 
    alt="Byte Bandits Logo"
    className="w-full h-auto object-contain"
  />
</div>

      
      <p className="mt-4 text-[17px] text-[#E0E0E0] inter">
        We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
      </p>
    </div>

    {/* Office Info */}
    
     
      <div className="flex flex-col gap-2  text-[#E0E0E0] ">
      <h4 className="text-[20px] inter mb-4 text-[#8F8F8F] ml-25">OFFICE</h4>
  <div className="flex items-start gap-2 inter text-[17px]">
    <MdLocationOn className="text-lg mt-[2px] ml-25 text-left" />
    <p>
      plot no.3a, door no.1/1033,<br />
      kumudham nagar extension,<br />
      mugaliivakkam, Chennai -600125
    </p>
  </div>

  <div className="flex items-center gap-2 inter ml-25 text-[17px]">
    <MdPhone className="text-lg" />
    <p>Phone: +91 79048 12982</p>
  </div>

  <div className="flex items-center gap-2 inter ml-25 text-[17px]">
    <MdEmail className="text-lg" />
    <p>Email: <a href="mailto:bbtechworks@gmail.com" className="underline inter">bbtechworks@gmail.com</a></p>
  </div>
</div>


    {/* Links */}
    <div className="text-left ml-25">
      <h4 className="text-[20px] mb-4 text-[#8F8F8F] inter ">LINKS</h4>
      <ul className="space-y-2 text-[17px] text-[#E0E0E0] underline inter ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-[20px] inter mb-1  text-[#8F8F8F]">SOCIAL MEDIA</h4>
      <div className="grid grid-cols-3 grid gap-10  mt-6">
  {[ "image 23.png", "image 24.png", "Group 21.png", "image 27.png", "image 28.png", "image 26.png" ].map((img, i) => (
    <a key={i} href="#"><img src={img} alt="social" className="w-6 h-6" /></a>
  ))}
</div>

    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-[#D9D9D9] text-sm mt-10 border-t border-[#444] pt-4 inter">
    Copyright © byte Bandits. All Rights Reserved.
  </div>
</footer>


    </div>
  );
}
