import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophone,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
  FaChartSimple,
} from "react-icons/fa6";

import { BsHandIndexThumb } from "react-icons/bs";

const projects = [
  {
    icon: <FaMicrophone />,
    title: "STTTS",
    subtitle: "Speech Translator",
    description:
      "Real-time Hindi ↔ Marathi speech translation with emotion detection.",
    tech: ["Python", "Whisper", "XTTS"],
    github: null,
  },

  {
    icon: <FaRobot />,
    title: "EVE",
    subtitle: "Desktop Companion",
    description:
      "AI desktop companion with personality, memory, emotions, and initiative.",
    tech: ["PyQt6", "AI", "Python"],
    github: null,
  },

  {
    icon: <BsHandIndexThumb />,
    title: "GCDA",
    subtitle: "Gesture Assistant",
    description:
      "Control the desktop using hand gestures and computer vision.",
    tech: ["OpenCV", "MediaPipe"],
    github:
      "https://github.com/SayedSameeh/GCDA",
  },

  {
    icon: <FaWhatsapp />,
    title: "WhatsApp AI",
    subtitle: "Auto Responder",
    description:
      "AI-powered WhatsApp assistant using local language models.",
    tech: ["Node.js", "Ollama"],
    github:
      "https://github.com/SayedSameeh/whatsapp-ai-autoresponder",
  },

  {
    icon: <FaChartSimple />,
    title: "PC Analyzer",
    subtitle: "Usage Dashboard",
    description:
      "Analyze and visualize personal computer usage patterns.",
    tech: ["Python", "SQLite"],
    github: null,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-24"
    >
      <p className="text-cyan-400 mb-8 tracking-widest">
        [ FEATURED PROJECTS ]
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 0 35px rgba(0,217,255,0.15)",
            }}
            className="
              bg-slate-900/70
              backdrop-blur-md
              border
              border-cyan-500/20
              rounded-2xl
              p-7
              shadow-lg
              shadow-cyan-500/10
              transition
            "
          >

            <div className="text-4xl text-cyan-400 mb-5">
              {project.icon}
            </div>

            <h2 className="text-3xl text-cyan-400 font-bold">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {project.subtitle}
            </p>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {project.github ? (

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  hover:text-cyan-300
                  transition
                "
              >
                <FaGithub />
                Repository
                <FaArrowUpRightFromSquare />
              </a>

            ) : (

              <span className="text-gray-500">
                Coming Soon
              </span>

            )}

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Projects;