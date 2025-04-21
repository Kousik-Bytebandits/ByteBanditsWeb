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
      <section className="relative h-[117vh] flex flex-col justify-center items-center text-center ... hero-section"> 
<div className="landing-hero ">

  {/* Floating 3D shapes */}
  <div className="shapes">
  {/* Scroll-based animated shapes with Framer Motion */}
  <div className="floating">
  <motion.img
    src="shape-1.png"
    alt="Orange Shape"
    style={{ scale }}
    className="absolute shape-1 top-[-630px] left-[-1000px] w-[700px] z-0"
  />
  <motion.img
    src="shape-3.png"
    alt="White Shape"
    style={{ scale }}
    className="absolute shape-3 top-[300px] right-[1100px] w-[550px] z-0"
  />
  <motion.img
    src="shape-2.png"
    alt="Green Shape"
    style={{ scale }}
    className="absolute shape-2 top-[-200px] right-[-1000px] w-[600px] h-[600px] z-0"
  />
</div>
  {/* Floating non-animated shapes */}
  <img
    src="shape-4.png"
    alt="Loop Shape"
    className="floating absolute shape-4 top-[290px] left-[460px] w-[120px] z-100"
  />
  <img
    src="shape-5.png"
    alt="Loop Shape"
    className="floating absolute shape-5 top-[590px] right-[650px] w-[130px] z-100"
  />
</div>


  {/* Animated Title */}
  <motion.div className="animated-title">
  {["TECH THAT TALKS", "DESIGN THAT", "DAZZLES"].map((line, lineIndex) => (
  <div
    key={lineIndex}
    style={{ scale }}
    className=" title-line flex flex-wrap justify-center items-center text-[60px] sm:text-[40px] md:text-[90px] lg:text-[130px] sm:leading-[50px] md:leading-[110px] lg:leading-[140px] font-[anton] text-[#353639] sm:space-x-4 lg:space-x-6  "
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

<p className="year years text-[15px]  ">SINCE 2024</p>
  
</motion.div>
</div>
</section>



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
 <section className="about-section mx-50 mt-50 sm:py-[80px]  sm:px-[30px] md:px-[50px] text-[#333]">
        <p className="section-label text-left mb-10 text-[12px] sm:text-[12px] text-[#818181] year">ABOUT US</p>
        <div className="about-content flex flex-col lg:flex-row  items-start">
          <div className="about-title flex-1 text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.3] font-[anton] title
          " data-aos="fade-up"
          data-aos-delay="10">
            DISCOVER <br /> OUR <span className="highlight text-[#50BD8A]">AGENCY</span>
            <div className="about-description border-l-4 border-[#FAAC61] pl-[20px] text-[14px] sm:text-[15px] mt-[50px] max-w-[400px]  text-[#666]"  data-aos="fade-up"
          data-aos-delay="10">
              <p className="about md:mt-25 leading-6">
                Welcome to <span className="highlight text-[#50BD8A]">Byte Bandits</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
              </p>
            </div>
          </div>
          <div className="about-text flex-1 text-[16px] sm:text-[16px] leading-relaxed text-[#808080] mt-6 tracking-wide lg:mt-0 ">
            <p className="about"data-aos="fade-up"
          data-aos-delay="10">
              At <span className="highlight text-[#50BD8A] ">Byte Bandits</span>,we believe technology is more than just functionality — it&apos;s about building emotional connections through digital experiences. Our mission is to combine your vision with our technical and creative expertise to craft solutions that not only engage and inspire, but also drive growth.
              Using the latest tools, modern frameworks, and bold ideas, we turn concepts into impactful products. Whether it&apos;s a brand, a platform, or an app — when you trust us with your idea, we don&apos;t just build it — we elevate it. The result? A solution that leaves a lasting impression on your users — and on your business.</p>
              <p className="mt-2 about"data-aos="fade-up"
          data-aos-delay="10">We specialize in creating powerful brands, smart marketing strategies, and standout digital experiences. Our team of skilled developers, designers, marketers, and content creators works with passion and precision to help your business shine in the digital space.
We don’t just build – we listen, strategise, and craft solutions that align with your goals. Whether it’s a website, app, ad campaign, or a full-scale product launch, we tailor every move to make sure your brand connects with the right audience, at the right time, on the right platform.
</p>
            
          </div>
        </div>

        <div className="triangle-section flex justify-center gap-[100px] mt-[150px] triangle">
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
    <div key={i} className="triangle-card text-center max-w-[300px]"data-aos="fade-up"
    data-aos-delay="5">
      <img
        src={item.img}
        alt={item.title}
        className={`${i === 0 ? "w-[142px]" : "w-[108px]"} mx-auto`}
      />
      <p className={`${i===0 ? "mt-2": "mt-10.5"} triangle-title text-[24px] font-[anton] " `}data-aos="fade-up"
          data-aos-delay="5">{item.title}</p>
      <p className="triangle-desc text-[16px] mt-6 about "data-aos="fade-up"
          data-aos-delay="5">{item.desc}</p>
    </div>
  ))}
