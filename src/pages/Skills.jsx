import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/assets/html.svg" },
  { name: "CSS", icon: "/assets/css.svg" },
  { name: "Tailwind", icon: "/assets/tailwind.svg" },
  { name: "JavaScript", icon: "/assets/javascript.svg" },
  { name: "React", icon: "/assets/reactjs.svg" },
  { name: "Redux", icon: "/assets/redux.svg" },
  { name: "Node.js", icon: "/assets/node.svg" },
  { name: "PostgreSQL", icon: "/assets/postgres.svg" },
  { name: "Git/GitHub", icon: "/assets/gitHub.svg" },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10 min-h-[80vh] flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-black text-secondary mb-16 text-center md:text-right"
      >
        HABILIDADES
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 justify-items-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center justify-center p-6 bg-primary-light/5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-secondary/50 transition-colors w-32 h-32 md:w-40 md:h-40 shadow-xl"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <span className="text-gray font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
