import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle);

    return () =>
      window.removeEventListener(
        "scroll",
        toggle
      );
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed
        bottom-8
        right-8
        w-14
        h-14
        rounded-full
        bg-cyan-500
        text-black
        shadow-lg
        shadow-cyan-500/40
        transition-all
        duration-300
        hover:scale-110
        z-50
        ${
          visible
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <FaArrowUp className="mx-auto" />
    </button>
  );
}

export default ScrollTop;