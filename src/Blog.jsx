import { ArrowRight , ArrowUpRight} from "lucide-react";

const BlogSection = () => {
  const blogData = [
    {
      title: "WHY CUSTOM SOFTWARE IS THE BACKBONE OF MODERN BUSINESSES",
      image: "/blog-1.png",
      tag: "DESIGN",
    },
    {
      title: "DIGITAL MARKETING STRATEGIES THAT WORK FOR INDIAN STARTUPS",
      image: "/blog-2.png",
      tag: "BRANDING",
    },
    {
      title: "CLOUD HOSTING VS TRADITIONAL: WHAT SHOULD YOU CHOOSE?",
      image: "/blog-3.png",
      tag: "CLOUD",
    },
  ];

  return (
    <section className="bg-white py-20 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[20px]">
      {/* Section Heading */}
      <div className="mb-12 mx-50"data-aos="fade-up"
          data-aos-delay="10">
        <p className="mb-4 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#818181] uppercase tracking-widest">Newsletter</p>
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[60px] font-[anton] uppercase">
            Latest From <span className="text-[#50BD8A]">Blog</span>
          </h2>
          <div className="flex items-center gap-2 cursor-pointer mr-70">
            <span className="uppercase text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-semibold">View All Publications</span>
            <ArrowRight size={17} />
          </div>
        </div>
      </div>

      {/* Horizontal Container for Cards */}
      <div className="flex flex-row gap-8 overflow-x-auto mx-50 scrollbar-hide"data-aos="fade-up"
          data-aos-delay="10">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[600px] flex-shrink-0 bg-white "
          >
            {/* Tag */}
            <div className="absolute top-9 left-4 bg-[#353639] inter tracking-[0.5px] text-white px-5 py-2 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]  rounded-full uppercase shadow">
              {blog.tag}
            </div>

            {/* Image */}
            <div className="h-[200px] sm:h-[220px] md:h-[240px] lg:h-[400px]  ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text & Read More */}
            <div className="mt-5 flex flex-row justify-between py-6 px-2 items-end">
              <p className="text-[12px] sm:text-[11px] md:text-[12px] lg:text-[25px] font-[anton] text-[#454545] leading-9 tracking-[0.5px] mb-10 max-w-[70%]">
                {blog.title}
              </p>

              <button className="relative h-[110px] w-[120px] bg-[#D9D9D9] text-black">
                <ArrowUpRight
                  size={40}
                  className="absolute top-2 right-2 "
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-semibold whitespace-nowrap">
    READ MORE
  </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
