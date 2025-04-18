import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
      desc: "Launch a custom mobile app that looks amazing and runs flawlessly on iOS and Android. Whether it’s for customers or internal use, everything is designed for usability and performance. Your idea turns into a powerful app. Built smart, built to last.",
      tags: ["UI/UX", "NATIVE", "STUDIO"],
    },
    {
      title: "Cloud Scaling",
      desc: "Scale your app with serverless architecture and intelligent cost optimization strategies tailored for modern businesses.",
      tags: ["AWS", "AZURE", "GCP"],
    },
  ];

  const cardWidth = 370;
  const gap = 30; // 1.5rem (Tailwind's `mr-6`)
  const visibleCards = 3.5;
  const maxSlide = Math.max(0, cards.length - visibleCards);

  const handleNext = () => {
    if (slideIndex < maxSlide) setSlideIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex((prev) => prev - 1);
  };

  return (
    <section className="solutions-section mx-45 bg-[#ececea] py-16 px-5 sm:px-10 md:px-20 text-[#333] ">
      <div className="mb-15 solutions-header">
        <p className="section-label text-xs sm:text-sm uppercase tracking-widest text-[#818181] mb-15 inter"data-aos="fade-up"
    data-aos-delay="5">
          Solutions and Consulting
        </p>
        <h2 className="section-title text-[28px] sm:text-[40px] md:text-[60px] uppercase leading-tight text-[#333] font-[anton]"data-aos="fade-up"
    data-aos-delay="5">
          Scalable <span className="highlight text-[#BA4D4D]">Solutions</span> and <span className="highlight  text-[#BA4D4D]">Consulting</span>
          <br />
          For Diverse Industries
        </h2>
      </div>

      <div className="solutions-nav flex justify-end items-center mb-8">
        <div className="nav-controls flex items-center  gap-4 text-xs sm:text-sm text-gray-500 uppercase font-semibold cursor-pointer select-none">
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

      <div className="solutions-carousel relative md:mx-25 w-full px-4 py-6  ">
  <div className="carousel-wrapper overflow-x-auto scrollbar-hide ">
    <div
      className=" carousel-track h-[500px] flex transition-transform duration-500 ease-in-out gap-8 "
      style={{
        transform: `translateX(-${slideIndex * (cardWidth + gap)}px)`,
        width: `${cards.length * (cardWidth + gap)}px`,
      }}
    >
      {cards.map((item, i) => (
        <div
          key={i}
          className="solution-card box bg-white px-10 py-5 rounded-lg w-[370px] h-[400px] flex-shrink-0 flex flex-col justify-between shadow-xl"
        >
          {/* Title & Description */}
          <div>
            <h3 className="card-title text-[18px] sm:text-[25px] font-[anton] text-black uppercase">
              {item.title}
            </h3>
            <p className="card-desc text-[12px] sm:text-[14px] text-[#000000] my-5 inter">
              {item.desc}
            </p>
          </div>

          {/* Tags */}
          <div className="card-tags flex flex-col justify-end gap-6">
            <div className="tags flex gap-3 text-[13px] justify-center font-bold text-black tracking-[1px]">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="tag relative">
                  {tag}
                  {idx < item.tags.length - 1 && (
                   <span className="dot mx-1 text-[#BA4D4D] text-[20px] leading-[2px]">•</span>

                  )}
                </span>
              ))}
            </div>

            <div className="pt-1">
              <div className="card-footer flex items-center mb-8">
                {/* Red + Gray Line */}
                <div className="kine-wrapper flex w-full items-center">
                  <div className="red-line h-[2px] w-[20px] bg-[#BA4D4D] mr-1"></div>
                  <div className="gray-line h-[2px] flex-1 bg-[#D3D3D3]"></div>
                </div>
              </div>

              <div className="learn-more flex items-center justify-flex-end gap-2 cursor-pointer mb-5">
                <span className="learn-text text-[11px] sm:text-[13px] font-bold uppercase text-black hover:text-[#BA4D4D] transition-all">
                  Learn More
                </span>
                <span className="learn-icon w-8 h-8 bg-[#BA4D4D] rounded-full flex items-center justify-center">
  <ArrowRight className="icon text-white w-8 h-4.5" />
</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  
</div>

    </section>
  );
}
