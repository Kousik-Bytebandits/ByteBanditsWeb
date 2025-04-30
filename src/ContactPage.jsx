import { useState,useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./index.css"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.1]);

  // State to hold form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://api.bytebandits.in/send-email", requestOptions);
      const result = await response.text();
      console.log(result);
    
      toast.success("Message sent successfully!", {
        className: 'toast-success'
      });
    
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
      });
    } catch (error) {
      console.error("Error:", error);
    
      toast.error("Something went wrong. Please try again.", {
        className: 'toast-error'
      });
    }
    
    
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      <section className="contact-hero relative overflow-hidden h-[90vh] flex flex-col justify-center items-center text-center">
        {/* Floating Shapes */}
        <div className="contact-shapes">
          <div>
            <motion.img
              src="/shape-1.png"
              alt="Orange Shape"
              style={{ scale }}
              className="con-1 floating absolute top-[-26.875rem] left-[-36.25rem] w-[62.5rem] z-0"
            />
            <motion.img
              src="/blue-shape.png"
              alt="Green Shape"
              style={{ scale }}
              className="con-2 floating absolute top-[0.625rem] right-[-0.625rem] w-[25rem] h-[56.25rem] z-10"
            />
          </div>

          <img
            src="/shape-4.png"
            alt="Loop Shape"
            className="con-3 absolute top-[14.75rem] left-[35.25rem] w-[7.5rem] z-30 floating"
          />
          <img
            src="/shape-5.png"
            alt="Loop Shape"
            className="con-4 absolute top-[24.125rem] right-[35.5rem] w-[8.125rem] z-30 floating"
          />
        </div>

        {/* Title */}
        <motion.div className="contact-title mt-[3.125rem]">
          {["YOUR VOICE", "MATTERS"].map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="title-line flex flex-wrap justify-center items-center text-[3.75rem] sm:text-[2.5rem] md:text-[5.625rem] lg:text-[8rem] sm:leading-[3.125rem] md:leading-[6.875rem] lg:leading-[9.5rem] font-[anton] sm:space-x-4 lg:space-x-6"
            >
              {line.split(" ").map((word, wIndex) => (
                <div key={wIndex} className="flex" style={{ color: lineIndex === 1 ? '#1c9c60' : '#353639' }}>
                  {word.split("").map((char, i) => (
                    <span key={i} className="inline-block transition-transform hover:scale-y-110 origin-bottom">
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <p className="year text-[#818181] text-[1.5625rem]">SINCE 2024</p>
        </motion.div>

      </section>

       {/* Contact Info Cards */}
       <section className="contact-info-cards relative z-10">
        <motion.img
          src="/shape-3.png"
          alt="White Shape"
          className="con-5 floating absolute md:top-[-31.25rem] md:left-[-28.125rem] md:w-[50rem] z-[100]"
        />
        <div className="cards-cover w-full h-[60vh] bg-gradient-to-b from-[#193C56F2] to-[#0B1922] py-[5rem] px-[1rem]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[6.25rem] text-center mt-[1.25rem]">

            {/* Address */}
            <div className="bg-[#E7E7E8] p-[2rem] md:w-[18.75rem] md:h-[21.875rem] lg:w-[18.75rem] rounded-lg shadow-md">
              <h3 className="text-[2.1875rem]  font-[anton] mt-[1.25rem]">ADDRESS</h3>
              <img src="loc.png" alt="Location Icon" className="w-[3.125rem] h-[3.125rem] mx-auto mt-[2rem]" />
              <p className="text-[1.125rem] leading-relaxed mt-[1.25rem] inter">
                No.3a, door no.1/1033,<br />
                Kumudham Nagar Extension,<br />
                Mugalivakkam, <br /> Chennai - 600125
              </p>
            </div>

            {/* Email */}
            <div className="w-[18.75rem] h-[21.875rem] bg-[#E7E7E8] p-[2rem] rounded-lg shadow-md">
              <h3 className="text-[2.1875rem] font-[anton] mt-[1.25rem]">EMAIL</h3>
              <img src="mail.png" alt="Email Icon" className="w-[3.125rem] h-[3.125rem] mx-auto mt-[2rem]" />
              <p className="text-[1.125rem] leading-relaxed mt-[2rem] inter">
                bbtechworks@gmail.com<br />
                info.bbtech@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="w-[18.75rem] h-[21.875rem] bg-[#E7E7E8] p-[2rem] rounded-lg shadow-md">
              <h3 className="text-[2.1875rem] font-[anton] mt-[1.25rem]">PHONE</h3>
              <img src="ph.png" alt="Phone Icon" className="w-[3.125rem] h-[3.125rem] mx-auto mt-[2rem]" />
              <p className="text-[1.125rem] leading-relaxed mt-[2rem] inter">
                +91 79048 12982<br />
                +91 89256 18429
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="overflow-hidden contact-form-section w-full h-[105vh] bg-white px-[1.5rem] py-[4rem] text-black">
        <div className="max-w-7xl con-div mx-auto px-[1rem] mb-[4rem]">
          
          <h2 className="text-[4.375rem] contact-head font-[anton] text-center mb-[2.5rem]">
            GET IN TOUCH TODAY
          </h2>

          <div className="grid md:grid-cols-5 gap-[2rem] items-start">

            {/* Form */}
            <form className="space-y-4 md:col-span-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                <div>
                  <label className="block details md:text-[1.25rem] para mb-[1rem]">First Name *</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="md:w-[21.875rem] md:h-[3.75rem] four-box border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                  />
                </div>
                <div>
                  <label className="block details md:text-[1.25rem] para mb-[1rem]">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="md:w-[21.875rem] md:h-[3.75rem] four-box border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                <div>
                  <label className="block details md:text-[1.25rem] para mb-[1rem]">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="md:w-[21.875rem] md:h-[3.75rem] four-box border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                  />
                </div>
                <div>
                  <label className="block details md:text-[1.25rem] para mb-[1rem]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="md:w-[21.875rem] md:h-[3.75rem] four-box border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block details md:text-[1.25rem] para mb-[1rem]">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full md:h-[3.75rem] len border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                />
              </div>

              <div>
                <label className="block details md:text-[1.25rem] para mb-[1rem]">Your Message *</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full md:h-[12.5rem] big border-[0.5px] border-[#0E2B32] p-2 rounded-lg bg-[#F3F8FF]"
                ></textarea>
              </div>

              <div className="b1 flex items-center gap-[1rem] mt-[2.5rem]">
                <button type="submit" className="md:w-[12.5rem] md:h-[3.75rem] b1 bg-gradient-to-b from-[#193C56F2] to-[#0B1922] text-white md:text-[1.125rem] inter px-[1.25rem] py-[0.5rem] rounded-full">
                  Send a Message
                </button>
                <button type="button" className="b2 w-[3rem] h-[3rem] ml-[1.25rem] rounded-full bg-[#353639] text-white flex items-center justify-center">
                  <ArrowRight size={30} className="text-white" />
                </button>
              </div>
            </form>

             {/* Right Image */}
             <div className="contact-right md:col-span-2 flex justify-center">
              <img
                src="contact-right.png"
                alt="Contact Person"
                className="rounded-xl shadow-lg object-cover h-full md:max-h-[56.25rem] w-auto"
              />
            </div>

          </div>
        </div>
      </div>
   {/* Location Map */}
   <div className="contact-map-section w-full h-[66vh] bg-gradient-to-b from-[#193C56F2] to-[#0B1922] py-[2rem] overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-[1rem]">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.612199639886!2d80.16661824060697!3d13.020161203012064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260c32694274f%3A0x65271faa992c61ca!2s1%2F628%2C%20Kumudham%20Nagar%204th%20St%2C%20Dhanak%20Nagar%2C%20Kumudam%20Nagar%2C%20Mugalivakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e1!3m2!1sen!2sus!4v1745326430041!5m2!1sen!2sus"
            className="block mx-auto mt-[1.5rem] max-w-full w-[90%] h-[31.25rem] rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick />

      <Footer />
    </div>
  );
};

export default ContactPage;
