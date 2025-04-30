import Solution from "./Solution";
import Blog from "./Blog";
import Navbar from "./Navbar";
import CrossedTape from "./CrossedTape";
import "@fontsource/inter"; 
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./App.css";
import './index.css';
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { Link } from "react-router-dom";



export default function AnimatedWebsite() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
     
    });
  }, []);
   // Scale the hero background image slightly on scroll
   const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);
   
  
 return (
    <div className="w-full overflow-x-hidden bg-[#ececea] text-black  scrollbar-none">
    
      <Navbar />

      {/* Hero Section */}
     <HeroSection  />

<section
      ref={scrollRef}
      className="w-full   md:h-[55vh] md:mb-20 relative "
    >
      {/* Background Image with Zoom */}
      <motion.img
        src="hero.png"
        alt="Hero"
        style={{ scale }}
        className="absolute w-full h-full object-cover z-0 hero"
      />

      {/* Scroll Down Icon with Rotation */}
      <motion.img
  src="scroll-down.png"
  alt="Scroll Down"
  style={{
    transform: 'translate3d(0px, 10px, 0px)',rotate
  }}
  className="absolute -top-65 right-60 w-55 h-55 z-30 scroll-icon"
/>

    </section>

 {/* About Section */}
 <AboutSection/>

 {/* Solution Section */}  
   <Solution />
     
 
      <section className="bg-[#353639] text-white md:py-20 md:px-11  text-center  client-section"> 
  <p className="client-label mx-50 text-xs uppercase text-[#818181] tracking-widest md:mb-3 text-left  inter"data-aos="fade-up"
          data-aos-delay="10">
    Our Clients
  </p>
  <h2 className=" client-head text-4xl md:text-6xl font-[anton] uppercase leading-tight text-left mx-50 md:mt-15"data-aos="fade-up"
          data-aos-delay="10">
    Where <span className="text-[#BA4D4D] red">Bold</span> Ideas Become<br />
    Iconic <span className="text-[#FAAC61] yellow">Brands.</span>
  </h2>

  {/* Clients Logos */}
  <div className="client-logos flex justify-center flex-wrap gap-30 mt-15"data-aos="fade-up"
          data-aos-delay="10">
    {[
       "image 54.png",
      "image 53.png",
      "image 52.png",
      "image 51.png",
      "image 55.png",
    ].map((logo, index) => (
      <div
        key={index}
        className="client-logo md:w-[250px] md:h-[300px] bg-none p-3 rounded-sm  hover:scale-105 transition-transform duration-300 overflow-x-auto"
      >
        <img
          src={logo}
          alt={`Client ${index + 1}`}
          className="w-full h-full object-contain client-image"
        />
      </div>
    ))}
  </div>
</section>

<div className="sections-wrapper flex flex-col">
<section className="bg-[#ececea] md:mt-25 md:mx-50 px-10 py-20 tools-section">
  <div className=" max-w-[1500px]"data-aos="fade-up"
          data-aos-delay="10">
    {/* Subheading */}
    <p className="tool text-xs inter uppercase text-[#818181] tracking-widest mb-3 text-left">
      Our Tools
    </p>

    {/* Main Heading */}
    <h2 className="tool-head text-4xl md:text-5xl font-[anton] uppercase leading-tight text-left mt-15"data-aos="fade-up"
          data-aos-delay="10">
      Our <span className="bg-gradient-to-r text-[#844BA6] bg-clip-text ">Technology</span> Stack
    </h2>

    {/* Grid of Tool Cards */}
    <div className="tech-card-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-15 justify-items-center lg:ml-25 mt-20"data-aos="fade-up"
          data-aos-delay="10">
      {[
       {
        name: "Photoshop",
        img: "image 31.png",
        desc: "A Powerful image editing tool used for photo manipulation, graphic design, and digital art.",
      },
      {
        name: "Adobe Illustrator",
        img: "image 35.png",
        desc: "A Vector graphics editor used for creating logos, illustrations, and scalable design elements.",
      },
      {
        name: "Figma",
        img: "image 30.png",
        desc: "A Collaborative UI/UX design tool used for creating wireframes, prototypes, and interface designs.",
      },
      {
        name: "Adobe Premiere Pro",
        img: "image 33.png",
        desc: "A Professional video editing software used for cutting, editing, and producing high-quality videos.",
      },
      {
        name: "After Effects",
        img: "image 34.png",
        desc: "A Motion graphics and visual effects software used for animation, compositing, and cinematic visuals.",
      },
      {
        name: "Java",
        img: "image 41.png",
        desc: "A High-level, object-oriented programming language used for building platform-independent applications.",
      },
      {
        name: "React",
        img: "image 37.png",
        desc: "A JavaScript library for building fast and dynamic user interfaces for web applications.",
      },
      {
        name: "Node.js",
        img: "Mask group.png",
        desc: "A JavaScript runtime environment used for building fast and scalable server-side applications.",
      },
      {
        name: "React Native",
        img: "image 40.png",
        desc: "A Framework for building cross-platform mobile apps using React and JavaScript.",
      },
      {
        name: "Python",
        img: "image 39.png",
        desc: "A Versatile, high-level programming language known for its simplicity and use in data science, web development, and automation.",
      },
      {
        name: "MongoDB",
        img: "mongo.png",
        desc: "A NoSQL database that stores data in a flexible, JSON-like format for modern applications.",
      },
      {
        name: "Redis",
        img: "image 47.png",
        desc: "An In-memory data structure store used as a database, cache, and message broker for high-performance applications.",
      },
      {
        name: "MySQL",
        img: "image 48.png",
        desc: "An Open-source relational database management system used for storing structured data.",
      },
      {
        name: "SQL Server",
        img: "image 49.png",
        desc: "A Relational database management system developed by Microsoft for managing and querying large-scale databases.",
      },
      {
        name: "AWS",
        img: "image 50.png",
        desc: "A Comprehensive cloud platform offering computing power, storage, and various services for building scalable applications.",
      },
      ].map((tool, index) => (
        <div key={index} className="tech-card">
          {/* Front Side with Image */}
          <div className="tech-card-front">
            <img
              src={tool.img}
              alt={tool.name}
              className="w-[100px] h-[100px] object-contain"
            />
          </div>

          {/* Back Side with Text */}
          <div className="tech-card-content">
            <p className="tech-card-title">{tool.name}</p>
            <p className="tech-card-description inter">
              {tool.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="w-full mt-20">
  {/* Contact Section */}
 
<div className="contact-section flex flex-col md:flex-row h-auto md:h-[700px] w-full">
  {/* Left Content */}
  <div className="bg-[#2c2c2c] text-white flex flex-col  md:items-center   px-10 py-14 md:w-1/2 space-y-15">
    <p className="mr-42 uppercase text-left  year  " data-aos="fade-up"
          data-aos-delay="10">
      Contact
    </p>
   
    <h2
  className="text-4xl md:text-[60px] font-[anton] leading-tight text-left md:text-left"
  data-aos="fade-up"
  data-aos-delay="10"
><div className="md:flex flex-col">
  <span className="sp0" >LET’S <span className="text-[#FAAC61] sp1">MAKE</span></span>
  <span className="sp2">AN <span className="sp3 text-[#FAAC61]">IMPACT</span></span>
  <span className="sp4">TOGETHER.</span>
  </div>
</h2>

   
    <p className="text-[16px] about max-w-sm text-left border-l-4 border-[#FAAC61] px-5 ml-32"data-aos="fade-up"
          data-aos-delay="10">
      Welcome to <span className="text-[#50BD8A] font-semibold">BYTEBANDITS</span> where your ideas come to life. 
      We specialize in crafting unique brands, captivating campaigns, and effective digital strategies.
    </p>
   
<Link
  to="/contact"
  onClick={() => {
    window.scrollTo(0, 0);
  }}
>
  <button
    className="cursor-pointer bg-[#37CC8D] tracking-[2px] text-[18px] text-white px-6 py-4 rounded-full text-sm font-semibold w-50 transition-all"
    data-aos="fade-up"
    data-aos-delay="10"
  >
    CONTACT
  </button>
</Link>

   
  </div>

    {/* Right Image */}
    <div className="md:w-1/2 w-full h-[300px] md:h-auto">
      <img
        src="contacts.png" 
        alt="Team working"
        className="w-full h-full object-cover"
        
      />
    </div>
  </div>
</section>

<section>
  {/* Our Agency Section */}
  <div className="agency-section bg-[#ececea] text-center py-20 px-6">
  <p className="uppercase  year mb-4 tracking-wide agency"data-aos="fade-up"
          data-aos-delay="10">Our Agency</p>

  <h2 className="agency-heading-mobile text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-[anton] leading-tight max-w-8xl mx-auto  mt-10 text-[#312F2F]">
    
      <div><span className="text-[#FAAC61]"data-aos="fade-up"
          data-aos-delay="10">BYTEBANDITS</span> IS WHERE BOLD IDEAS BECOME <span className="text-[#FAAC61]"data-aos="fade-up"
          data-aos-delay="10">POWERFUL</span> </div>
    <div>DIGITAL <span className="text-[#FAAC61]"data-aos="fade-up"
          data-aos-delay="10">REALITIES</span>. WE ENGINEER SMART SOLUTIONS, DESIGN </div>
    <div>WITH PURPOSE, AND BRING <span className="text-[#FAAC61]"data-aos="fade-up"
          data-aos-delay="10">BRANDS TO LIFE</span>. CHOOSE</div>
    <div> <span className="text-[#FAAC61]"data-aos="fade-up"
          data-aos-delay="10">BYTEBANDITS</span> BECAUSE WE ARE WORTH IT.</div>
          
  </h2>

  <div className="agency-para flex flex-col sm:flex-row sm:items-center justify-center md:gap-15 md:mt-15  px-2">
    <div className=" agency-paragraph-mobile about max-w-md sm:leading-[1] sm:mt-1 "data-aos="fade-up"
          data-aos-delay="10">
      We may be new, but we’re already building <div className="md:mt-1.5 md:ml-30  ">a portfolio we’re proud of</div>
    </div>

    <button className="agency-button-mobile bg-[#37CC8D] text-[12px] hover:bg-[#43a976] text-black md:px-8 md:py-6 rounded-full text-sm inter  transition-all whitespace-nowrap tracking-[1px]"data-aos="fade-up"
          data-aos-delay="10">
      VIEW PORTFOLIO
    </button>
  </div>
</div>

</section>

{/* Tapes X Section */}
<section className="tape-section">
<CrossedTape />
</section>
</div>

{/* Blog Section */}
<Blog />
{/* Let's Talk Section */}
<section className="w-full py-16  bg-[#ececea] text-left">
  <h2 className="text-4xl md:text-[60px] md:mx-50 font-[anton] uppercase text-[#454545] mx-8 md:mb-15"data-aos="fade-up"
          data-aos-delay="10">
    Let&apos;s Talk
  </h2>
</section>

{/* Footer Section */}
<Footer />


    </div>
  );
}
