import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
  const inputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

   

    const formdata = new FormData();
    formdata.append("file", file, file.name);

    fetch("https://resume-upload-orcin.vercel.app/api/upload", {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Response from server:", result);
        alert("Upload successful!");
        if (inputRef.current) inputRef.current.value = ""; 
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
      const res = await fetch("https://website-email-iota.vercel.app/send-email", {
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
      
      <section className=" w-full flex items-center justify-center px-4  pb-10 lg:pt-6  lg:px-8 pt-2 lg:pb-15"
       style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
        <Navbar/>
        <div className="bg-[#E9F3F0]  w-full rounded-xl p-4 space-y-6  relative">
        
<div className="lg:flex lg:justify-between ">
          
          <h1 className="text-[45px] lg:text-[100px] lg: lg:tracking-wide lg:mt-30 lg:ml-20 text-[#353639] leading-tight mt-20 font-[anton]">
            THE EASIEST WAY <br/>TO GET YOUR <br /> NEW JOB
          </h1>

       
<div className="relative  rounded-2xl overflow-hidden lg:mt-30 lg:mr-35 ">
 
  <img
    src="/images/carrers_hero.png"
    alt="Guy"
    className="w-full  lg:h-[800px] h-auto object-cover rounded-2xl"
  />

  
 
</div>
</div>

         
  <div className="relative text-[14px]   mb-12 -mt-[38%] w-[40%] lg:text-[25px] lg:-mt-[22%] lg:w-[40%] lg:ml-20 lg:mb-[4%]">
  <>we&apos;re building a
  culture where great
  people (like you)
 can do their best work.</>
</div>


        
<div className="mb-10 bg-white rounded-full px-3 py-2 lg:py-5 lg:w-[38%] lg:ml-20 flex items-center justify-between shadow-md border border-gray-200">
  {/* Category Selector with icon */}
  <div className="flex items-center  lg:gap-5 pr-5 lg:pr-20 relative">
    <div className="lg:ml-5 ">
      <img
        src="images/suitcase.png"
        alt="Category Icon"
        className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]"
      />
    </div>
    <select
      className="bg-transparent text-sm lg:text-[20px] focus:outline-none "
    >
      <option>Category</option>
      <option>React developer</option>
      <option>Node.Js</option>
      <option>Graphic Designer</option>
    </select>

  
    <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-[#1B4C2D]" />
  </div> 

 <div className="relative flex-1 ">
    <input
      type="text"
      placeholder="Search Job"
      className="w-full px-1  py-1  text-sm lg:text-[20px] lg:w-[100%]  lg:placeholder:text-lg lg:py-3 lg:px-5  focus:outline-none border-1 border-[#1B4C2D] rounded-full"
    />
    <div className="absolute text-3xl right-0  top-1/2 transform -translate-y-1/2 text-[#1B4C2D] ">
     
       <IoSearchCircle className="lg:w-[60px] lg:h-[60px]"/>
    </div>
  </div>
</div>


          
          <div className="text-xs text-gray-500 mt-2 mb-5 lg:text-[20px] lg:ml-20 lg:mt-[4%] lg:mb-[5%]">
         <span className="font-bold text-black">Popular :</span> Node.Js Developer, React developer, Graphic Designer
          </div>
        </div>
      

      </section>
      
        <div className="mt-10 text-center mb-8">
  <div className="lg:flex lg:justify-around lg:items-center">
  <h2 className="text-5xl  font-[anton] text-[#353639]  mb-8 lg:text-[100px] lg:w-[30%] lg:text-left lg:leading-tight lg:ml-15 lg:mt-20">
    WHY WORK WITH US
  </h2>

 
  <p className="text-gray-700 mb-8 text-left text-[14px] mx-12 lg:text-[25px] lg:w-[46%] lg:mt-30 lg:mr-25">
    We believe that innovation thrives in an environment of collaboration, creativity, and respect.
    If you&apos;re passionate about making an impact and growing alongside a dynamic team, we’d love to meet you.
  </p>
</div>
 <div className="grid grid-cols-2 gap-4 justify-items-center lg:grid-cols-5 lg:ml-25 lg:w-[87%] lg:mt-25 lg:mb-[5%]">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`${benefit.bgColor} p-6 rounded-xl flex flex-col items-center justify-center w-40 h-40 lg:w-[300px] lg:h-[300px]`}
          >
            {benefit.icon==='images/gift.png' ? (
              <img src="images/gift.png" className="w-14 h-14 lg:w-24 lg:h-24"></img>
            ): <img src={benefit.icon} alt={benefit.title} className="w-10 h-10 mb-3 lg:w-18 lg:h-18" />}
            
           
           {benefit.title === 'Perks & Benefits' ? (
  <p className=" font-semibold text-sm text-center text-[#133C1F]  leading-tight lg:text-[30px]">
    Perks<br />&<br />Benefits
  </p>
) : (
  <p className="mt-3 font-semibold text-sm text-center text-[#133C1F] lg:text-[30px] ">{benefit.title}</p>
)}

          </div>
        ))}
      </div>
