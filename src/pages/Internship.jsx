import  { useState } from "react";
import { FaInfoCircle, FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCircle } from 'react-icons/fa';

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

  return (
    <div className="bg-[#EBEEF0]  font-[inter]">
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
        <Navbar />
      <div className="w-full ">
        {/* Heading */}
        <div className="relative text-center mb-6">
          <img
            src="/images/rocket-left.png"
            alt="Rocket Left"
            className="absolute left-[1%] top-[30%] w-15 "
          />
          <img
            src="/images/rocket-right.png"
            alt="Rocket Right"
            className="absolute right-[1%] top-[30%] w-15 "
          />
          <h1 className="text-[40px] md:text-4xl mt-[20%]  leading-normal font-[anton]">
           Launch Your Tech
          Career With Our <br/>
            Hands-On Internships
          </h1>
        </div>

        {/* Toggle Capsule */}
        <div className="relative bg-gray-200 rounded-full px-6 py-2 w-max mx-auto mb-2">
          <div
            className={`absolute top-1 left-1 transition-all duration-300 w-1/2 h-[calc(100%-0.5rem)] rounded-full bg-black z-0 ${
              activeTab === "quarterly" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
          <div className="relative z-10 flex w-48 gap-8">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === "monthly" ? "text-white" : "text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("quarterly")}
              className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === "quarterly" ? "text-white" : "text-black"
              }`}
            >
              Quarterly
            </button>
             <div className="absolute -top-7 left-4/5 transform -translate-x-1/2 bg-black text-[10px] px-2 font-[inter] py-[1px] rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[3px] after:border-transparent after:border-t-black">
  <span className="bg-[linear-gradient(92.13deg,_#E1C445_1.8%,_#33DC27_61.68%)] bg-clip-text text-transparent font-semibold">
    Save10%
  </span>
</div>

          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8 mb-15 text-center flex items-center justify-center gap-2">
          No Extra Fee <FaInfoCircle className="inline-block text-gray-400" />
        </p>

        {/* Plan Card */}
        {activeTab === "monthly" && (
          <div>
          <div className="relative bg-[linear-gradient(180deg,_#2C17A3_2.51%,_#B51A5B_87.35%)] text-white mt-6 pt-10 pb-6 px-6 rounded-xl ">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-[#2C17A3] text-white  flex items-center justify-center font-semibold clip-path-trapezoid-reverse">
              Most popular
            </div>
            <style>{`
              .clip-path-trapezoid-reverse {
                clip-path: polygon(0 80%, 20% 0, 80% 0, 100% 80%);
              }
            `}</style>
            <h2 className="text-left text-lg font-semibold mb-1">Starter Plan</h2>
            <p className="text-left text-[13px] mb-4">
              Recommended for beginners and students looking for basic exposure
            </p>
            <p className="text-left text-2xl font-bold">
              ₹999 <span className="text-base font-medium">/ 1 Month</span>
            </p>
            <div className="flex justify-center">
              <button className="mt-4 py-3 w-[100%] bg-[#151515] rounded-full text-white font-semibold hover:bg-gray-900 transition">
                Enroll in Starter Plan
              </button>
            </div>
            
            <ul className="mt-6 space-y-5 text-sm text-left mb-15">
               <p className="text-[15px]">Features:</p>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white" /> 1-month duration (Self-paced)
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white" /> Guided mini-projects
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white" /> Certificate of Completion
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white" /> WhatsApp group support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white" /> Email-based doubt resolution
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-white " /> Access to LMS Portal
              </li>
            </ul>
          </div>
          <div className="space-y-6 mt-6">
  {/* Pro Plan */}
  <div className="bg-white rounded-2xl  p-5  ">
    <h3 className="font-semibold text-[18px] mb-2">Pro Plan</h3>
    <p className="mb-2 text-sm">Best for students who want a hands-on, guided learning experience</p>
    <p className="text-xl font-bold mb-5">₹1,499 <span className="text-sm font-semibold">/ 1 Month</span></p>
    <button className="w-full bg-[#EBEEF0] py-4 rounded-full  font-bold  mb-5">
      Join Pro Plan
    </button>
    <p className="mb-4 font-medium">Everything in Starter, plus:</p>
    <ul className="space-y-4 text-sm mb-10">
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live weekly mentor session</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> 1 major project with GitHub deployment</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Resume & LinkedIn review session</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Priority email support</li>
    </ul>
  </div>

  {/* Advanced Plan */}
  <div className="bg-white rounded-2xl  p-5 ">
    <h3 className="font-semibold text-[18px] mb-2">Advanced Plan</h3>
    <p className="mb-2 text-sm">Custom Pricing <br/>Designed for universities, colleges & tech communities</p>
    <p className="text-xl font-bold mb-5">₹2,499 <span className="text-sm font-semibold">/ 6 Weeks</span></p>
    <button className="w-full bg-[#EBEEF0] py-4 rounded-full  font-bold  mb-5">
      Upgrade to Advanced
    </button>
    <p className="mb-4  font-medium">Everything in Pro, plus:</p>
    <ul className="space-y-4 text-sm mb-10">
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Dedicated mentor guidance (2× / week live)</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Real-client simulation project</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Final project presentation & feedback</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Interview prep & mock tests</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Project review on GitHub</li>
      <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Internship Letter + Certificate</li>
    </ul>
  </div>

  {/* Campus Connect / Group Plan */}
  <div className="bg-white rounded-2xl  p-5 ">
    <h3 className="font-semibold text-[18px] mb-2">Campus Connect / Group Plan</h3>
    <p className="mb-2 text-sm">Best for students who want a hands-on, guided learning experience</p>
    <p className="text-xl font-bold mb-5">₹999 <span className="text-sm font-semibold">/ per student</span></p>
    <button className="w-full bg-[#EBEEF0] py-4 rounded-full  font-bold mb-5">
      Request a Demo or Proposal
    </button>
    <p className="mb-4 font-medium">Custom Features:</p>
    <ul className="space-y-4 text-sm mb-10">
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

        {activeTab === "quarterly" && (<div>
  {/* Starter Plan */}
  <div className="relative bg-[linear-gradient(180deg,_#2C17A3_2.51%,_#B51A5B_87.35%)] text-white mt-6 pt-10 pb-6 px-6 rounded-xl">
    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-[#2C17A3] text-white flex items-center justify-center font-semibold clip-path-trapezoid-reverse">
      Most popular
    </div>
    <style>{`
      .clip-path-trapezoid-reverse {
        clip-path: polygon(0 80%, 20% 0, 80% 0, 100% 80%);
      }
    `}</style>
    <h2 className="text-left text-lg font-semibold mb-1">Starter Plan</h2>
    <p className="text-left text-[13px] mb-4">
      Recommended for beginners and students looking for basic exposure
    </p>
    <p className="text-left text-2xl font-bold">
      ₹1999 <span className="text-base font-medium">/ 3 Month</span>
    </p>
    <div className="flex justify-center">
      <button className="mt-4 py-3 w-full bg-[#151515] rounded-full text-white font-semibold hover:bg-gray-900 transition">
        Enroll in Starter Plan
      </button>
    </div>
    <ul className="mt-6 space-y-5 text-sm text-left mb-15">
      <p className="text-[15px]">Features:</p>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> 3-month duration (Self-paced)</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> 2 guided mini-projects</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> Certificate of Completion</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> Recorded sessions only</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> WhatsApp group support</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> Email-based doubt resolution</li>
      <li className="flex items-center gap-2"><FaCheck className="text-white" /> Access to LMS Portal</li>
    </ul>
  </div>

  {/* Other Plans */}
  <div className="space-y-6 mt-6">
    {/* Pro Plan */}
    <div className="bg-white rounded-2xl p-5">
      <h3 className="font-semibold text-[18px] mb-2">Pro Plan</h3>
      <p className="mb-2 text-sm">Best for students who want a hands-on, guided learning experience</p>
      <p className="text-xl font-bold mb-5">₹3,499 <span className="text-sm font-semibold">/ 3 Month</span></p>
      <button className="w-full bg-[#EBEEF0] py-4 rounded-full font-bold mb-5">
        Join Pro Plan
      </button>
      <p className="mb-4 font-medium">Everything in Starter, plus:</p>
      <ul className="space-y-4 text-sm mb-10">
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live weekly mentor sessions</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> 2 major project with GitHub deployment</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Resume & LinkedIn review session</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Priority email support</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Real-world assignment reviews</li>
      </ul>
    </div>

    {/* Advanced Plan */}
    <div className="bg-white rounded-2xl p-5">
      <h3 className="font-semibold text-[18px] mb-2">Advanced Plan</h3>
      <p className="mb-2 text-sm">Custom Pricing <br />Designed for universities, colleges & tech communities</p>
      <p className="text-xl font-bold mb-5">₹4,999 <span className="text-sm font-semibold">/ 18 Weeks</span></p>
      <button className="w-full bg-[#EBEEF0] py-4 rounded-full font-bold mb-5">
        Upgrade to Advanced
      </button>
      <p className="mb-4 font-medium">Everything in Pro, plus:</p>
      <ul className="space-y-4 text-sm mb-10">
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Dedicated mentor guidance (2×/week live)</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Real-client simulation project</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Final project presentation & feedback</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Interview prep & mock tests</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Project review on GitHub</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Internship Letter + Certificate</li>
      </ul>
    </div>

    {/* Campus Plan */}
    <div className="bg-white rounded-2xl p-5">
      <h3 className="font-semibold text-[18px] mb-2">Campus Connect / Group Plan</h3>
      <p className="mb-2 text-sm">Best for students who want a hands-on, guided learning experience</p>
      <p className="text-xl font-bold mb-5">₹999 <span className="text-sm font-semibold">/ per student</span></p>
      <button className="w-full bg-[#EBEEF0] py-4 rounded-full font-bold mb-5">
        Request a Demo or Proposal
      </button>
      <p className="mb-4 font-medium">Custom Features:</p>
      <ul className="space-y-4 text-sm mb-10">
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Custom schedule & content</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Co-branded certificates</li>
        <li className="flex items-start gap-2"><FaCheck className="mt-1 text-black" /> Live bootcamps for groups</li>
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
      <h2 className="text-[28px] tracking-wide md:text-3xl font-[anton] mb-2 text-center">
        TECHNOLOGIES AVAILABLE
      </h2>
      <p className="text-center  mb-6 text-[14px] md:text-base">
        Gain real-world experience, build projects <br /> and earn certifications
      </p>

      <div className="bg-[#0F1112] text-white rounded-xl px-6 py-6 w-full max-w-md ">
        <ul className="space-y-3 text-sm md:text-base">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCircle className="text-[#3CD382] text-[11px] mt-1.5" />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
     <div className=" py-10 px-4 flex flex-col items-center">
      <h2 className="text-[28px] md:text-3xl font-[anton] tracking-wide mb-8 text-center">PERKS & OUTCOMES</h2>

      <div className="space-y-6 max-w-md w-full">
        {/* Certificate */}
        <div className="bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center">
          <img
            src="/images/award.png"
            alt="Certificate"
            className="w-18 h-16 mx-auto mb-2"
          />
          <h3 className="text-[20px] font-bold mb-4">Certificate</h3>
          <p className="text-[15px] mb-2">
            Receive an official completion certificate to showcase your achievement and new skills.
          </p>
        </div>

        {/* Letter of Recommendation */}
        <div className="bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center">
          <img
            src="/images/scroll.png"
            alt="Letter of Recommendation"
            className="w-16 h-16 mx-auto mb-2"
          />
          <h3 className="text-[20px] font-bold mb-4">Letter of Recommendation</h3>
          <p className="text-[15px]  mb-2 ">
            Outstanding performers receive a personalized recommendation letter from our team leads.
          </p>
        </div>

        {/* Personal Branding */}
        <div className="mb-15 bg-white rounded-xl border-4 border-[#ACC4D4] p-6 text-center">
          <img
            src="/images/shuttle.png"
            alt="Personal Branding"
            className="w-16 h-16 mx-auto mb-2"
          />
          <h3 className="text-[20px] font-bold mb-4">Personal Branding</h3>
          <p className="text-[15px]  mb-2 ">
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
