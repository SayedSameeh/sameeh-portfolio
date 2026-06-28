import { motion } from "framer-motion";
import eve from "../assets/eve.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-10 py-6"
    >
      {/* NAVBAR */}

      <nav
        className="
        sticky
        top-0
        z-50
        flex
        justify-center
        items-center
        border-b
        border-cyan-500/20
        pb-5
        backdrop-blur-md
        bg-[#050816]/80
      "
      >
        <div className="flex gap-10 text-sm text-gray-300">

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            HOME
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            ABOUT
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            SKILLS
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            PROJECTS
          </a>

          <a
            href="#timeline"
            className="hover:text-cyan-400 transition"
          >
            TIMELINE
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            CONTACT
          </a>

        </div>
      </nav>

      {/* HERO */}

      <div className="grid lg:grid-cols-2 items-center min-h-[85vh]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 mb-5">
            &gt; INITIALIZING PORTFOLIO...
          </p>

          <h1 className="text-[7rem] font-black leading-none">
            SAYED
          </h1>

          <h1 className="text-[7rem] font-black text-cyan-400 leading-none">
            SAMEEH
          </h1>

          <div className="mt-8 text-2xl text-gray-300 space-y-2">
            <p>MECHATRONICS ENGINEER</p>
            <p>AI DEVELOPER</p>
            <p>ROBOTICS ENTHUSIAST</p>
          </div>

          <p className="mt-8 max-w-lg text-lg text-gray-400">
            Building intelligent systems that bridge software,
            hardware, and human interaction.
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                shadow-lg
                shadow-cyan-500/30
                hover:bg-cyan-400
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-cyan-500/30
                hover:bg-cyan-500/10
                hover:border-cyan-400
                transition
              "
            >
              Resume
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="flex items-center justify-center gap-8">

          {/* EVE */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                inset-0
                bg-cyan-500/40
                blur-[120px]
                rounded-full
              "
            />

            <img
              src={eve}
              alt="EVE"
              className="
                relative
                w-[400px]
                drop-shadow-[0_0_80px_rgba(0,217,255,0.7)]
              "
            />

            <p className="text-center text-cyan-400 mt-4 tracking-[0.3em]">
              EVE v0.1
            </p>

          </motion.div>

          {/* CARDS */}

          <div className="space-y-5">

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                bg-slate-900/70
                backdrop-blur-md
                border
                border-cyan-500/20
                rounded-2xl
                p-6
                w-72
                shadow-lg
                shadow-cyan-500/10
              "
            >
              <h3 className="text-cyan-400 mb-4">
                CURRENT FOCUS
              </h3>

              <p className="mb-2">
                Artificial Intelligence
              </p>

              <p className="mb-2">
                Robotics
              </p>

              <p>
                Human-AI Interfaces
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                bg-slate-900/70
                backdrop-blur-md
                border
                border-cyan-500/20
                rounded-2xl
                p-6
                w-72
                shadow-lg
                shadow-cyan-500/10
              "
            >
              <h3 className="text-cyan-400 mb-4">
                SYSTEM STATUS
              </h3>

              <p className="mb-2">
                Building
              </p>

              <p className="mb-2">
                Learning
              </p>

              <p>
                Innovating
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-6
                w-72
                shadow-lg
                shadow-cyan-500/10
              "
            >
              <h3 className="text-cyan-400 mb-4">
                CURRENT STACK
              </h3>

              <p>Python</p>
              <p>C++</p>
              <p>React</p>
              <p>OpenCV</p>
              <p>AI</p>
              <p>Robotics</p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;