import { motion } from "framer-motion";
import ServicesCarousel from "./services/ServicesCarousel";
import { SERVICE_CARDS } from "./services/constants";

const Services = () => {
  return (
    <section id="servicios" className="py-8 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Servicios
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
          <p className="text-md md:text-lg mt-4 text-white/80 max-w-2xl mx-auto">
            Soluciones frontend pensadas para escalar tu proyecto. Me especializo en React y tecnologías modernas para crear experiencias excepcionales.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="rounded-full border border-orange/40 px-4 py-2">React Expert</span>
            <span className="rounded-full border border-orange/40 px-4 py-2">Performance</span>
            <span className="rounded-full border border-orange/40 px-4 py-2">UX Optimizado</span>
          </div>
        </motion.div>

        <ServicesCarousel items={SERVICE_CARDS} />
      </div>
    </section>
  );
};

export default Services;
