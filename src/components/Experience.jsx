import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Desarrollador Web",
    company: "Aval Valor Compartido — Bogota",
    period: "Feb 2024 - Actual",
    points: [
      "Desarrollo de interfaces responsivas asegurando compatibilidad multiplataforma.",
      "Mejoras visuales y estructurales para optimizar experiencia de usuario.",
      "Integracion y mantenimiento de sitios web con estandares modernos.",
      "Coordinacion de tareas y flujos de trabajo en entornos agiles.",
    ],
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "UniPuzzle — Remoto",
    period: "Oct 2024 - Dic 2025",
    points: [
      "Desarrollo de PWA orientada a exploracion academica con interfaz interactiva.",
      "Integracion de APIs de IA para respuestas personalizadas en tiempo real.",
      "Consumo de API en streaming para experiencia conversacional fluida.",
      "Gestion de estado global con Zustand mejorando escalabilidad.",
      "Enlace: unipuzzlelatam.com",
    ],
  },
  {
    role: "Desarrollador Full Stack (Freelance)",
    company: "Perlaswimwear — Remoto",
    period: "Ene 2024 - Oct 2024",
    points: [
      "Desarrollo de ecommerce con catalogo dinamico y navegacion optimizada.",
      "Implementacion de pasarela de pagos y gestion de contenidos.",
      "Arquitectura basada en componentes para mantener escalabilidad.",
      "Despliegue y mantenimiento en entorno cloud.",
      "Enlace: perlaswimwear.vercel.app",
    ],
  }
];

const EDUCATION = [
  {
    title: "Ingenieria de Sistemas",
    place: "CUN",
    period: "2025 - Actual",
    detail: "Formacion universitaria en sistemas y tecnologias de software.",
  },
  {
    title: "Tecnologia en Analisis y Desarrollo de Sistemas de Informacion",
    place: "SENA",
    period: "2021 - 2024",
    detail: "Formacion tecnica enfocada en desarrollo de software y analisis.",
  },
  {
    title: "Ingenieria Ambiental",
    place: "Universidad Pontificia Bolivariana",
    period: "2011 - 2016",
    detail: "Formacion universitaria en procesos y gestion ambiental.",
  },
];

const COMPLEMENTARY = [
  "AI for Developers — DataCamp (En curso)",
  "React – La Guia Completa (Udemy)",
  "React Hooks (Udemy)",
  "JavaScript Moderno (Udemy)",
  "Git & GitHub (Udemy)",
];

const LANGUAGES = [
  "Espanol: Nativo",
  "Ingles: A2 (en formacion)",
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-8 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Experiencia
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
          <p className="text-md md:text-lg mt-4 text-white/80 max-w-2xl mx-auto">
            Trayectoria enfocada en construir productos web claros, escalables y alineados a objetivos reales.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Experiencia Profesional</h3>
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-orange/30 bg-white/5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-orange">{item.role}</h4>
                    <p className="text-sm text-white/70">{item.company}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {item.period}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-white/75">
                  {item.points.map((point) => (
                    <p key={point}>• {point}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Educacion</h3>
            {EDUCATION.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-purple/30 bg-purple/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-purple">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.place}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-white/75">{item.detail}</p>
              </motion.div>
            ))}

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="text-lg font-bold text-white mb-3">Formacion Complementaria</h4>
              <div className="space-y-2 text-sm text-white/70">
                {COMPLEMENTARY.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="text-lg font-bold text-white mb-3">Idiomas</h4>
              <div className="space-y-2 text-sm text-white/70">
                {LANGUAGES.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