</div>
<div
  className=" p-4  text-white flex flex-col justify-between overflow-hidden"
  >

  <div className="space-y-6  lg:w-[88%] lg:flex lg:justify-around lg:h-[600px] lg:ml-22 rounded-[30px]"
   style={{
         
          
    background:
      "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
   

                 
        }}>
          <div className="lg:ml-45">
    <h2 className="text-[38px] lg:text-[60px] leading-tight font-medium lg:mb-10 px-6 mt-20">
      Get Your <span className="text-[#50BD8A]">Job</span><br />
      <span className="text-[#50BD8A]">Application</span><br />
      Done in Minutes
    </h2>
    <p className="text-[14px] lg:text-[20px] tracking-wider font-[200] px-6" >
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
        className="lg:mr-55 lg:py-3 lg:text-[25px] bg-transparent border-2 border-[#F9FFA6] text-[#F9FFA6] rounded-full px-4 py-1 text-sm flex items-center gap-5 hover:bg-[#B4F0C3] hover:text-[#084C38] transition-all"
        disabled={isUploading}
      >
        Upload CV
        <div className="w-6 h-6 rounded-full border bg-[#F9FFA6] lg:w-10 lg:h-10 ">
          <FaArrowUp className="mt-1 text-[#0E3216] ml-1 lg:text-lg lg:ml-2.5 lg:mt-2" />
        </div>
      </button>

      
    </div>
</div>
    <div className="ml-8 ">
    <img
      src="/images/career3.png"
      alt="Girl"
      className="w-full h-[300px] object-contain lg:h-[600px]"
    />
  </div>

</div>

  
  
</div>

 <div className="flex flex-col items-center gap-5 p-4 mt-10 lg:mt-0">
      
      <div className="w-full  rounded-4xl p-6  lg:w-[88%] lg:mr-10 lg:h-[280px]"
       style={{
          background:
            "linear-gradient(274.52deg, rgba(25, 86, 50, 0.95) 3.91%, #0E3216 91.64%)",
        }}>
        <form onSubmit={handleSubmit} className="space-y-4 lg:flex lg:justify-around">
          <div  className="lg:flex lg:flex-col lg:mt-10">
            <label className="text-white text-sm font-medium lg:text-[25px] lg:mb-5">Full Name *</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-white text-black outline-none lg:p-6 lg:w-[600px]"
            />
          </div>
          <div className="lg:flex lg:flex-col lg:mt-10 ">
            <label className="text-white text-sm font-medium lg:text-[25px] lg:mb-5">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-white text-black outline-none mb-3 lg:p-6 lg:w-[700px]"
            />
          </div>
        </form>
      </div>

      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className=" hover:bg-[#0a301d] text-white font-semibold px-12 py-3 rounded-full mb-5 lg:py-5 lg:text-[20px] lg:px-22 lg:mt-5 lg:mr-25 lg:mb-25"
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
