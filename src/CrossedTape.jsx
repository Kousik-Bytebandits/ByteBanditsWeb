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
      className="relative w-full h-[80vh] bg-[#ececea] overflow-hidden"
    >
      {/* Orange Tape - Capsule Style with Custom Words */}
      <motion.div
        style={{ x: offset1 }}
        className="absolute w-[250%] rotate-[-15deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FAAC61] text-[#454545] text-[30px] font-[anton] whitespace-nowrap py-4 tracking-widest"
      >
        <div className="flex gap-40 text-[20px] sm:text-[29px] font-[anton]  ">
          {/* Looping Text in Orange Tape */}
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>
              {orangeWords[(i % orangeWords.length)]} {/* Loop words */}
            </span>
          ))}
        </div>
      </motion.div>

      {/* White Capsule Tape */}
      <motion.div
        style={{ x: offset2 }}
        className="absolute w-[250%] -rotate-[-15deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex gap-50"
      >
        {/* Looping White Capsule */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="bg-white text-[#454545] text-[20px] sm:text-[15px] font-[anton] px-9 py-5 uppercase rounded-full border border-black shadow-md whitespace-nowrap"
          >
            {["Custom Solutions", "Expert Guidance", "Industry Experience", "Reliable Service", "24/7 Availability", "Satisfaction Guaranteed", "Innovative Approach"][i % 7]}
          </span>
        ))}
      </motion.div>

      {/* Center Shape (Optional) */}
      {/* Center Shape (Floating in Place) */}
<div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <img
    src="shapes-6.png"
    alt="Center Shape"
    className="w-[200px] sm:w-[240px] floating "
  />
</div>

    </div>
  );
}
