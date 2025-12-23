import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// imagenes
import unipuzzleImg from "../assets/projects/unipuzzle.png";
import perlaImg from "../assets/projects/perla.png";
import moviflixImg from "../assets/projects/moviflix.png";
import rickAndMortyImg from "../assets/projects/rick-and-morty.png";
import codingChallengesImg from "../assets/projects/coding-challenges.png";
import adaptilearnImg from "../assets/projects/adaptilearn.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Adaptilearn",
      desc: "Plataforma web de aprendizaje adaptativo enfocada en la creación y gestión de roadmaps de estudio personalizados. Combina visualización interactiva tipo grafo con persistencia de progreso y una arquitectura backend preparada para integrar tutores de IA. Incluye roadmaps públicos y privados, autenticación segura y control de acceso por usuario.",
      tech: ["React", "React Flow", "Tailwind", "Zustand", "Node.js", "Express", "MongoDB", "JWT (Cookies)"],
      image: adaptilearnImg,
      // url: "https://adaptilearn.app",
      github: "https://github.com/lkguevara/adaptilearn",
      category: "Web App",
      color: "from-blue-500/20 to-violet-500/20",
    },
    {
      title: "unipuzzlelatam",
      desc: "Progressive Web App (PWA) que permite a los estudiantes explorar opciones académicas y recibir información personalizada de universidades mediante una interfaz interactiva potenciada por Inteligencia Artificial. Consumo de API con respuestas en streaming para una experiencia conversacional fluida.",
      tech: ["React", "Tailwind", "Zustand", "OpenAI API", "Fetch API"],
      image: unipuzzleImg,
      url: "https://unipuzzlelatam.com/",
      category: "Web App",
      color: "from-orange/20 to-pink-500/20",
    },
    {
      title: "Perlaswimwear",
      desc: "E-commerce de trajes de baño con Strapi CMS. Catálogo dinámico, carrito de compras y panel de administración.",
      tech: ["React", "Tailwind", "Redux", "Strapi"],
      image: perlaImg,
      url: "https://perlaswimwear.vercel.app",
      category: "E-commerce",
      color: "from-orange/20 to-pink-500/20",
    },
    {
      title: "Moviflix",
      desc: "Aplicación de películas consumiendo API externa. Búsqueda en tiempo real y detalles completos de películas.",
      tech: ["React", "API REST"],
      image: moviflixImg,
      url: "https://movie-flix0.vercel.app",
      github: "https://github.com/lkguevara/movieFlix",
      category: "Web App",
      color: "from-purple/20 to-blue-500/20",
    },
    {
      title: "Rick And Morty",
      desc: "App con gestión de estado usando Redux. Filtros avanzados y favoritos persistentes en localStorage.",
      tech: ["React", "Redux", "Node.js", "Express", "Axios"],
      image: rickAndMortyImg,
      github: "https://github.com/lkguevara/rick-and-morty",
      category: "Web App",
      color: "from-green-500/20 to-cyan-500/20",
    },
    {
      title: "Resolución de problemas de codificiación.",
      desc: "Resolución de problemas de codificiación.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: codingChallengesImg,
      github: "https://github.com/lkguevara/coding-challenges",
      category: "Coding Challenges",
      color: "from-yellow-500/20 to-orange/20",
    }
  ];

  const handleProjectClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  // Componente del Preview reutilizable
  const ProjectPreview = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div
        className={`mt-4 rounded-2xl overflow-hidden bg-linear-to-br ${project.color} p-[2px]`}
      >
        <div className="bg-dark rounded-2xl overflow-hidden">
          {/* Browser mockup header */}
          <div className="bg-gray-900/80 px-3 py-2 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-white/10 rounded-md px-3 py-1 text-[10px] text-gray-400 text-center truncate">
                {project.url}
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>

          {/* Project Info */}
          <div className="p-4">
            {project.desc && (
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-orange text-white rounded-xl font-bold text-sm hover:bg-orange/80 transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
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
                  Ver Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="proyectos" className="py-8 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Proyectos
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
          <p className="text-md md:text-lg mt-4 text-white">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo web
          </p>
        </motion.div>

        {/* Mobile: Accordion style */}
        <div className="lg:hidden space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                onClick={() => handleProjectClick(i)}
                className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 ${
                  activeProject === i
                    ? "border-orange bg-orange/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          activeProject === i
                            ? "bg-orange text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">0{i + 1}</span>
                    </div>
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        activeProject === i ? "text-orange" : "text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeProject === i ? 45 : 0 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ml-3 ${
                      activeProject === i ? "bg-orange" : "bg-white/10"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Inline Preview for Mobile */}
              <AnimatePresence>
                {activeProject === i && <ProjectPreview project={project} />}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:flex gap-8">
          {/* Project List - Left Side */}
          <div className="lg:w-2/5 space-y-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveProject(i)}
                className={`group cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 ${
                  activeProject === i
                    ? "border-orange bg-orange/5"
                    : "border-white/10 hover:border-white/30 bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          activeProject === i
                            ? "bg-orange text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">0{i + 1}</span>
                    </div>
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        activeProject === i ? "text-orange" : "text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeProject === i ? 45 : 0 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      activeProject === i ? "bg-orange" : "bg-white/10"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Preview - Right Side (Desktop only) */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className={`sticky top-24 rounded-3xl overflow-hidden bg-gradient-to-br ${projects[activeProject]?.color || projects[0].color} p-1`}
            >
              <div className="bg-dark rounded-3xl overflow-hidden">
                {/* Browser mockup header */}
                <div className="bg-gray-900/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/10 rounded-lg px-4 py-1.5 text-xs text-gray-400 text-center truncate">
                      {projects[activeProject]?.url || projects[0].url}
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={projects[activeProject]?.image || projects[0].image}
                    alt={projects[activeProject]?.title || projects[0].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                </motion.div>

                {/* Project Info */}
                <motion.div
                  key={`info-${activeProject}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="p-6"
                >
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[activeProject]?.desc || projects[0].desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {projects[activeProject]?.url && (
                      <a
                        href={projects[activeProject]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-orange text-white rounded-xl font-bold hover:bg-orange/80 hover:shadow-lg hover:shadow-orange/30 transition-all inline-flex items-center justify-center gap-2"
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
                        Ver Demo
                      </a>
                    )}
                    {projects[activeProject]?.github && (
                      <a
                        href={projects[activeProject]?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 text-white border-2 border-white/20 rounded-xl font-bold hover:bg-white/20 hover:border-white/40 transition-all inline-flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Código
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`transition-all duration-300 rounded-full ${
                    activeProject === i
                      ? "w-8 h-2 bg-orange"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
