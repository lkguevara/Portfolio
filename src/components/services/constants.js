export const PROJECT_TYPES = [
  {
    id: "landing",
    label: "Landing",
    description:
      "Ideal para presencia online con narrativa clara, performance y diseño que convierta.",
    tags: ["Diseño responsive", "Animaciones suaves", "SEO base"],
    base: 600000,
    includedPages: 1,
    perPage: 120000,
  },
  {
    id: "portfolio",
    label: "Portafolio personal",
    description:
      "Muestra tu marca personal con secciones claras y un mensaje directo.",
    tags: ["Branding", "Secciones clave", "CTA visible"],
    base: 800000,
    includedPages: 3,
    perPage: 100000,
  },
  {
    id: "corporate",
    label: "Sitio corporativo",
    description:
      "Web profesional para empresas, con credibilidad y estructura clara.",
    tags: ["SEO", "Performance", "Secciones informativas"],
    base: 900000,
    includedPages: 4,
    perPage: 110000,
  },
  {
    id: "webapp",
    label: "Web App",
    description:
      "Interfaces con datos reales, flujos CRUD y estados bien gestionados.",
    tags: ["React + Tailwind", "APIs REST", "Auth"],
    base: 1200000,
    includedPages: 3,
    perPage: 120000,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description:
      "Paneles con data en tiempo real y visualización clara.",
    tags: ["KPI", "Filtros", "UX para equipos"],
    base: 1800000,
    includedPages: 3,
    perPage: 110000,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "Tiendas online escalables con catálogo dinámico y panel administrativo.",
    tags: ["Pagos", "CMS", "Optimización"],
    base: 3200000,
    includedPages: 3,
    perPage: 140000,
  },
  {
    id: "other",
    label: "Otro (¿cuál?)",
    description:
      "Proyecto a la medida según tu necesidad.",
    tags: ["Descubrimiento", "Alcance", "Plan"],
    base: 1500000,
    includedPages: 3,
    perPage: 120000,
  },
];

export const STACK_OPTIONS = [
  {
    id: "react",
    label: "React + Vite",
    description: "Front rapido y flexible para sitios modernos.",
    cost: 0,
  },
  {
    id: "next",
    label: "Next.js",
    description: "Ideal para SEO, rendimiento y escalabilidad.",
    cost: 200000,
  },
  {
    id: "astro",
    label: "Astro",
    description: "Ultra rapido para sitios con mucho contenido.",
    cost: 150000,
  },
  {
    id: "react-node",
    label: "React + Node API",
    description: "Apps con backend propio y flujos complejos.",
    cost: 350000,
  },
  {
    id: "shopify",
    label: "Shopify",
    description: "E-commerce rapido con panel autogestionable.",
    cost: 300000,
  },
  {
    id: "wordpress",
    label: "WordPress",
    description: "Sitios administrables con edicion facil.",
    cost: 200000,
  },
  {
    id: "other",
    label: "Otro (¿cuál?)",
    description: "Especifica tu stack preferido.",
    cost: 0,
  },
];

export const FUNCTION_OPTIONS = [
  { id: "design", label: "Diseno UI/UX", cost: 300000 },
  { id: "cms", label: "CMS autogestionable", cost: 350000 },
  { id: "payments", label: "Pasarela de pagos", cost: 500000 },
  { id: "auth", label: "Autenticacion", cost: 350000 },
  { id: "dashboard", label: "Dashboard / Admin", cost: 450000 },
  { id: "integrations", label: "Integraciones externas", cost: 400000 },
  { id: "analytics", label: "Analiticas", cost: 150000 },
  { id: "ai", label: "Integracion IA", cost: 550000 },
];

export const DELIVERABLES = [
  "Estrategia y definicion de alcance",
  "Diseño UI/UX coherente",
  "Desarrollo responsive",
  "Optimizacion de rendimiento",
  "Deploy y soporte inicial",
];

export const SERVICE_CARDS = PROJECT_TYPES.filter((type) => type.id !== "other");

export const CURRENCY = "COP";