</div>
       
        
      </section>
      <section>
         <Solution />
      </section>
 
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
    <button className="bg-[#37CC8D] tracking-[2px] text-[18px] text-white px-6 py-4 rounded-full text-sm font-semibold w-50 transition-all"data-aos="fade-up"
          data-aos-delay="10">
      CONTACT
    </button>
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
<footer className="custom-footer bg-[#353639] text-white pt-15">
  <div className="max-w-10xl md:px-6 md:py-5 flex flex-col md:flex-row gap-10">

    {/* Left Section - 40% */}
    <div className="left-foot md:w-[40%] ml-15">
      <div className="lf-container w-[200px] h-[80px] mb-6">
        <img
          src="ByteBandits 2.png"
          alt="Byte Bandits Logo"
          className="w-full h-auto object-contain lf-img"
        />
      </div>
      <p className="lf-desc text-[16px] text-[#E0E0E0] inter max-w-[70%] lg:ml-2 leading-8">
        We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
      </p>
    </div>

    {/* Right Section - 60% (3 sections inside) */}
    <div className="right-foot md:w-[60%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
    
      {/* Office Info */}
      <div className="office-container text-[#E0E0E0]">
        <h4 className="office-head text-[20px] inter mb-4 text-[#8F8F8F] font-bold">OFFICE</h4>

        <div className="flex items-start gap-2 foot text-[20px]">
          <img src="Mask group (1).png" alt="Location" className="w-5 h-5 mt-[6px]" />
          <p>
            plot no.3a, door no.1/1033,<br />
            kumudham nagar extension,<br />
            mugaliivakkam, Chennai -600125
          </p>
        </div>

        <div className="flex items-center gap-2 foot text-[20px] mt-5">
          <img src="Mask group (2).png" alt="Phone" className="w-5 h-5" />
          <p>Phone: +91 79048 12982</p>
        </div>

        <div className="flex items-center gap-2 foot text-[20px] mt-4">
          <img src="Mask group (3).png" alt="Email" className="w-5 h-5" />
          <p>
            Email: <a href="mailto:bbtechworks@gmail.com" className="underline foot">
              bbtechworks@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="links-container ">
        <h4 className="links-head text-[20px] mb-4 text-[#8F8F8F] inter font-bold">LINKS</h4>
        <ul className="space-y-2 text-[20px] text-[#E0E0E0] underline foot">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      
      {/* Social Media */}
      <div className="social-container">
        <h4 className="social-head text-[20px] inter mb-1 text-[#8F8F8F] font-bold">SOCIAL MEDIA</h4>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {[
            "image 23.png", "image 24.png", "Group 21.png",
            "image 27.png", "image 28.png", "image 26.png"
          ].map((img, i) => (
            <a key={i} href="#"><img src={img} alt="social" className="w-10 h-10 social-img" /></a>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="copy-container text-center text-[#D9D9D9] mt-10 border-t border-[#444] py-6 inter bg-[#454545]">
    Copyright © Byte Bandits. All Rights Reserved.
  </div>
</footer>


    </div>
  );
}
