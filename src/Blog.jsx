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
    <section className="blog-section-custom bg-[#ececea] py-20 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[20px]">
      {/* Section Heading */}
      <div className="blog-header mb-12 mx-50">
        <p className="blog-subtitle mb-4 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#818181] uppercase tracking-widest"data-aos="fade-up"
          data-aos-delay="10">Newsletter</p>
        <div className="blog-heading-container flex justify-between items-center">
          <h2 className="blog-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[60px] font-[anton] uppercase"data-aos="fade-up"
          data-aos-delay="10">
            Latest From <span className="highlight text-[#50BD8A]">Blog</span>
          </h2>
          <div className="blog-view-all flex items-center gap-2 cursor-pointer mr-70">
            <span className="uppercase text-[9px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-semibold">View All Publications</span>
            <ArrowRight size={17} />
          </div>
        </div>
      </div>

      {/* Horizontal Container for Cards */}
      <div className="blog-card-container flex flex-row gap-8 overflow-x-auto md:mx-50 scrollbar-hide"data-aos="fade-up"
          data-aos-delay="10">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="blog-card relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[600px] flex-shrink-0 bg-[#ececea] container "
          >
            {/* Tag */}
            <div className="blog-tag absolute top-9 left-4 bg-[#353639] inter tracking-[0.5px] text-white px-5 py-2 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]  rounded-full uppercase shadow">
              {blog.tag}
            </div>

            {/* Image */}
            <div className="blog-image h-[200px] sm:h-[220px] md:h-[240px] lg:h-[400px]  ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text & Read More */}
            <div className="blog-content mt-5 flex flex-row justify-between py-6 px-2 md:items-end">
              <p className="blog-title text-[12px] sm:text-[11px] md:text-[12px] lg:text-[25px] font-[anton] text-[#454545] leading-9 tracking-[0.5px] mb-10 max-w-[70%] text-blog-title">
                {blog.title}
              </p>

              <button className="read-more-button relative h-[110px] w-[120px] bg-[#D9D9D9] text-black">
                <ArrowUpRight
                  size={40}
                  className="arrow-icon absolute md:top-2 md:right-2 right-0 top-0"
                />
                <span className="read-more-text absolute md:bottom-4 md:left-1/2 md:transform -translate-x-1/2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-semibold whitespace-nowrap">
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
