import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  "Cluttered Interfaces",
  "Poor Typography Choices",
  "Inconsistent Spacing and Alignment",
  "Low Contrast & Accessibility Issues",
  "Overusing Colors",
  "Ignoring Mobile Responsiveness",
  "Lack of Feedback for User Actions",
  "Overloaded Navigation",
  "Inconsistent Iconography",
  "Forgetting Performance Optimization",
];

const sectionContents = [
  {
    what: "New designers often try to include everything on one screen — menus, banners, popups, icons, tips, sidebars… the list goes on.The result? A crowded, confusing interface that overwhelms users.",
    why: "Users don’t know where to look or what to do first. Too many elements fight for attention, which increases cognitive load.",
    how: [
      "Start with a clear visual hierarchy.Identify the primary action or content, and design around it.",
      "Use whitespace generously. It’s not “empty” — it provides breathing space.",
      "Declutter ruthlessly — if an element doesn’t add value, cut it."
    ]
  },
  {
    what: "Typography is underestimated. Beginners often mix fonts, use decorative styles, or ignore sizing and spacing.",
    why: "Typography is 95% of UI. Bad type makes interfaces feel unprofessional and hard to read.",
    how: [
      "Use a font scale. Set consistent sizes for headings, subheadings, and body text (e.g., 32px, 24px, 18px, 14px).",
      "Stick to one or two fonts. A clean sans-serif for UI (like Inter, Roboto, or SF Pro) works well.",
      "Mind your line-height and letter-spacing.These affect legibility more than you think."
    ]
  },
  {
    what: "Margins are uneven, elements float oddly, and buttons are misaligned. The design feels messy",
    why: "Inconsistency signals carelessness and breaks visual flow.",
    how: [
      "Use an 8pt grid system. Base spacing on multiples of 8 for consistency.",
      "Align to grids and columns. Design tools like Figma make this easy.",
      "Use auto-layouts and components.This ensures consistent structure across screens."
    ]
  },
  {
    what: "Light gray text on white, thin fonts, or buttons with poor color contrast.",
    why: "Users with visual impairments (or just in bright sunlight!) will struggle to read or interact.",
    how: [
      "Follow WCAG guidelines.Aim for at least a 4.5:1 contrast ratio.",
      "Test your designs.Use tools like Stark or Figma plugins.",
      "Think inclusively.Accessibility isn’t a feature — it’s a foundation."
    ]
  },
  {
    what: "Every button is a different color. There’s red, blue, green, yellow — it looks like a UI rainbow.",
    why: "Without meaning attached to color, users get confused.Also, too many colors feel unprofessional",
    how: [
      "Define a design system palette. Primary, secondary, neutral, and alert colors.",
      "Use color with purpose. For example, blue for primary actions, red for errors.",
      "Leverage shades.Instead of different colors, use tints and tones of the same base."
    ]
  },
  {
    what: "Icons look sleek, but users have no idea what they mean — is that a rocket for \"Submit\"?",
    why: "Users shouldn’t have to guess. Unclear icons increase friction.",
    how: [
     " Use familiar icons. Search, settings, back, and delete should be instantly recognizable.",
      "Add labels. Especially for complex or custom icons.",
       "Maintain consistency. Don't mix icon styles (e.g., outline with solid)."
    ]
  },
  {
    what: "Buttons that say “Click Here” or “Submit” without context.",
    why: "The CTA is the user’s next step. If it’s unclear, users hesitate — or worse, bounce.",
    how: [
      "Be specific. Use action-oriented labels like “Download Resume” or “Create Account.”",
     " Make CTAs visually distinct. Use size, contrast, and placement.",
      "Limit choices. Too many CTAs compete with each other — use one primary CTA per screen when possible."
    ]
  },
 
  {
    what: "A design looks great on desktop but breaks completely on smaller screens",
    why: "Most users access websites and apps from mobile devices",
    how: [
      "Design mobile-first. Start small and scale up.",
       "Use flexible grids and scalable elements. Avoid fixed-width components.",
       "Test on real devices. Emulators help, but nothing beats hands-on testing."
    ]
  },
  {
    what: "Everything bounces, fades, spins, or slides. It looks cool… once.",
    why: " Excessive motion distracts users and slows performance",
    how: [
      "Use microinteractions wisely. Hover effects, button clicks, and page transitions should feel natural.",
      "Keep it fast. Aim for animations under 300ms.",
     " Avoid unnecessary flourish. Motion should support the action, not become the action."
    ]
  },
  {
    what: "Designs are created in a vacuum — based on personal taste, not actual user needs.",
    why: " What you think works may confuse real users. Without feedback, mistakes go unnoticed.",
    how: [
      "Run simple tests. Ask 3–5 people to interact with your design while narrating their thoughts.",
      "Use prototyping tools. Figma, Maze, or Marvel let you simulate real flows.",
      "Iterate. Test, learn, refine, repeat."
    ]
  },
];

