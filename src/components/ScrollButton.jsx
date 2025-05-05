import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // install react-icons if you don't have

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-1 right-2 p-3 rounded-full bg-[#353639] text-white  hover:bg-blue-600 cursor-pointer transition duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
