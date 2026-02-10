import { motion } from "framer-motion";

const Contact = () => (
  <section id="contacto" className="relative">
    {/* Main Contact Section */}
    <div className="py-8 md:py-20 px-6 bg-linear-to-b from-[#14121b] via-[#100e16] to-[#0a0810]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-purple/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-orange">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-md md:text-lg text-gray-300 mb-6 md:mb-12 max-w-2xl mx-auto">
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
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-4 text-xl font-bold rounded-2xl shadow-2xl bg-purple text-white hover:bg-purple/90 hover:shadow-purple/50 transition-all group"
          >
            <span className="text-lg md:text-2xl">✉️</span>
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
