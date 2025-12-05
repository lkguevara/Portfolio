import { motion } from "framer-motion";
// iconos
import jsIcon from "../assets/skills/icon-js.png";
import reactIcon from "../assets/skills/icon-react.png";
import reduxIcon from "../assets/skills/redux.svg";
import tailwindIcon from "../assets/skills/tailwind.png";
import cssIcon from "../assets/skills/css.png";
import zustandIcon from "../assets/skills/zustand.svg";
import nodeIcon from "../assets/skills/node.svg";
import postgresIcon from "../assets/skills/postgres.svg";
import strapiIcon from "../assets/skills/strapi.avif";

const Skills = () => {
  const allSkills = [
    {
      name: "JavaScript",
      icon: jsIcon,
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      name: "React JS",
      icon: reactIcon,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Redux",
      icon: reduxIcon,
      color: "from-purple-900/20 to-pink-500/20",
    },
    {
      name: "Tailwind CSS",
      icon: tailwindIcon,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "CSS",
      icon: cssIcon,
      color: "from-blue-600/20 to-indigo-600/20",
    },
    {
      name: "Zustand",
      icon: zustandIcon,
      color: "from-[#443E38] to-teal-500/20",
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      color: "from-white/20 to-green-100/20",
    },
    {
      name: "PostgreSQL",
      icon: postgresIcon,
      color: "from-blue-700/20 to-indigo-700/20",
    },
    {
      name: "Strapi",
      icon: strapiIcon,
      color: "from-purple-700/20 to-indigo-700/20",
    },
  ];

  return (
    <section id="habilidades" className="py-8 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Habilidades
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className={`overflow-hidden p-3 rounded-2xl bg-linear-to-br ${skill.color} border-2 border-orange/30 backdrop-blur-sm group cursor-pointer shadow-lg`}
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-colors duration-300" />

              {/* Content */}
              <div className="z-10 flex flex-col items-center gap-3 md:gap-4">
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-white font-bold text-sm text-center">
                  {skill.name}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-linear-to-t from-orange/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
