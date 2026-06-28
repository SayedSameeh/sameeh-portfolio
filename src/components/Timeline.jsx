import { motion } from "framer-motion";

const events = [
  {
    year: "2022",
    event: "Started Programming",
  },
  {
    year: "2023",
    event: "Built Python Projects",
  },
  {
    year: "2024",
    event: "Explored AI & Automation",
  },
  {
    year: "2025",
    event: "Built STTTS and GCDA",
  },
  {
    year: "2026",
    event: "Building EVE",
  },
];

function Timeline() {
  return (
    <section
      id="timeline"
      className="px-10 py-24"
    >
      <p className="text-cyan-400 mb-8 tracking-widest">
        [ TIMELINE ]
      </p>

      <div
        className="
        relative
        bg-slate-900/70
        border
        border-cyan-500/20
        rounded-2xl
        p-10
        backdrop-blur-md
        shadow-lg
        shadow-cyan-500/10
      "
      >
        <div className="absolute left-12 top-12 bottom-12 w-[2px] bg-cyan-500/30" />

        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="flex gap-8 mb-10 relative"
          >
            <div
              className="
              w-6
              h-6
              rounded-full
              bg-cyan-400
              shadow-lg
              shadow-cyan-400/50
              z-10
            "
            />

            <div>
              <h3 className="text-cyan-400 text-xl mb-2">
                {item.year}
              </h3>

              <p className="text-gray-300">
                {item.event}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;