import  { useState,useRef } from "react";
import { FaInfoCircle, FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCircle } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);




const technologies = [
  "Website Designs",
  "Mobile App Designs",
  "Landing Page Design",
  "Dashboard Design",
  "Product Design",
  "Web App Designs",
  "UX Audit",
  "App Prototyping (Figma and Protopie)",
  "UX Consultation",
  "UX Copy",
  "Webflow Development",
  "Wordpress Development",
  "Front-end Development",
  "Logo Designs",
  "Branding & Visual Identity",
  "eBook & Digital Reports",
  "Illustration Design",
  "Email Templates",
  "UI/UX Design",
  "Python Programming",
  "Flutter Development",
  "Digital Marketing",
  "React JS",
  "Node.js",
  "SQL",
];

const Internship = () => {
  const [activeTab, setActiveTab] = useState("monthly");
 const containerRef = useRef();
const headingRocket = useRef();
const monthlyRocket = useRef();
const quarterlyRocket = useRef();

 useGSAP(() => {
  // Heading Rocket Animation (bottom-right to top-left)
  gsap.to(headingRocket.current, {
       x: -2050,
    y: 10,
    scrollTrigger: {
      trigger: containerRef.current,
      start: '  top',
      end: 'bottom top',
      scrub: true,
    
    },
  });

  // Monthly Rocket Animation
  if (monthlyRocket.current) {
    gsap.to(monthlyRocket.current, {
      x: 450,
      y: -300,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top ',
        end: 'bottom top',
        scrub: true,
        
      },
    });
  }

  // Quarterly Rocket Animation
  if (quarterlyRocket.current) {
    gsap.to(quarterlyRocket.current, {
       x: 450,
      y: -300,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top ',
        end: 'bottom top',
        scrub: true,
       
      },
    });
  }
}, [activeTab]);

  return (
    <div className="bg-[#ececea]  font-[inter] overflow-x-hidden">
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
        <Navbar />
      <div className="w-full relative "ref={containerRef}>
        {/* Heading */}
        <div className="  relative text-center mb-6 ">
          <img
            src="/images/rocket-left.png"
            alt="Rocket Left"
            
            className="absolute left-[0.5%] top-[30%] w-15 block lg:hidden  "
          />
<h1 className="hidden lg:block text-[#0F1112]  lg:mt-[8%] lg:text-[100px] uppercase  leading-normal font-[anton]">
      <div className="relative">
        
       
        Launch Your Tech Career
        
        <img
          src="images/Frame.png"
          alt="rocket"
           ref={headingRocket}
          className="absolute right-[0%] top-[450%] rotate-280  w-14 lg:w-100  z-10 overflow-x-hidden"
        />
      </div>
      <div>with Our Hands-On</div>
      <div>Internships</div>
    </h1>
  {/* Mobile Layout */}
  <h1 className="block lg:hidden text-[#0F1112] text-[38px]  mt-[20%]  uppercase  leading-normal font-[anton]">
    <div>Launch Your Tech</div>
    <div>Career With Our</div>
    <div>Hands-On Internships</div>
  </h1>
        </div>

        {/* Toggle Capsule */}
        <div className=" relative bg-white rounded-full px-6 py-2 w-max lg:px-24 lg:w-[25%] lg:py-3 mx-auto mb-2 lg:mt-20">
          <div
            className={` absolute top-1 left-1 lg:top-2 lg:left-2  transition-all duration-300 w-1/2 h-[calc(100%-0.5rem)] lg:h-[80%] lg:w-1/2 rounded-full bg-black z-0 ${
              activeTab === "quarterly" ? "translate-x-28 lg:translate-x-55" : "translate-x-0"
            }`}
          ></div>
          <div className="relative z-10 flex w-48 lg:w-65 gap-8 lg:gap-24">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`w-1/2 py-2 text-sm lg:text-[25px] cursor-pointer font-medium rounded-full transition-all duration-300 ${
                activeTab === "monthly" ? "text-white" : "text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("quarterly")}
              className={`w-1/2 py-2 text-sm lg:text-[25px] cursor-pointer font-medium rounded-full transition-all duration-300 ${
                activeTab === "quarterly" ? "text-white" : "text-black"
              }`}
            >
              Quarterly
            </button>
             <div className="absolute -top-7 lg:-top-12 lg:left-5/5 left-4/5 transform -translate-x-1/2 bg-black text-[10px] lg:text-[15px] px-2 font-[inter] py-[1px] rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:lg:border-[8px] after:border-[3px] after:border-transparent after:border-t-black">
  <span className="bg-[linear-gradient(92.13deg,_#E1C445_1.8%,_#33DC27_61.68%)] bg-clip-text text-transparent font-semibold">
    Save10%
  </span>
</div>

          </div>
        </div>

        <p className="text-xs text-[#999999] lg:text-[20px] lg:font-semibold mt-8 mb-15 text-center flex items-center justify-center gap-2">
          No Extra Fee <FaInfoCircle className="inline-block " />
        </p>

        {/* Plan Card */}
       {activeTab === "monthly" && (
  <div className="flex flex-col lg:flex-row lg:gap-10 lg:mx-20">
    
    {/* Starter Plan */}
    <div className="relative bg-[linear-gradient(180deg,_#2C17A3_2.51%,_#B51A5B_87.35%)] text-white mt-6 pt-10 pb-6 px-6 rounded-xl lg:w-[400px] ">
      <img
        src="images/rocket-right.png"
        alt="rocket"
       ref={monthlyRocket}
        className="absolute block lg:hidden -top-12 right-25 w-18 rotate-360 rocket-mobile-right"
      />
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-56 h-20 bg-[#2C17A3] text-white flex items-center justify-center font-semibold clip-path-trapezoid-reverse">
        <p className="-mt-11 lg:text-[17px]">Most popular</p>
      </div>
      <style>{`
        .clip-path-trapezoid-reverse {
          clip-path: polygon(0 70%, 20% 0, 80% 0, 100% 70%);
        }
      `}</style>
      <h2 className="text-left text-lg font-semibold mb-1 lg:text-[24px]">Starter Plan</h2>
      <p className="text-left text-[13px] mb-4 lg:text-[15px]">
        Recommended for beginners and students looking for basic exposure
      </p>
      <p className="text-left text-2xl font-bold lg:text-[24px]">
        ₹999 <span className="text-base font-medium lg:text-[16px]">/ 1 Month</span>
      </p>
      <div className="flex justify-center">
        <button className="mt-4 py-3 w-[100%] lg:tracking-wider lg:w-[90%] lg:text-[20px] bg-[#151515] rounded-full text-white font-semibold hover:bg-gray-900 transition">
          Enroll in Starter Plan
        </button>
      </div>
      <ul className="mt-6 space-y-5 text-sm lg:text-[15px] text-left mb-15">
        <p className="text-[15px] lg:text-[18px]">Features:</p>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> 1-month duration (Self-paced)</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Guided mini-projects</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Certificate of Completion</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> WhatsApp group support</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Email-based doubt resolution</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Access to LMS Portal</li>
      </ul>
    </div>

    {/* Remaining Plans */}
    <div className="mt-6 flex flex-col lg:flex-row lg:gap-10 lg:w-3/4">
      {/* Pro Plan */}
      <div className="shadow-md mt-5 lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px]">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Pro Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Best for students who want a hands-on, guided learning experience</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px] ">₹1,499 <span className="lg:text-[16px] text-sm font-semibold">/ 1 Month</span></p>
       <div className="flex justify-center">
        <button className="w-[100%] lg:w-[90%] lg:text-[20px] lg:tracking-wide bg-[#EBEEF0] py-3 rounded-full font-bold mb-5">
          Join Pro Plan
        </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Everything in Starter, plus:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live weekly mentor session</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> 1 major project with GitHub deployment</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Resume & LinkedIn review session</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Priority email support</li>
        </ul>
      </div>

      {/* Advanced Plan */}
      <div className="shadow-md mt-8 lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px]">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Advanced Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Custom Pricing <br />Designed for universities, colleges & tech comm...</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px]">₹2,499 <span className="text-sm font-semibold lg:text-[16px]">/ 6 Weeks</span></p>
       <div className="flex justify-center">
        <button className="w-full bg-[#EBEEF0] py-3 lg:text-[20px] lg:tracking-wide lg:w-[90%] rounded-full font-bold mb-5">
          Upgrade to Advanced
        </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Everything in Pro, plus:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Dedicated mentor guidance (2× / week live)</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Real-client simulation project</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Final project presentation & feedback</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Interview prep & mock tests</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Project review on GitHub</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Internship Letter + Certificate</li>
        </ul>
      </div>

      {/* Campus Connect Plan */}
      <div className="mt-8 shadow-md lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px]">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Campus Connect / Group Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Best for students who want a hands-on, guided learning experience</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px]">₹999 <span className="text-sm font-semibold lg:text-[16px]">/ per student</span></p>
        <div className="flex justify-center">
        <button className="w-full bg-[#EBEEF0]  py-3 rounded-full font-bold mb-5 lg:text-[20px] lg:w-[90%] ">
          Request a Demo or Proposal
        </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Custom Features:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Custom schedule & content</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live broadcast certifications</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Team leaders for groups</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Access to all tracks</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Bulk pricing (starts at ₹799 per student)</li>
        </ul>
      </div>
    </div>
  </div>
)}


      {activeTab === "quarterly" && (
  <div className="flex flex-col lg:flex-row lg:gap-10 lg:mx-20">

    {/* Starter Plan */}
    <div className="relative bg-[linear-gradient(180deg,_#2C17A3_2.51%,_#B51A5B_87.35%)] text-white mt-6 pt-10 pb-6 px-6 rounded-xl w-full lg:w-[400px] ">
      <img
        src="images/rocket-right.png"
        alt="rocket"
        ref={quarterlyRocket}
        className="absolute block lg:hidden -top-12 right-25 w-18 rotate-360"
      />
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-56 h-20 bg-[#2C17A3] text-white flex items-center justify-center font-semibold clip-path-trapezoid-reverse">
        <p className="-mt-11 lg:text-[17px]">Most popular</p>
      </div>
      <style>{`
        .clip-path-trapezoid-reverse {
          clip-path: polygon(0 70%, 20% 0, 80% 0, 100% 70%);
        }
      `}</style>
      <h2 className="text-left text-lg font-semibold mb-1 lg:text-[24px]">Starter Plan</h2>
      <p className="text-left text-[13px] mb-4 lg:text-[15px]">
        Recommended for beginners and students looking for basic exposure
      </p>
      <p className="text-left text-2xl font-bold lg:text-[24px]">
        ₹1,999 <span className="text-base font-medium lg:text-[16px]">/ 3 Months</span>
      </p>
      <div className="flex justify-center">
        <button className="mt-4 py-3 w-[100%] lg:tracking-wider lg:w-[90%] lg:text-[20px] bg-[#151515] rounded-full text-white font-semibold hover:bg-gray-900 transition">
          Enroll in Starter Plan
        </button>
      </div>
      <ul className="mt-6 space-y-5 text-sm lg:text-[15px] text-left mb-15">
        <p className="text-[15px] lg:text-[18px]">Features:</p>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> 3-month duration (Self-paced)</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Guided mini-projects</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Certificate of Completion</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> WhatsApp group support</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Email-based doubt resolution</li>
        <li className="flex items-center gap-2"><FaCheck className="text-white" /> Access to LMS Portal</li>
      </ul>
    </div>

    {/* Remaining Plans */}
    <div className="mt-6 flex flex-col lg:flex-row lg:gap-10 lg:w-3/4">
      {/* Pro Plan */}
      <div className="shadow-md mt-5 lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px] ">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Pro Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Best for students who want a hands-on, guided learning experience</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px]">₹3,499 <span className="lg:text-[16px] text-sm font-semibold">/ 3 Months</span></p>
        <div className="flex justify-center">
          <button className="w-[100%] lg:w-[90%] lg:text-[20px] lg:tracking-wide bg-[#EBEEF0] py-3 rounded-full font-bold mb-5">
            Join Pro Plan
          </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Everything in Starter, plus:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live weekly mentor session</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> 1 major project with GitHub deployment</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Resume & LinkedIn review session</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Priority email support</li>
        </ul>
      </div>

      {/* Advanced Plan */}
      <div className="shadow-md mt-8 lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px] ">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Advanced Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Custom Pricing <br />Designed for universities, colleges & tech comm...</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px]">₹4,999 <span className="text-sm font-semibold lg:text-[16px]">/ 3 Months</span></p>
        <div className="flex justify-center">
          <button className="w-full bg-[#EBEEF0] py-3 lg:text-[20px] lg:tracking-wide lg:w-[90%] rounded-full font-bold mb-5">
            Upgrade to Advanced
          </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Everything in Pro, plus:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Dedicated mentor guidance (2× / week live)</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Real-client simulation project</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Final project presentation & feedback</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Interview prep & mock tests</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Project review on GitHub</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Internship Letter + Certificate</li>
        </ul>
      </div>

      {/* Campus Connect Plan */}
      <div className="mt-8 shadow-md lg:mt-0 bg-white rounded-2xl p-5 w-full lg:w-[400px] ">
        <h3 className="font-semibold text-[18px] mb-2 lg:text-[24px] lg:mt-5">Campus Connect / Group Plan</h3>
        <p className="mb-2 text-sm lg:text-[15px] lg:mb-4">Best for students who want a hands-on, guided learning experience</p>
        <p className="text-xl font-bold mb-4 lg:text-[24px]">₹999 <span className="text-sm font-semibold lg:text-[16px]">/ per student</span></p>
        <div className="flex justify-center">
          <button className="w-full bg-[#EBEEF0] py-3 rounded-full font-bold mb-5 lg:text-[20px] lg:w-[90%] ">
            Request a Demo or Proposal
          </button>
        </div>
        <p className="mb-4 font-semibold lg:text-[18px]">Custom Features:</p>
        <ul className="space-y-5 text-sm mb-10 lg:text-[15px]">
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Custom schedule & content</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live broadcast certifications</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Team leaders for groups</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Access to all tracks</li>
          <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Bulk pricing (starts at ₹799 per student)</li>
        </ul>
      </div>
    </div>
  </div>
)}

        
      </div>
      
    </div>

    <div className="flex flex-col items-center py-10 px-4">
  <h2 className="text-[28px] tracking-wide lg:text-[70px] lg:tracking-wider font-[anton] mb-2 text-center">
    TECHNOLOGIES AVAILABLE
  </h2>
  <div className="text-center mb-6 text-[14px] lg:text-[28px] lg:flex">
  <p>  Gain real-world experience, build projects </p>
  <p> and earn certifications</p>
  </div>

  <div className="bg-[#0F1112] text-white rounded-xl px-6 py-6 w-full lg:py-20 lg:px-20 lg:mt-15 lg:w-[91%]">
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-50">
      {[0, 1, 2].map((col) => (
        <ul
          key={col}
          className="space-y-3 lg:space-y-6  text-sm lg:text-[20px] text-left mb-3 lg:mb-0"
        >
          {technologies.slice(col * 10, col * 10 + 10).map((tech, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCircle className="text-[#3CD382] text-[11px] mt-1.5" />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
</div>



    <div className="py-10 px-4 flex flex-col items-center mb-5 lg:mb-25">
  <h2 className="text-[28px] lg:text-[70px] font-[anton] tracking-wide mb-8 text-center">
    PERKS & OUTCOMES
  </h2>

  <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-10 ">
    {/* Letter of Recommendation */}
    <div className="bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center lg:w-[500px] lg:h-[320px]">
      <img
        src="/images/scroll.png"
        alt="Letter of Recommendation"
        className="w-16 h-16 mx-auto mb-2 lg:w-[80px] lg:h-[80px] lg:mb-4"
      />
      <h3 className="text-[20px] font-bold mb-4 lg:text-[25px]">Letter of Recommendation</h3>
      <p className="text-[15px] mb-2 lg:text-[20px] lg:max-w-[380px] lg:ml-8">
        Outstanding performers receive a personalized recommendation letter from our team leads.
      </p>
    </div>

    {/* Certificate */}
    <div className="bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center lg:w-[500px] lg:h-[320px]">
      <img
        src="/images/award.png"
        alt="Certificate"
        className="w-18 h-16 mx-auto mb-2  lg:w-[80px] lg:h-[80px] lg:mb-4"
      />
      <h3 className="text-[20px] lg:text-[25px] font-bold mb-4">Certificate</h3>
      <p className="text-[15px] mb-2 lg:text-[20px] lg:max-w-[380px] lg:ml-8">
        Receive an official completion certificate to showcase your achievement and new skills.
      </p>
    </div>

    {/* Personal Branding */}
    <div className="bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center lg:w-[500px] lg:h-[320px]">
      <img
        src="/images/shuttle.png"
        alt="Personal Branding"
        className="w-16 h-16 mx-auto mb-2  lg:w-[80px] lg:h-[80px] lg:mb-4"
      />
      <h3 className="text-[20px] font-bold mb-4 lg:text-[25px]">Personal Branding</h3>
      <p className="text-[15px] mb-2 lg:text-[20px] lg:max-w-[300px] lg:ml-18 ">
        Enhance your resume and portfolio with industry-relevant projects and experience.
      </p>
    </div>
  </div>
</div>

    <Footer />
    </div>

  );
};

export default Internship;
