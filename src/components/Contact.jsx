import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="px-10 py-24"
    >
      <p className="text-cyan-400 mb-8 tracking-widest">
        [ CONTACT ]
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
        <h2 className="text-3xl text-cyan-400 mb-8">
          Let's Build Something
        </h2>

        <div className="space-y-6 text-lg">

          <a
            href="mailto:sayed.sameeh69@gmail.com"
            className="
              flex
              items-center
              gap-4
              hover:text-cyan-400
              transition
            "
          >
            <FaEnvelope />
            sayed.sameeh69@gmail.com
          </a>

          <a
            href="https://github.com/SayedSameeh"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-4
              hover:text-cyan-400
              transition
            "
          >
            <FaGithub />
            github.com/SayedSameeh
          </a>

          <a
            href="https://www.linkedin.com/in/sameeh69/"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-4
              hover:text-cyan-400
              transition
            "
          >
            <FaLinkedin />
            linkedin.com/in/sameeh69
          </a>

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;