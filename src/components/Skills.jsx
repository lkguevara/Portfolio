import { motion } from "framer-motion";

const Skills = () => {
  const allSkills = [
    {
      name: "JavaScript",
      icon: "/legacy/assets/javascript.svg",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      name: "React",
      icon: "/legacy/assets/reactjs.svg",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Redux",
      icon: "/legacy/assets/redux.svg",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Tailwind CSS",
      icon: "/legacy/assets/tailwind.svg",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "HTML",
      icon: "/legacy/assets/html.svg",
      color: "from-orange-600/20 to-red-600/20",
    },
    {
      name: "CSS",
      icon: "/legacy/assets/css.svg",
      color: "from-blue-600/20 to-indigo-600/20",
    },
    {
      name: "Node.js",
      icon: "/legacy/assets/node.svg",
      color: "from-green-600/20 to-emerald-600/20",
    },
    {
      name: "PostgreSQL",
      icon: "/legacy/assets/postgres.svg",
      color: "from-blue-700/20 to-indigo-700/20",
    },
    {
      name: "Firebase",
      icon: "/legacy/assets/firebase.png",
      color: "from-yellow-600/20 to-orange-600/20",
    },
    {
      name: "Strapi",
      icon: "/legacy/assets/strapi.svg",
      color: "from-purple-700/20 to-indigo-700/20",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-orange">
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
              className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br ${skill.color} border-2 border-orange/30 backdrop-blur-sm group cursor-pointer shadow-lg`}
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-bold text-sm text-center">
                  {skill.name}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-orange/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