export default function BlogContentPage() {
  const contentRef = useRef(null); 

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });
  
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const scrollToSection = (index) => {
    const el = document.getElementById(`section-${index}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar/>
      <div className="relative blog-header-image h-[90vh] w-100% overflow-hidden rounded-[2rem] ml-10 mr-10 shadow-lg mt-40">
        <img
          src="/images/image 65.png"
          alt="Blog Header"
          className="absolute top-0  w-full h-full object-cover  rounded-sm"
        />
      <div  className="blog-header-text absolute inset-0  rounded-4xl flex items-left justify-left flex-col font-[inter] h-[250px] bg-[#65685269]/100 font-bold border-3 rounded-4xl  border-white text-white text-[80px] mt-140  ml-10 mr-10 px-20  py-5   backdrop-blur-lg">
        <p >10 UI Mistakes Beginners Make </p>
        <p className="md:-mt-5 ">And How to Fix Them </p>
      </div>

      </div>

      <div className=" max-w-8xl main-layout mx-auto grid grid-cols-1 md:grid-cols-15  px-5 py-30 md:py-20 " ref={contentRef}>

  <aside className="col-span-3 left-article sticky top-[72px]   ">
          <div className="relative mb-4 ">
            <h3 className="font-bold text-[18px] font-[inter] uppercase md:text-[18px]">In This Article</h3>
           
    <div className="relative w-full h-[8px] bg-gray-300 mt-1 mb-2 rounded overflow-hidden">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute left-0 top-0 h-full bg-[#005FA4] origin-left rounded-md"
      />
    </div>
          </div>
          <ul className="space-y-4 text-sm mt-4">
            {sections.map((title, index) => (
              <li key={index}>
                <button onClick={() => scrollToSection(index)} className="text-[#005FA4] font-[inter] text-[14px] md:text-[16px] font-bold hover:underline">
                  {index + 1}. {title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="main-content col-span-1 md:col-span-9 space-y-12 text-[20px] font-semibold font-[inter]">
          <p>User Interface (UI) design is a critical part of creating digital products that feel intuitive, look polished, and keep users engaged. However, beginners often fall into some common traps that can hinder usability and overall user satisfaction. If you&apos;re new to UI design, learning to spot and fix these mistakes early can save you time and elevate your work dramatically.</p>
          <p>Here are the top 10 UI mistakes beginners make and how to avoid them.</p>
          {sections.map((title, index) => (
            <div key={index} id={`section-${index}`} className="scroll-mt-24 space-y-10">
              <h3 className="md:text-[32px] text-[20px] font-bold text-black">
                {index + 1}. {title}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="">What Happens:</span> {sectionContents[index].what}
                </p>
                <p>
                  <span className="">Why It’s a Problem:</span> {sectionContents[index].why}
                </p>
                <div>
                  <p className="md:text-[24px] text-[18px] font-bold mt-8">How to Fix It:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 ">
                    {sectionContents[index].how.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="hidden md:block col-span-3 space-y-8">
          <div className="w-full">
            <img src="/images/blog-2.png" alt="Suggested 1" className="w-75 h-55 object-cover mb-2" />
            <p className="text-[20px] uppercase text-[#454545] font-[anton] mt-5">Digital Marketing Strategies </p>
            <p className="text-[20px] uppercase text-[#454545] font-[anton]">That Work For Design Startups</p>
          </div>
          <div>
            <img src="/images/blog-3.png" alt="Suggested 2" className="w-75 h-55 object-cover mb-2" />
            <h4 className="text-[20px] uppercase text-[#454545] font-[anton] mt-5">cloud hosting vs traditional </h4>
            <p className="text-[20px] uppercase text-[#454545] font-[anton]">hosting: what should you choose?</p>
          </div>
        </aside>
      </div>

{/* Light Green Background Section */}
      <div>
   <div className="bg-[#C7DDDB] h-[50vh] md:h-[100vh] w-full pt-12 pb-32 relative overflow-hidden">
    <div className="max-w-8xl mx-auto px-6 flex items-center justify-center mt-10">
      {/* Heading */}
      <div className="text-xl md:text-[70px] cta-heading font-black text-black font-[inter]   ">
        <p className="md:ml-[350px]"><span className="text-[#168372]">Don’t stop</span> now</p>
       <p className="md:mt-[-25px]"> <span className="text-[#168372]">There’s more</span> where that came from.</p>
      </div>
    </div>
  </div>


  <div className="w-full md:-mt-150 relative z-10 md:h-150">
    <div className="card-section max-w-8xl  px-2 flex flex-col md:flex-row justify-center gap-16">
      {/* Card 1 */}
      <div className="bg-white card  md:rounded-4xl rounded-2xl shadow-md overflow-hidden w-full md:w-[700px] h-[750px] ">
        <img
          src="/images/image 67.png"
          alt="Card 1"
          className="w-full h-100 md:px-4 md:py-4 px-1.5 py-1.5 md:rounded-4xl rounded-2xl object-cover card-img"
        />
        <div className="md:py-5 py-2 md:ml-10 ml-5">
          <h3 className="text-[40px] font-semibold mb-2 font-[inter] leading-snug">
            From Clunky to Clean: <br />A Real-World UI Makeover <br/>Case Study
          </h3>

          <p className="text-[#009a7b] text-[24px] md:mt-14 mt-5 font-medium">Read More &gt;</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white card md:rounded-4xl rounded-2xl shadow-md overflow-hidden w-full md:w-[700px] md:h-[750px]">
        <img
          src="/images/image 68.png"
          alt="Card 2"
          className="w-full h-100 md:px-4 md:py-4 px-1.5 py-1.5 md:rounded-4xl  rounded-2xl object-cover card-img"
        />
        <div className="md:py-5 py-2 md:ml-10 ml-5">
          <h3 className="text-[40px] font-semibold font-[inter] mb-2 leading-snug">
            UI/UX Interview Questions <br />(and How to Answer Them)
          </h3>
          <p className="text-[#009a7b] md:mt-27 mt-8  text-[24px] font-medium">Read More &gt;</p>
        </div>
      </div>
    </div>
  </div>

 
  <div className="bg-[#0E2B32] text-white md:py-12 md:mt-60 mt-25 md:h-[60vh] h-[100%] md:ml-10 md:mr-10 ml-2 mr-2 mb-15 md:rounded-4xl rounded-2xl ">
    <div className="max-w-8xl mx-auto md:px-6">
      <div className="flex flex-col md:flex-row items-start gap-10 ">
        {/* Left text */}
        <div className="w-full md:w-2/5 feed">
          <h3 className="md:text-[60px] text-[23px] font-bold leading-wide  md:mt-25 md:ml-20 ml-7 mt-8 font-[inter]">
            <span className="text-[#50BD8A]">Was this helpful?</span>
            Confusing?
            <span className="text-[#50BD8A]">Brilliant?</span>
            Let me know!
          </h3>
        </div>

        {/* Right form */}
        <div className="w-[100%] md:w-[900px] md:w-2/5 font-[inter] font-bold md:text-[25px] text-[12px] overflow-hidden">
  <form className="space-y-4">
    
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 px-8 md:px-0">
      <div className="flex flex-col ">
        <label className="mb-1">Nick Name</label>
        <input
          type="text"
          className="p-2 rounded-lg bg-[#E5FFF3] text-black md:w-[340px] w-[100%] h-[40px] md:h-[50px]"  />
      </div>
      <div className="flex flex-col md:ml-[-100px]">
        <label className="mb-1">Email</label>
        <input
          type="email"
          className="p-2 rounded-lg bg-[#E5FFF3] text-black md:w-[535px] w-[100%] h-[40px]  md:h-[50px] "
        />
      </div>
    </div>

    {/* Suggestions */}
    <div className="flex flex-col px-8 md:px-0">
      <label className="mb-1">Suggestions</label>
      <textarea
        rows="4"
        className=" md:w-full w-[100%] md:h-[200px] h-[140px] p-2 rounded-lg bg-[#E5FFF3] text-black"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-[#E5FFF3] text-[#0E2B32] md:px-20 px-12 py-3 rounded-4xl hover:bg-[#a6d1c2] transition font-bold mx-auto block md:ml-70 md:mt-10 mb-5"
    >
      SEND
    </button>
  </form>
</div>

        </div>
    </div>
  </div>
</div>

  

      <Footer/>
    </div>
  );
}
