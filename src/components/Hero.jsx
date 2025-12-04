import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      xOffset: Math.random() * 100 - 50,
      color: i % 3 === 0 ? "orange" : i % 3 === 1 ? "purple" : "blue",
    }))
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full blur-sm ${
              particle.color === "orange"
                ? "bg-orange"
                : particle.color === "purple"
                ? "bg-purple"
                : "bg-blue"
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, particle.xOffset],
              scale: [1, 1.2, 1],
              opacity: [0, 0.15, 0.15, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
              opacity: {
                duration: particle.duration,
                times: [0, 0.1, 0.9, 1],
              },
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Main Hero */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-sm text-white">— Hey!</span>
              <motion.span
                className="px-3 py-1 text-xs rounded-full font-medium bg-orange text-white relative"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-orange/80"
                  animate={{
                    scale: [1, 1.1],
                    opacity: [0.1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <span className="relative z-10">✨ Open to work</span>
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-3 text-white"
            >
              I'm <span className="text-orange">Lian Katherin</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-orange"
            >
              FrontEnd Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-8 leading-relaxed text-lg"
            >
              Desarrollando experiencias web hermosas desde Colombia 🇨🇴.
              Apasionada por la tecnología 🌐 y el medio ambiente 🌿.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:liann.guevara@gmail.com"
                className="px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 shadow-lg bg-purple text-white hover:bg-purple/80 transition-all"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact me
              </a>

              <a
                href="/assets/cv-lkguevara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 shadow-lg bg-purple text-white hover:bg-purple/80 transition-all"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/lkguevara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl transition-all hover:-translate-y-1 hover:rotate-6"
                title="GitHub"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/lkguevara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl transition-all hover:-translate-y-1 hover:rotate-6"
                title="LinkedIn"
              >
                <svg
                  className="w-6 h-6 fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: About Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2"
          >
            <motion.div
              className="relative p-8 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-orange/10 via-purple/5 to-transparent border-2 border-orange/30 backdrop-blur-sm"
              whileHover={{
                borderColor: "rgba(254, 137, 5, 0.6)",
                boxShadow: "0 0 30px rgba(254, 137, 5, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange rounded-xl">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-orange">Sobre mí</h3>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                  <p>
                    <span className="text-white font-semibold">
                      Frontend Developer
                    </span>{" "}
                    con experiencia en el desarrollo de interfaces web
                    responsivas y centradas en el usuario. Manejo sólido de{" "}
                    <span className="text-orange font-semibold">
                      JavaScript, React, Redux Toolkit, Zustand y Tailwind CSS
                    </span>
                    , además de experiencia en consumo de APIs REST y
                    conocimientos básicos en Node.js, Express, PostgreSQL y
                    MongoDB.
                  </p>

                  <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg border-l-4 border-orange">
                    <svg
                      className="w-5 h-5 text-orange mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <p className="text-xs">
                      Actualmente iniciando el aprendizaje de{" "}
                      <span className="text-orange font-semibold">
                        TypeScript, Next.js
                      </span>{" "}
                      y un plan de estudios en{" "}
                      <span className="text-orange font-semibold">
                        Inteligencia Artificial
                      </span>{" "}
                      aplicada al desarrollo frontend.
                    </p>
                  </div>

                  <p>
                    Me caracterizo por mi{" "}
                    <span className="text-white font-semibold">
                      adaptabilidad en entornos ágiles (Scrum)
                    </span>
                    , la implementación de buenas prácticas en frontend y un
                    interés constante por aprender y mantenerme actualizada en
                    el entorno de desarrollo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-orange text-sm font-bold">Scroll Down</span>
          <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
