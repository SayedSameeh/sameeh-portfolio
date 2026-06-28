import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-10 py-24"
    >
      <p className="text-cyan-400 mb-8 tracking-widest">
        [ ABOUT ]
      </p>

      <div
        className="
        bg-slate-900/70
        backdrop-blur-md
        border
        border-cyan-500/20
        rounded-2xl
        p-8
        shadow-lg
        shadow-cyan-500/10
      "
      >
        <p className="text-xl text-gray-300 leading-8">
          Mechatronics Engineering student building AI,
          robotics, and human-computer interaction
          projects through software and intelligent
          systems.
        </p>
      </div>
    </motion.section>
  );
}

export default About;