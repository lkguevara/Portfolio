import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Perlaswimwear",
      desc: "E-commerce de trajes de baño con Strapi CMS. Catálogo dinámico, carrito de compras y panel de administración.",
      tech: ["React", "Tailwind", "Redux", "Strapi"],
      image: "/assets/perla.png",
      url: "https://perlaswimwear.vercel.app",
      category: "E-commerce",
    },
    {
      title: "Moviflix",
      desc: "Aplicación de películas consumiendo API externa. Búsqueda en tiempo real y detalles completos de películas.",
      tech: ["React", "API REST"],
      image: "/assets/moviflix.png",
      url: "https://movie-flix0.vercel.app",
      github: "https://github.com/lkguevara/movieFlix",
      category: "Web App",
    },
    {
      title: "Rick And Morty",
      desc: "App con gestión de estado usando Redux. Filtros avanzados y favoritos persistentes en localStorage.",
      tech: ["React", "Redux"],
      image: "/assets/rick-and-morty.png",
      url: "https://rick-and-morty-r.vercel.app/",
      github: "https://github.com/lkguevara/rick-and-morty",
      category: "Web App",
    },
    {
      title: "ToDo List",
      desc: "Lista de tareas con autenticación y base de datos en tiempo real con Firebase. CRUD completo y persistencia.",
      tech: ["React", "Firebase"],
      image: "/assets/todo-list.png",
      url: "https://to-do-react-firebase.vercel.app/",
      github: "https://github.com/lkguevara/todoList-react-firebase",
      category: "Productivity",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-orange">
            Proyectos
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-[420px]"
            >
              {/* Background Image with overlay gradient */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-black group-hover:via-black/90 transition-all duration-300" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 right-4 z-10">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-purple/80 backdrop-blur-sm rounded-full text-xs font-bold text-white"
                >
                  {project.category}
                </motion.span>
              </div>

              {/* Tech Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10 max-w-[70%]">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-orange/90 backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                {/* Title with glow effect */}
                <motion.div className="relative mb-3">
                  <h3 className="text-3xl font-black text-white transition-all duration-300 group-hover:text-orange">
                    {project.title}
                  </h3>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange group-hover:w-20 transition-all duration-500" />
                </motion.div>

                {/* Description - Appears on hover */}
                <motion.p className="text-gray-200 mb-5 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {project.desc}
                </motion.p>

                {/* Action Buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-orange text-white rounded-xl font-bold hover:bg-orange/80 hover:shadow-lg hover:shadow-orange/50 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all inline-flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange/60 transition-all duration-300 rounded-2xl pointer-events-none">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-700 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
