
// AboutSection.jsx

const AboutSection = () => {
    return (
       <section className="about-section mx-50 mt-50 sm:py-[80px]  sm:px-[30px] md:px-[50px] text-[#333]">
               <p className="section-label text-left mb-10 text-[12px] sm:text-[12px] text-[#818181] year">ABOUT US</p>
               <div className="about-content flex flex-col lg:flex-row  items-start">
                 <div className="about-title flex-1 text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.3] font-[anton] title
                 " data-aos="fade-up"
                 data-aos-delay="10">
                   DISCOVER <br /> OUR <span className="highlight text-[#50BD8A]">AGENCY</span>
                   <div className="about-description border-l-4 border-[#FAAC61] pl-[20px] text-[14px] sm:text-[15px] mt-[50px] max-w-[400px]  text-[#666]"  data-aos="fade-up"
                 data-aos-delay="10">
                     <p className="about md:mt-25 leading-6">
                       Welcome to <span className="highlight text-[#50BD8A]">Byte Bandits</span> where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
                     </p>
                   </div>
                 </div>
                 <div className="about-text flex-1 text-[16px] sm:text-[16px] leading-relaxed text-[#808080] mt-6 tracking-wide lg:mt-0 ">
                   <p className="about"data-aos="fade-up"
                 data-aos-delay="10">
                     At <span className="highlight text-[#50BD8A] ">Byte Bandits</span>,we believe technology is more than just functionality — it&apos;s about building emotional connections through digital experiences. Our mission is to combine your vision with our technical and creative expertise to craft solutions that not only engage and inspire, but also drive growth.
                     Using the latest tools, modern frameworks, and bold ideas, we turn concepts into impactful products. Whether it&apos;s a brand, a platform, or an app — when you trust us with your idea, we don&apos;t just build it — we elevate it. The result? A solution that leaves a lasting impression on your users — and on your business.</p>
                     <p className="mt-2 about"data-aos="fade-up"
                 data-aos-delay="10">We specialize in creating powerful brands, smart marketing strategies, and standout digital experiences. Our team of skilled developers, designers, marketers, and content creators works with passion and precision to help your business shine in the digital space.
       We don’t just build – we listen, strategise, and craft solutions that align with your goals. Whether it’s a website, app, ad campaign, or a full-scale product launch, we tailor every move to make sure your brand connects with the right audience, at the right time, on the right platform.
       </p>
                   
                 </div>
               </div>
       
               <div className="triangle-section flex justify-center gap-[100px] mt-[150px] triangle">
         {[
           {
             img: "shape-7.png",
             title: "EXPERT TEAM",
             desc: "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
           },
           {
             img: "shape-8.png",
             title: "INNOVATIVE SOLUTIONS",
             desc: "We offer unique and creative approaches that help your business stand out in the market and achieve success.",
           },
           {
             img: "shape-9.png",
             title: "CLIENT FOCUS",
             desc: "We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.",
           },
         ].map((item, i) => (
           <div key={i} className="triangle-card text-center max-w-[300px]"data-aos="fade-up"
           data-aos-delay="5">
             <img
               src={item.img}
               alt={item.title}
               className={`${i === 0 ? "w-[142px]" : "w-[108px]"} mx-auto`}
             />
             <p className={`${i===0 ? "mt-2": "mt-10.5"} triangle-title text-[24px] font-[anton] " `}data-aos="fade-up"
                 data-aos-delay="5">{item.title}</p>
             <p className="triangle-desc text-[16px] mt-6 about "data-aos="fade-up"
                 data-aos-delay="5">{item.desc}</p>
           </div>
         ))}
       </div>
              
               
             </section>
    );
};

export default AboutSection;