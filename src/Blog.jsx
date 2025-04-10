import { ArrowUpRight } from "lucide-react";

const BlogSection = () => {
  const blogData = [
    {
      title: "WHY CUSTOM SOFTWARE IS THE BACKBONE OF MODERN BUSINESSES",
      image: "/blog-1.png",
    },
    {
      title: "DIGITAL MARKETING STRATEGIES THAT WORK FOR INDIAN STARTUPS",
      image: "/blog-2.png",
    },
    {
      title: "CLOUD HOSTING VS TRADITIONAL: WHAT SHOULD YOU CHOOSE?",
      image: "/blog-3.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[20px] ">
      {/* Section Heading */}
      <div className="mb-12 mx-50">
        <p className="mb-20 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#818181] year  uppercase  tracking-widest">Newsletter</p>
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[60px] font-[anton] mb-20 uppercase ">
          Latest From <span className="text-[#50BD8A]">Blog</span>
        </h2>
        
      </div>

      {/* Horizontal Container for Cards */}
      <div className="flex flex-row gap-8 overflow-x-auto mx-50">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="w-[300px] sm:w-[340px] md:w-[370px] lg:w-[600px] flex-shrink-0 bg-white   p-3"
          >
            {/* Image */}
            <div className="h-[200px] sm:h-[220px] md:h-[240px] lg:h-[460px]  rounded ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text & Read More */}
            <div className="mt-4 flex justify-around items-left py-6 ">
              <p className="text-[12px] sm:text-[11px] md:text-[12px] lg:text-[25px]  font-[anton] text-[#454545] leading-9 max-w-[400px] tracking-[1.5px] ">
                {blog.title}
              </p>

              <button className="text-[9px] sm:text-[9px] md:text-[10px] lg:text-[10px]  bg-[#D9D9D9] px-3 py-8 flex items-center gap-1 hover:bg-black hover:text-white transition">
                READ MORE <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
