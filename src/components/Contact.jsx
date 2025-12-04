import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="relative">
    {/* Main Contact Section */}
    <div className="py-20 px-6 bg-gradient-to-b from-dark via-dark to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-purple/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-6 xl font-black mb-6 text-orange">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos
            sobre cómo puedo ayudar a tu equipo! 🚀
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative z-10"
        >
          <a
            href="mailto:liann.guevara@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl bg-orange text-white hover:bg-orange/90 hover:shadow-orange/50 transition-all group"
          >
            <span className="text-2xl">✉️</span>
            ¡Escríbeme!
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
