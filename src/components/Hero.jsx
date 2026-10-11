import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function Hero({ theme, onToggleTheme }) {
  return (
    <section id="home" className="hero-section px-6 py-5 sm:px-10 sm:py-6">
      <div className="hero-scenery" aria-hidden="true">
        <img className="hero-scenery-image hero-scenery-day" src="/hero-day.webp" alt="" />
        <img className="hero-scenery-image hero-scenery-night" src="/hero-night.webp" alt="" />
      </div>

      <nav className="hero-nav sticky top-0 z-50 flex items-center justify-between border-b pb-4 backdrop-blur-md">
        <div className="nav-links flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#timeline">TIMELINE</a>
          <a href="#contact">CONTACT</a>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`}
          aria-pressed={theme === "day"}
          title={`Switch to ${theme === "night" ? "day" : "night"} mode`}
          className="theme-toggle inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition"
        >
          {theme === "night" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          <span>{theme === "night" ? "Day" : "Night"}</span>
        </button>
      </nav>

      <div className="hero-content flex items-center">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-eyebrow">
            MECHATRONICS ENGINEER
            <br />
            AI DEVELOPER · ROBOTICS ENTHUSIAST
          </p>

          <h1 className="hero-name">
            <span>SAYED</span>
            <span className="hero-name-accent">SAMEEH</span>
          </h1>

          <p className="hero-description">
            Building intelligent machines at the intersection of physical
            systems and artificial intelligence.
          </p>

          <div className="hero-actions flex flex-wrap gap-4">
            <a href="#projects" className="hero-button hero-button-primary">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a href="/resume.pdf" className="hero-button hero-button-secondary">
              <span aria-hidden="true">▤</span> My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
