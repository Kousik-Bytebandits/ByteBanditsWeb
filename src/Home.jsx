import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "./Navbar";
import "./App.css";

export default function AnimatedWebsite() {
  const { scrollY } = useScroll();
const rotate = useTransform(scrollY, [0, 1000], [0, 500]); // Adjust scroll range as needed

  
  return (
    <div className="w-full overflow-x-hidden bg-[whitesmoke] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center font-Anton font-black uppercase text-[#353639] space-y-4 overflow-hidden">
  {/* Floating 3D shapes */}
  <img src="shape -1.png" alt="Orange Shape" className="floating absolute top-[-572px] left-[-730px] z-0" />
  <img src="shape-3.png" alt="White Shape" className="floating absolute top-[270px] right-[1300px] w-[600px]  z-100" />
  <img src="shape-2.png" alt="Green Shape" className="floating absolute bottom-[-50px] right-[-550px] w-[900px] h-[800px] z-0" />
  <img src="shape-4.png" alt="Loop Shape" className="floating absolute top-[200px] left-[330px] w-[100px] z-100" />
  <img src="shape-5.png" alt="Loop Shape" className="floating absolute bottom-[190px] right-[550px] w-[100px] z-100" />

  {/* Animated Title */}
  {[
    "TECH THAT TALKS",
    "DESIGN THAT",
    "DAZZLES"
  ].map((line, lineIndex) => (
    <div
      key={lineIndex}
      className="text-[100px] leading-[1.0] tracking-[-10px] flex flex-wrap justify-center gap-2 z-10"
    >
      {line.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-300 hover:scale-y-120 origin-bottom ${
            char === " " ? "w-4" : ""
          }`}
        >
          {char}
        </span>
      ))}
      
    </div>
    
  ))}
<p>Since 2024</p>
  {/* Rotating Scroll Icon */}
  <motion.img
  src="scroll-down.png"
  alt="scroll"
  className="absolute top-140 right-10 w-[250px] z-0"
  style={{ rotate }}
/>

</section>



      {/* Image Section */}
      <section className="h-screen">
        <img src="hero.png" alt="Hero" className="w-full h-90% object-cover " />
      </section>

      {/* About Section */}
      <section className="max-w-[1200px] mx-auto py-[100px] px-[50px] text-[#333]">
        <p className="text-left mb-10">About Us</p>
        <div className="flex gap-8">
          <div className="flex-1 text-4xl font-bold uppercase leading-tight">
            DISCOVER <br /> OUR <span className="text-green-400">AGENCY</span>
            <p className="border-l-4 border-orange-500 pl-[30px] text-sm mt-20 max-w-[400px] text-[#666]">
              Welcome to <span className="text-green-400">Byte Bandits</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
            </p>
          </div>
          <div className="flex-2  text-base leading-relaxed max-w-[600px] text-[#444]">
           
            <p >
              At <span className="text-green-400">Byte Bandits</span>, we believe in the power of creativity and innovation. Our goal is to help you build an emotional connection with your audience using cutting-edge tools and approaches. We take the time to understand your vision.
            </p>
            <p>We specialize in creating powerful brands, smart marketing strategies, and standout digital experiences. Our team of skilled developers, designers, marketers, and content creators works with passion and precision to help your business shine in the digital space.
We don’t just build – we listen, strategise, and craft solutions that align with your goals. Whether it’s a website, app, ad campaign, or a full-scale product launch, we tailor every move to make sure your brand connects with the right audience, at the right time, on the right platform.
</p>
          </div>
        </div>

        <div className="flex justify-center gap-[100px] mt-[150px]">
          {[
            { img: "shape-7.png", title: "EXPERT TEAM", desc: "Our team consists of experienced professionals who work with passion, delivering high-quality projects." },
            { img: "shape-8.png", title: "INNOVATIVE SOLUTIONS", desc: "We offer unique and creative approaches that help your business stand out in the market and achieve success." },
            { img: "shape-9.png", title: "CLIENT FOCUS", desc: "We prioritize client needs, deeply understanding them to create tailored solutions for maximum results." },
          ].map((item, i) => (
            <div key={i} className="text-center max-w-[300px]">
              <img src={item.img} alt={item.title} className="w-[120px] mx-auto" />
              <p className="font-anton text-lg font-bold mt-3">{item.title}</p>
              <p className="text-sm text-[#666] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f5] py-[60px] px-[10%] font-poppins text-[#333]">
        <p className="text-left mb-10">Our Services</p>
        <div className="text-left">
          <h2 className="font-anton text-[48px] uppercase font-black tracking-[-1px]">
            WE GENERATE <span className="text-orange-400">UNIQUE</span> IDEAS
          </h2>
        </div>

        </section>

      {/* Contact Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        {/* You can add form or contact info here */}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5 relative">
        &copy; 2025 Animated Website. All rights reserved.
      </footer>
    </div>
  );
}
