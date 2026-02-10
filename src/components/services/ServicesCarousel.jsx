import { useRef } from "react";
import { motion } from "framer-motion";

const ServicesCarousel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const firstCard = container.querySelector("[data-carousel-item]");
    const cardWidth = firstCard?.getBoundingClientRect().width || 280;
    container.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-white/60">
          Desliza para ver todos los servicios.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            className="w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-orange/50 transition-all"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            className="w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-orange/50 transition-all"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
      >
        {items.map((service, index) => (
          <motion.div
            key={service.id}
            data-carousel-item
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="min-w-[260px] sm:min-w-[320px] lg:min-w-[340px] snap-start p-6 rounded-2xl border border-orange/30 bg-linear-to-br from-orange/10 via-purple/5 to-transparent"
          >
            <h3 className="text-xl font-bold text-white mb-2">{service.label}</h3>
            <p className="text-sm text-white/70 mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/80 bg-white/10 border border-white/10 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
