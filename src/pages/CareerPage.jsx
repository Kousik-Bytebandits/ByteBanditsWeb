import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { useState,useRef } from "react";


const benefits = [
  {
    icon:'images/growth.png',
    title: 'Growth Opportunities',
    bgColor: 'bg-[#B3D0C3]',
  },
  {
    icon:'images/arrow.png' ,
    title: 'Purpose-Driven Work',
    bgColor: 'bg-[#B3D0C3]',
  },
  {
    icon: 'images/cross.png',
    title: 'Flexible Environment',
    bgColor: 'bg-[#C8DF92]',
  },
  {
    icon: 'images/hand.png',
    title: 'Inclusive Culture',
    bgColor: 'bg-[#B3D0C3]',
  },
  {
    icon: 'images/gift.png',
    title: 'Perks & Benefits',
    bgColor: 'bg-[#B3D0C3]',
  },
];
const CareerPage = () => {
   const [formData, setFormData] = useState({
    full_name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

 const inputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    const formdata = new FormData();
    formdata.append("file", file, file.name);

    fetch("https://ftpadmin.bytebandits.in/upload", {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Response from server:", result);
        alert("Upload successful!");
        if (inputRef.current) inputRef.current.value = ""; // reset input
      })
      .catch((error) => {
        console.error("Upload error:", error);
        alert("Upload failed. Please try again.");
      })
      .finally(() => setIsUploading(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    

    const payload = {
      template_type: "job_application",
      full_name: formData.full_name,
      email: formData.email,
      position: "Software Engineer",
      date: getCurrentDate(),
    };

    try {
      const res = await fetch("https://api.bytebandits.in/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(" Application submitted successfully!");
        setFormData({ full_name: "", email: "" });
      } else {
        alert(" Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert(" Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full bg-white inter">
      
      <section className=" w-full flex items-center justify-center px-4 pt-8 pb-16"
       style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
        <Navbar/>
        <div className="bg-[#E9F3F0]  w-full rounded-xl p-4 space-y-6 shadow-lg relative">
        

          
          <h1 className="text-[45px] text-[#353639] leading-tight mt-10 font-[anton]">
            THE EASIEST WAY <br/>TO GET YOUR <br /> NEW JOB
          </h1>

       
<div className="relative  rounded-2xl overflow-hidden">
  {/* First image - responsive width */}
  <img
    src="/images/career1.png"
    alt="Guy"
    className="w-full h-auto object-cover rounded-2xl"
  />

  {/* Second image - absolute positioned with responsive size & position */}
  <div
    className=" 
      left-3/4 
      transform translate-x-6/9 -translate-y-3/9 
      w-3/5 sm:w-1/4 md:w-1/5
      rounded-2xl
      overflow-hidden
      z-10
    "
  >
    <img
      src="/images/career2.png"
      alt="Girl"
      className="w-full h-auto object-cover rounded-2xl"
    />
  </div>
</div>


         
  <div className=" text-[14px] mb-10 -mt-50 w-[40%] ">
  <p>we&apos;re building a</p>
  <p>culture where great</p>
  <p>people (like you)</p>
  <p>can do their best work.</p>
</div>


        
<div className="mb-10 bg-white rounded-full px-3 py-2 flex items-center justify-between shadow-md border border-gray-200">
  <div className="flex items-center gap-2 pr-3 border-r border-gray-900">
     <div className="ml-3 mr-1">
      <BsSuitcaseLg />
   </div>
    <select className="bg-transparent text-sm  focus:outline-none">
      <option>Category</option>
    </select>
  </div>
  <div className="relative flex-1">
    <input
      type="text"
      placeholder="Search Job"
      className="w-full px-4 ml-1 py-1 text-sm   focus:outline-none border border-[#1B4C2D] rounded-full"
    />
    <div className="absolute text-3xl right-0  top-1/2 transform -translate-y-1/2 text-[#1B4C2D] ">
     
       <IoSearchCircle />
    </div>
  </div>
</div>

          
          <div className="text-xs text-gray-500 mt-2 mb-5">
         <span className="font-bold text-black">Popular :</span> Node.Js Developer, React developer, Graphic Designer
          </div>
        </div>
      

      </section>
        <div className="mt-10 text-center mb-8">
  
  <h2 className="text-5xl  font-[anton] text-[#353639]  mb-8">
    WHY WORK WITH US
  </h2>

 
  <p className="text-gray-700 mb-8 text-left text-[14px] mx-12">
    We believe that innovation thrives in an environment of collaboration, creativity, and respect.
    If you&apos;re passionate about making an impact and growing alongside a dynamic team, we’d love to meet you.
  </p>

 <div className="grid grid-cols-2 gap-4 justify-items-center">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`${benefit.bgColor} p-6 rounded-xl flex flex-col items-center justify-center w-40 h-40`}
          >
             <img src={benefit.icon} alt={benefit.title} className="w-10 h-10 mb-3" />
           
           {benefit.title === 'Perks & Benefits' ? (
  <p className=" font-semibold text-sm text-center leading-tight">
    Perks<br />&<br />Benefits
  </p>
) : (
  <p className="mt-3 font-semibold text-sm text-center">{benefit.title}</p>
)}

          </div>
        ))}
      </div>
</div>
<div
  className=" p-4  text-white flex flex-col justify-between overflow-hidden"
  >

  <div className="space-y-6  rounded-[30px]"
   style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
    <h2 className="text-[38px] leading-tight font-medium  px-6 mt-20">
      Get Your <span className="text-[#50BD8A]">Job</span><br />
      <span className="text-[#50BD8A]">Application</span><br />
      Done in Minutes
    </h2>
    <p className="text-[14px] tracking-wider font-[200] px-6" >
      Submit your resume in just a few clicks<br />
      it only takes a couple of minutes!
    </p>
 
 <div className="flex flex-col items-center mt-10 gap-4">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        ref={inputRef}
        onChange={onFileChange}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="bg-transparent border-2 border-[#F9FFA6] text-[#F9FFA6] rounded-full px-4 py-1 text-sm flex items-center gap-5 hover:bg-[#B4F0C3] hover:text-[#084C38] transition-all"
        disabled={isUploading}
      >
        Upload CV
        <div className="w-6 h-6 rounded-full border bg-[#F9FFA6]">
          <FaArrowUp className="mt-1 text-[#0E3216] ml-1" />
        </div>
      </button>

      {isUploading && <p className="text-sm text-white">Uploading...</p>}
    </div>

    <div className="ml-8">
    <img
      src="/images/career3.png"
      alt="Girl"
      className="w-full h-[300px] object-contain "
    />
  </div>
  </div>

  
  
</div>

 <div className="flex flex-col items-center gap-5 p-4 mt-10">
      
      <div className="w-full  rounded-xl p-6  "
       style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-white text-black outline-none"
            />
          </div>
          <div>
            <label className="text-white text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-white text-black outline-none mb-3"
            />
          </div>
        </form>
      </div>

      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className=" hover:bg-[#0a301d] text-white font-semibold px-12 py-3 rounded-full mb-5"
       style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
        {isSubmitting ? "Submitting..." : "Apply Now"}
      </button>
    </div>

      <Footer/>
      
    </div>
  );
};

export default CareerPage;
