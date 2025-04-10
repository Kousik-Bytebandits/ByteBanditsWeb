import { useState } from "react";

export default function ServicesSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const cards = [
    {
      title: "Data Security",
      desc: "Secure your data with our end-to-end data protection services — encryption, monitoring, and compliance all in one place. Our solutions are designed to safeguard your business against breaches, data loss, and evolving cyber threats.",
      tags: ["MFA", "Auth0", "DLP"],
    },
    {
      title: "SEO & Optimization",
      desc: "Get higher rankings, more visibility, and organic traffic that actually converts. Your site gets fully optimized—keywords, structure, speed, and more. Show up when your audience is searching. This is how you grow without paying for every click.",
      tags: ["ONPAGE", "LOCAL", "OFF PAGE"],
    },
    {
      title: "Web Development",
      desc: "Get a fast, modern, and mobile-friendly website built to impress and perform. Clean design, smooth user experience, and everything tailored to your brand. Your site won’t just look great—it’ll work hard to support your business. Everything is built to scale with you.",
      tags: ["REACT", "SQL", "NODE"],
    },
    {
      title: "Mobile Development",
      desc: "Launch a custom mobile app that looks amazing and runs flawlessly. Everything is designed for usability and performance.",
      tags: ["UI/UX", "NATIVE", "STUDIO"],
    },
    {
      title: "Cloud Scaling",
      desc: "Scale your app with serverless architecture and intelligent cost optimization strategies tailored for modern businesses.",
      tags: ["AWS", "AZURE", "GCP"],
    },
  ];

  const cardWidth = 379; // same width as card
  const visibleCards = 3.5;
  const maxSlide = Math.max(0, cards.length - visibleCards);

  const handleNext = () => {
    if (slideIndex < maxSlide) setSlideIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex((prev) => prev - 1);
  };

  return (
    <section className="bg-[#f5f5f5] sm:py-[80px] px-[20px] sm:px-[40px] md:px-[50px] text-[#333] overflow-hidden lg:ml-35">
      <div className="mb-6">
        <p className="text-[10px] sm:text-[12px] uppercase tracking-widest text-[#818181] mb-6 inter">
          Solutions and Consulting
        </p>
        <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  uppercase leading-tight text-[#333] font-[anton]">
          Scalable <span className="text-[#BA4D4D]">Solutions</span> and <span className="text-[#BA4D4D]">Consulting</span>
          <br />
          For Diverse Industries
        </h2>
      </div>

      <div className="flex justify-end items-center mt-8 mb-6">
        <div className="flex items-center gap-4 text-[12px] sm:text-[14px] text-gray-500 uppercase font-semibold cursor-pointer select-none">
          <span
            onClick={handlePrev}
            className={`flex items-center gap-1 hover:text-black transition-colors duration-200 ${
              slideIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            ← Prev
          </span>
          <span
            onClick={handleNext}
            className={`flex items-center gap-1 hover:text-black transition-colors duration-200 ${
              slideIndex === maxSlide ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            Next →
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${slideIndex * (cardWidth + 24)}px)`,
          }}
        >
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl px-6 py-8 sm:px-8 sm:py-10 rounded-lg w-[350px] sm:w-[340px] md:w-[360px] lg:w-[340px] h-[422px] flex-shrink-0 mr-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-[anton] uppercase">{item.title}</h3>
                <p className="text-[12px] sm:text-[14px] text-gray-600 my-6 sm:my-8 inter">{item.desc}</p>
              </div>
              <div>
                <div className="flex gap-3 text-[10px] sm:text-[12px] justify-center font-bold text-black/80 mb-8 mt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="after:content-['•'] last:after:content-none after:mx-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-[10px] sm:text-[12px] font-semibold uppercase flex items-center gap-2 text-gray-800 hover:text-[#BA4D4D] transition-all">
                  Learn more
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BA4D4D] text-white rounded-full flex items-center justify-center text-[10px]">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
