import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaRobot,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiOpencv,
} from "react-icons/si";

const skills = [
  {
    icon: <FaPython />,
    name: "Python",
    value: 90,
  },
  {
    icon: <SiCplusplus />,
    name: "C++",
    value: 75,
  },
  {
    icon: <FaReact />,
    name: "React",
    value: 70,
  },
  {
    icon: <SiOpencv />,
    name: "OpenCV",
    value: 85,
  },
  {
    icon: <FaRobot />,
    name: "AI / ML",
    value: 80,
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    value: 70,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-24"
    >
      <p className="text-cyan-400 mb-8 tracking-widest">
        [ SYSTEM CAPABILITIES ]
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-slate-900/70
              backdrop-blur-md
              border
              border-cyan-500/20
              rounded-2xl
              p-6
              shadow-lg
              shadow-cyan-500/10
            "
          >

            <div className="flex justify-between items-center mb-4">

              <div className="flex items-center gap-3">

                <div className="text-cyan-400 text-2xl">
                  {skill.icon}
                </div>

                <h3 className="text-xl">
                  {skill.name}
                </h3>

              </div>

              <span className="text-cyan-400">
                {skill.value}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-gray-800 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.value}%`,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
                className="
                  h-3
                  rounded-full
                  bg-cyan-400
                  shadow-lg
                  shadow-cyan-400/50
                "
              />

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Skills;