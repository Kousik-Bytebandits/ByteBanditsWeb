import { useScroll, useTransform, motion } from "framer-motion";
import  { useRef } from "react";  
const HeroSection = () => {
const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
// Scale the hero background image slightly on scroll
   const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);
   
    return (
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
   
    className=" title-line flex flex-wrap justify-center items-center text-[60px] sm:text-[40px] md:text-[90px] lg:text-[130px] sm:leading-[50px] md:leading-[110px] lg:leading-[140px] font-[anton] text-[#353639] sm:space-x-4 lg:space-x-6  "
  >
    {line.split(" ").map((word, wIndex) => (
      <div key={wIndex} className="flex  ">
        {word.split("").map((char, i) => (
          <span
            key={i}
           style={{ scale }}
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
    );
};

export default HeroSection;