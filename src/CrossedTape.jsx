import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CrossedBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Swapped offset values with increased scroll range for faster movement
  const offset1 = useTransform(scrollYProgress, [0, 1], [0, -1500]); // White tape moves left
  const offset2 = useTransform(scrollYProgress, [0, 1], [0, 1500]); // Orange tape moves right

  // Words for the orange tape
  const orangeWords = [
    "CUTTING-EDGE TECHNOLOGY",
    "TAILORED STRATEGIES",
    "SUSTAINABLE PRACTICES",
    "GLOBAL REACH",
    "PROVEN TRACK RECORD",
    "COMPREHENSIVE SUPPORT",
    "COST EFFICIENCY",
  ];

  return (
    <div
  ref={containerRef}
  className="tape-container relative w-full h-[60vh] sm:h-[80vh] bg-[#ececea] overflow-hidden"
>
  {/* Orange Tape */}
  <motion.div
    style={{ x: offset1 }}
    className="orange-tape absolute w-[400%] md:rotate-[-10deg] rotate-[-15deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FAAC61] text-[#454545] text-[18px] sm:text-[30px] font-[anton] whitespace-nowrap py-3 sm:py-4 tracking-wide sm:tracking-wide"
  >
    <div className="flex gap-16 sm:gap-40">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i}>
          {orangeWords[i % orangeWords.length]}
        </span>
      ))}
    </div>
  </motion.div>

  {/* White Tape */}
  <motion.div
    style={{ x: offset2 }}
    className="white-tape absolute w-[400%] sm:w-[250%] md:-rotate-[-10deg] -rotate-[-15deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex gap-6 sm:gap-12"
  >
    {Array.from({ length: 20 }).map((_, i) => (
      <span
        key={i}
        className="white-pill bg-white text-[#454545] text-[12px] sm:text-[15px] font-[anton] px-4 py-2 sm:px-9 sm:py-5 uppercase rounded-full border border-black shadow-md whitespace-nowrap"
      >
        {[
          "Custom Solutions",
          "Expert Guidance",
          "Industry Experience",
          "Reliable Service",
          "24/7 Availability",
          "Satisfaction Guaranteed",
          "Innovative Approach",
        ][i % 7]}
      </span>
    ))}
  </motion.div>

  {/* Center Image */}
  <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <img
      src="shapes-6.png"
      alt="Center Shape"
      className="md:w-[140px] sm:w-[200px] floating center-img"
    />
  </div>
</div>

  );
}
