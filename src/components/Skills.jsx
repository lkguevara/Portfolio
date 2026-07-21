import { motion } from "framer-motion";
import reactIcon from "../assets/skills/icon-react.png";
import jsIcon from "../assets/skills/icon-js.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import reduxIcon from "../assets/skills/redux.svg";
import zustandIcon from "../assets/skills/zustand.svg";
import nodeIcon from "../assets/skills/node.svg";
import expressIcon from "../assets/skills/icon-express.png";
import mongoIcon from "../assets/skills/mongo.png";
import postgresIcon from "../assets/skills/postgres.svg";

const skills = [
  {
    name: "React",
    icon: <img src={reactIcon} alt="" className="w-full h-full object-contain" />,
    category: "Frontend",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  {
    name: "JavaScript",
    icon: <img src={jsIcon} alt="" className="w-full h-full object-contain" />,
    category: "Frontend",
    glow: "rgba(234, 179, 8, 0.3)",
  },
  {
    name: "TypeScript",
    icon: (
      <div className="w-full h-full flex items-center justify-center bg-[#3178C6] rounded-md">
        <span className="text-white font-black text-xs">TS</span>
      </div>
    ),
    category: "Frontend",
    glow: "rgba(59, 130, 246, 0.3)",
    learning: true,
  },
  {
    name: "Tailwind CSS",
    icon: <img src={tailwindIcon} alt="" className="w-full h-full object-contain" />,
    category: "Frontend",
    glow: "rgba(34, 211, 238, 0.3)",
  },
  {
    name: "Redux Toolkit",
    icon: <img src={reduxIcon} alt="" className="w-full h-full object-contain" />,
    category: "Frontend",
    glow: "rgba(147, 51, 234, 0.3)",
  },
  {
    name: "Zustand",
    icon: <img src={zustandIcon} alt="" className="w-full h-full object-contain" />,
    category: "Frontend",
    glow: "rgba(217, 119, 6, 0.3)",
  },
  {
    name: "Node.js",
    icon: <img src={nodeIcon} alt="" className="w-full h-full object-contain" />,
    category: "Backend",
    glow: "rgba(22, 163, 74, 0.3)",
  },
  {
    name: "Express.js",
    icon: <img src={expressIcon} alt="" className="w-full h-full object-contain" />,
    category: "Backend",
    glow: "rgba(22, 163, 74, 0.3)",
  },
  {
    name: "MongoDB",
    icon: <img src={mongoIcon} alt="" className="w-full h-full object-contain" />,
    category: "Backend",
    glow: "rgba(34, 197, 94, 0.3)",
  },
  {
    name: "PostgreSQL",
    icon: <img src={postgresIcon} alt="" className="w-full h-full object-contain" />,
    category: "Backend",
    glow: "rgba(34, 197, 94, 0.3)",
  },
];

const grouped = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Habilidades
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-md mx-auto"
          >
            Stack con el que construyo experiencias digitales
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-orange to-purple rounded-full origin-center"
          />
        </motion.div>

        {/* Category Groups */}
        {Object.entries(grouped).map(([category, items], groupIdx) => (
          <div key={category} className="mb-10 md:mb-14 last:mb-0">
            {/* Category label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-orange/50 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange/60">
                {category}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-orange/50 to-transparent" />
            </motion.div>

            {/* Pills grid */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill, idx) => {
                const globalIdx = skills.indexOf(skill);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      delay: globalIdx * 0.06,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className="group relative"
                  >
                    <div
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                      style={{ background: skill.glow }}
                    />

                    <div
                      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-default ${
                        skill.learning ? "pr-3.5" : ""
                      }`}
                    >
                      <div className="w-9 h-9 flex items-center justify-center shrink-0">
                        {skill.icon}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white/90 whitespace-nowrap">
                          {skill.name}
                        </span>
                        {skill.learning && (
                          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 border border-blue-500/20 animate-pulse">
                            Learning
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
