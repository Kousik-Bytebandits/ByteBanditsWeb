import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.href.startsWith("#")) {
      // Navigate to / with section ID
      navigate("/", { state: { scrollTo: item.href.substring(1) } });
    } else {
      // Navigate to full path like /contact
      navigate(item.href);
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "#blog-section" },
    { name: "Services", href: "#service-section" },
    { name: "About Us", href: "#about-section" },
    { name: "Contact Us", href: "/contact" },
    
   
  ];

  return (
    <footer className="custom-footer bg-[#353639] text-white pt-15">
      <div className="max-w-10xl md:px-6 md:py-5 flex flex-col md:flex-row gap-10">

        {/* Left Section - 40% */}
        <div className="left-foot md:w-[40%] ml-15">
          <Link to="/">
            <div className="lf-container w-[200px] h-[80px] mb-6">
              <img
                src="/images/ByteBandits 2.png"
                alt="Byte Bandits Logo"
                className="w-full h-auto object-contain lf-img"
              />
            </div>
          </Link>
          <p className="lf-desc text-[16px] text-[#E0E0E0] inter max-w-[70%] lg:ml-2 leading-8">
            We are a passionate team of tech innovators dedicated to crafting smart, scalable, and user-centric digital solutions. From custom software and mobile apps to eCommerce platforms, digital marketing, branding, and cloud services.
          </p>
        </div>

        {/* Right Section - 60% (3 sections inside) */}
        <div className="right-foot md:w-[60%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
        
          {/* Office Info */}
          <div className="office-container text-[#E0E0E0]">
            <h4 className="office-head text-[20px] inter mb-4 text-[#8F8F8F] font-bold">OFFICE</h4>

            <div className="flex items-start gap-2 foot text-[20px]">
              <img src="/icons/location.png" alt="Location" className="w-5 h-5 mt-[6px]" />
              <p>
                No.3a, door no.1/1033,<br />
                kumudham nagar extension,<br />
                mugaliivakkam, Chennai -600125
              </p>
            </div>

            <div className="flex items-center gap-2 foot text-[20px] mt-5">
              <img src="/icons/mobile.png" alt="Phone" className="w-5 h-5" />
              <p>Phone: +91 79048 12982</p>
            </div>

            <div className="flex items-center gap-2 foot text-[20px] mt-4">
              <img src="/icons/email.png" alt="Email" className="w-5 h-5" />
              <p>
                Email: <a href="mailto:bbtechworks@gmail.com" className="underline foot">
                  bbtechworks@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="links-container">
            <h4 className="links-head text-[20px] mb-4 text-[#8F8F8F] inter font-bold">LINKS</h4>
            <ul className="space-y-2 text-[20px] text-[#E0E0E0] underline foot">
              {menuItems.map((item) => (
                <li key={item.name} className=" font-bold cursor-pointer">
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
          
          {/* Social Media */}
          <div className="social-container">
            <h4 className="social-head text-[20px] inter mb-1 text-[#8F8F8F] font-bold">SOCIAL MEDIA</h4>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {[
                { img: "/images/image 23.png", link: "https://www.instagram.com" },
                { img: "/images/image 24.png", link: "https://wa.me/+917904812982" },
                { img: "/images/image 29.png", link: "https://www.linkedin.com" },
                { img: "/images/image 27.png", link: "https://www.x.com" },
                { img: "/images/image 28.png", link: "https://www.facebook.com" },
                { img: "/images/image 26.png", link: "https://www.threads.com" },
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={social.img} alt="social" className="w-10 h-10 social-img" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="copy-container text-center text-[#D9D9D9] mt-10 border-t border-[#444] py-6 inter bg-[#454545]">
        Copyright © Byte Bandits. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
