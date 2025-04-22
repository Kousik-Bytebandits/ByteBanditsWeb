import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScroll, useTransform, motion } from "framer-motion";
import  { useRef } from "react"; 
import { ArrowRight } from "lucide-react";

const ContactPage = () => { 
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
      });
    // Scale the hero background image slightly on scroll
       const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);
  return (
    <div>
  <Navbar />
  <section className="relative  overflow-hidden h-[90vh] flex flex-col justify-center items-center text-center ">
  
  <div className="contact-shapes ">
  <div>
    <motion.img
      src="/shape-1.png"
      alt="Orange Shape"
      style={{ scale }}
      className="floating absolute top-[-430px] left-[-580px] w-[1000px] z-0"
    />
    
    <motion.img
      src="/blue-shape.png"
      alt="Green Shape"
      style={{ scale }}
      className="floating absolute top-[10px] right-[-10px] w-[400px] h-[900px] z-10"
    />
  </div>

  <img
    src="/shape-4.png"
    alt="Loop Shape"
    className="absolute top-[300px] left-[580px] w-[120px] z-30 floating"
  />
  <img
    src="/shape-5.png"
    alt="Loop Shape"
    className="absolute top-[450px] right-[600px] w-[130px] z-30 floating"
  />
</div>
  
  <motion.div className="contact-title mt-50"> 
  {["YOUR VOICE", "MATTERS"].map((line, lineIndex) => (
    <div
      key={lineIndex}
      className="title-line flex flex-wrap justify-center items-center text-[60px] sm:text-[40px] md:text-[90px] lg:text-[128px] sm:leading-[50px] md:leading-[110px] lg:leading-[152px] font-[anton] sm:space-x-4 lg:space-x-6"
    >
      {line.split(" ").map((word, wIndex) => (
        <div
          key={wIndex}
          className="flex"
          style={{ color: lineIndex === 1 ? '#1c9c60' : '#353639' }}
        >
          {word.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform hover:scale-y-110 origin-bottom"
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  ))}

  <p className="year text-[#818181] text-[25px]">SINCE 2024</p>
</motion.div>



  </section>
  <section className="relative z-10">
  <motion.img
      src="/shape-3.png"
      alt="White Shape"
      style={{ scale }}
      className="floating absolute top-[-500px] left-[-450px] w-[800px] z-[100]"
    />
  <div className="w-full h-[60vh] bg-gradient-to-b from-[#193C56F2] to-[#0B1922] py-20 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-100 text-center mt-5 ">
    
    {/* Address */}
    <div className="bg-[#E7E7E8] p-8 w-[300px] h-[350px] rounded-lg shadow-md">
      <h3 className="text-[35px] font-[anton] mt-5">ADDRESS</h3>
      <img src="loc.png" alt="Location Icon" className="w-[50px] h-[50px] mx-auto mt-8" />
      <p className="text-[18px] leading-relaxed mt-5 inter">
        Plot no.3a, door no.1/1033,<br />
        Kumudham Nagar Extension,<br />
        Mugalivakkam, <br/>Chennai - 600125
      </p>
    </div>

    {/* Email */}
    <div className="w-[300px] h-[350px] bg-[#E7E7E8] p-8 rounded-lg shadow-md">
      <h3 className="text-[35px] font-[anton] mt-5">EMAIL</h3>
      <img src="mail.png" alt="Email Icon" className="w-[50px] h-[50px] mx-auto  mt-8" />
      <p className="text-[18px] leading-relaxed mt-8 inter" >
        bbtechworks@gmail.com<br />
        info.bbtech@gmail.com
      </p>
    </div>

    {/* Phone */}
    <div className="w-[300px] h-[350px] bg-[#E7E7E8] p-8 rounded-lg shadow-md">
      <h3 className="text-[35px] font-[anton] mt-5">PHONE</h3>
      <img src="ph.png" alt="Phone Icon" className="w-[50px] h-[50px] mx-auto mt-8" />
      <p className="text-[18px] leading-relaxed mt-8 inter">
        +91 79048 12982<br />
        +91 89256 18429
      </p>
    </div>

  </div>
</div>

  </section>

  <div className="w-full h-[105vh] bg-white px-6 py-16 text-black">

  {/* === CONTACT FORM SECTION === */}
  <div className="max-w-7xl mx-auto px-4 mb-16">
  {/* CENTERED HEADING */}
  <h2 className="text-[60px] font-[anton] text-center mb-10">
    GET IN TOUCH TODAY
  </h2>

  {/* TWO-COLUMN LAYOUT */}
  <div className="grid md:grid-cols-5 gap-8 items-start">
    
    {/* LEFT FORM (3/5) */}
    <form className="space-y-4 md:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block details text-[20px] mb-4">First Name *</label>
          <input type="text" className="w-[350px] h-[60px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]" />
        </div>
        <div>
          <label className="block  details text-[20px] mb-4">Last Name</label>
          <input type="text" className="w-[350px] h-[60px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block  details text-[20px] mb-4">Email *</label>
          <input type="email" className="w-[350px] h-[60px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]" />
        </div>
        <div>
          <label className="block  details text-[20px] mb-4">Phone</label>
          <input type="tel" className="w-[350px] h-[60px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]" />
        </div>
      </div>

      <div>
        <label className="block  details text-[20px] mb-4">Subject *</label>
        <input type="text" className="w-full h-[60px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]" />
      </div>

      <div>
        <label className="block  details text-[20px] mb-4">Your Message *</label>
        <textarea rows="5" className="w-full h-[200px] border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"></textarea>
      </div>

      <div className="flex items-center gap-4 mt-10">
        <button type="submit" className="w-[200px] h-[60px] bg-gradient-to-b from-[#193C56F2] to-[#0B1922] text-white text-[18px] inter px-5 py-2 rounded-full ">
          Send a Message
        </button>
        <button type="button" className="w-12 h-12 ml-5  rounded-full bg-[#353639] text-white flex items-center justify-center">
          <ArrowRight size={30} className="text-white" />
        </button>
      </div>
    </form>

    {/* RIGHT IMAGE (2/5) */}
    <div className="md:col-span-2 flex justify-center">
      <img
        src="contact-right.png"
        alt="Contact Person"
        className="rounded-xl shadow-lg object-cover h-full max-h-[900px] w-auto"
      />
    </div>
  </div>
</div>
</div>
  {/* === LOCATION MAP SECTION === */}
  <div className="w-Full h-[66vh] bg-gradient-to-b from-[#193C56F2] to-[#0B1922] py-8 ">
    <div className="max-w-8xl  mx-auto px-4">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.612199639886!2d80.16661824060697!3d13.020161203012064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260c32694274f%3A0x65271faa992c61ca!2s1%2F628%2C%20Kumudham%20Nagar%204th%20St%2C%20Dhanak%20Nagar%2C%20Kumudam%20Nagar%2C%20Mugalivakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e1!3m2!1sen!2sus!4v1745326430041!5m2!1sen!2sus" 
        className="ml-24 mt-6 w-[90%] h-[500px] rounded-lg"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>


  <Footer />
   
    </div>
  );
}   
export default ContactPage;