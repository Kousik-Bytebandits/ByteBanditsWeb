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
    <section className="bg-white py-16 px-50 ">
      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-10 text-xs text-gray-400 uppercase tracking-widest">Newsletter</p>
        <h2 className="text-3xl font-black mt-6 uppercase">
          Latest From <span className="text-green-500">Blog</span>
        </h2>
      </div>

      {/* Horizontal Container for Cards */}
      <div className="flex flex-row gap-8 overflow-x-auto">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="w-[400px] flex-shrink-0 bg-white shadow-md rounded-md p-3"
          >
            {/* Image */}
            <div className="h-[260px] overflow-hidden rounded">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Text & Read More */}
            <div className="mt-4 flex justify-between items-start py-6 text-bold">
              <h3 className="text-xs font-semibold text-gray-800 leading-snug max-w-[250px]">
                {blog.title}
              </h3>

              <button className="text-[10px] font-medium bg-gray-100 px-3 py-8 flex items-center gap-1 hover:bg-black hover:text-white transition">
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
