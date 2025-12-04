import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-10 min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-black text-secondary mb-12 text-right border-b-2 border-secondary/20 pb-4 inline-block float-right clear-both">
          SOBRE MI
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center clear-both">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-secondary to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-primary p-8 rounded-lg border border-gray/10 shadow-2xl">
            <p className="text-lg md:text-xl text-gray/90 text-justify leading-relaxed font-light">
              <span className="text-secondary font-bold text-2xl block mb-4">
                Software Developer
              </span>
              Con experiencia técnica en{" "}
              <span className="text-white font-medium">
                JavaScript, React, Redux, Node.js, Express, PostgreSQL y MongoDB
              </span>
              . He trabajado en el diseño de interfaces atractivas, centradas en
              la usabilidad y la experiencia del usuario. Además, he creado
              aplicaciones optimizadas buscando un excelente rendimiento. Mi
              sólido conocimiento y experiencia en metodologías ágiles, en
              especial <span className="text-white font-medium">Scrum</span>,
              respaldan mi enfoque colaborativo y mi capacidad para resolver
              problemas de manera creativa. Apasionada del aprendizaje continuo
              y actualizada en las últimas tendencias en desarrollo web.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Placeholder for a profile image if available, otherwise using a stylized element */}
          <div className="w-64 h-64 bg-linear-to-br from-gray/10 to-transparent rounded-full flex items-center justify-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 animate-pulse rounded-full"></div>
            <span className="text-6xl">👩‍💻</span>
          </div>

          <a
            href="/assets/cv-lkguevara.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-secondary font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Download CV
            <div className="absolute -inset-3 rounded-xl bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-lg"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
