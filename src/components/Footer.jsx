import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.href.startsWith("#")) {
      navigate("/", { state: { scrollTo: item.href.substring(1) } });
    } else {
      navigate(item.href);
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#service-section" },
    { name: "Internship", href: "/internship" },
    { name: "About Us", href: "#about-section" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1D1D1D] text-white px-6 lg:px-20 py-5 lg:py-10">
      {/* === TOP ROW === */}
      <div className="flex flex-col mt-10  lg:flex-row justify-between items-start gap-10">
        {/* Left Text */}
        <div className="lg:w-3/5  ">
          <h2 className="text-[27px] lg:text-[80px] font-[inter] font-bold ">
            <span className="text-[#3CD382]">Let’s</span> start building your<br />
            future with <span className="text-[#3CD382]">powerful</span><br />
            <span className="text-[#3CD382]">technology.</span>
          </h2>
        </div>

        {/* Right Logo */}
        <div className="lg:w-2/5 flex justify-start lg:justify-end">
          <img src="/images/ByteBandits.png" alt="Byte Bandits Logo" className="h-18 lg:h-45 lg:mt-6  object-contain" />
        </div>
      </div>

      {/* === SPACING BEFORE REST === */}
      <div className="mt-10" />

      {/* === MIDDLE SECTION === */}
      
   {/* === MIDDLE SECTION === */}
<div className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:gap-8 ">

  {/* === Row 1 (Mobile) or Col 1 + 2 (Desktop) === */}
  <div className="flex flex-row gap-6 lg:gap-0 lg:w-1/2">
    {/* Transform */}
    <div className="w-3/5 lg:w-[100%] lg:gap-0 flex flex-col gap-4">
      <h3 className="text-[#B3E2FF] text-[18px] font-bold lg:text-[28px] mb-3 lg:mb-5">Transform</h3>
      <p className="text-[12px] lg:text-[22px] text-white leading-relaxed ">
        We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital
        solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
      </p>
    </div>

    {/* Company */}
    <div className="w-2/5 lg:w-1/6 lg:ml-30 lg:gap-0 lg:mt-15 flex flex-col gap-4">
      <h4 className="text-[#B3E2FF] font-semibold text-[18px] lg:text-[24px] mb-3 lg:mb-6">Company</h4>
      <ul className="space-y-1 lg:space-y-3 lg:no-underline lg:font-normal text-[14px] font-semibold underline ml-2 lg:ml-0 lg:text-[20px] text-white">
        {menuItems.map((item) => (
          <li key={item.name} className="cursor-pointer hover:underline">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* === Row 2 (Mobile) or Col 3 + 4 (Desktop) === */}
  <div className="flex flex-row gap-6 mt-6 lg:mt-15  lg:w-1/2">
    {/* Branch Office */}
    <div className="w-1/2 lg:w-2/2 lg:ml-15  flex flex-col gap-4">
      <h4 className="text-[#B3E2FF] font-semibold text-[18px] lg:text-[24px] mb-3">Branch Office</h4>
      <p className="text-[12px] lg:text-[20px] text-white leading-relaxed">
        12b, 3, North Eda Street,<br />
        Bhima Nagar,<br/> 
        Sangillyandapuram,<br />
        Tiruchirappalli-620001.<br /><br />
        Phone: +91 79048 12982<br />
        Email: <a href="mailto:bbtechworks@gmail.com" className="underline">bbtechworks@gmail.com</a>
      </p>
    </div>

    {/* Head Office */}
    <div className="w-1/2  lg:w-1/1 flex flex-col gap-4">
      <h4 className="text-[#B3E2FF] font-semibold text-[18px] lg:text-[24px] mb-3">Head Office</h4>
      <p className="text-[12px] lg:text-[20px] text-white leading-relaxed">
        Plot no.3a, door no.1/1033,<br />
        Kumudham Nagar Extension,
        Mugalivakkam,<br/>
         Chennai -600125<br /><br />
        Phone: +91 79048 12982<br />
        Email: <a href="mailto:bbtechworks@gmail.com" className="underline">bbtechworks@gmail.com</a>
      </p>
    </div>
  </div>
</div>



      {/* === Divider === */}
      <div className="border-t  my-5 lg:my-10" />

      {/* === Bottom Line === */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-[10px] lg:text-[18px]">
        <p>Copyright © Byte Bandits. All Rights Reserved.</p>
        <p className="mt-1 lg:mt-0">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
