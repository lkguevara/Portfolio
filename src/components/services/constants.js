export const PROJECT_TYPES = [
  {
    id: "landing",
    label: "Landing",
    description:
      "Ideal para presencia online con narrativa clara, performance y diseño que convierta.",
    tags: ["Diseño responsive", "Animaciones suaves", "SEO base"],
    base: 850000,
    includedPages: 1,
    perPage: 200000,
  },
  {
    id: "portfolio",
    label: "Portafolio personal",
    description:
      "Muestra tu marca personal con páginas claras y un mensaje directo.",
    tags: ["Branding", "Páginas clave", "CTA visible"],
    base: 750000,
    includedPages: 1,
    perPage: 150000,
  },
  {
    id: "corporate",
    label: "Sitio corporativo",
    description:
      "Web profesional para empresas, con credibilidad y estructura clara.",
    tags: ["SEO", "Performance", "Páginas informativas"],
    base: 1500000,
    includedPages: 3,
    perPage: 250000,
  },
  {
    id: "webapp",
    label: "Web App",
    description:
      "Aplicaciones web interactivas con funcionalidades personalizadas",
    tags: ["React + Tailwind", "APIs REST", "Auth"],
    base: 2000000,
    includedPages: 3,
    perPage: 250000,
  },
  {
    id: "webapp-backend",
    label: "Web App + Servidor/Backend",
    description:
      "Aplicaciones web completas con frontend, servidor/API y base de datos.",
    tags: ["React + Tailwind", "Node API", "DB + Auth"],
    base: 3000000,
    includedPages: 3,
    perPage: 250000,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description:
      "Paneles con data y visualización clara.",
    tags: ["Gráficos", "Filtros", "Exportación de datos"],
    base: 2200000,
    includedPages: 2,
    perPage: 250000,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "Tiendas online escalables con catálogo dinámico y panel administrativo.",
    tags: ["Pagos", "CMS", "Optimización"],
    base: 2500000,
    includedPages: 3,
    perPage: 250000,
  },
  {
    id: "other",
    label: "Otro (¿cuál?)",
    description:
      "Proyecto a la medida según tu necesidad.",
    tags: ["Descubrimiento", "Alcance", "Plan"],
    base: 3000000,
    includedPages: 3,
    perPage: 250000,
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
    cost: 800000,
  },
  {
    id: "astro",
    label: "Astro",
    description: "Ultra rapido para sitios con mucho contenido.",
    cost: 300000,
  },
  {
    id: "react-node",
    label: "React + Node API",
    description: "Apps con backend propio y flujos complejos.",
    cost: 650000,
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
  { id: "design", label: "Diseno UI/UX", cost: 600000 },
  { id: "cms", label: "CMS autogestionable", cost: 650000 },
  { id: "payments", label: "Pasarela de pagos", cost: 900000 },
  { id: "auth", label: "Autenticacion", cost: 850000 },
  { id: "dashboard", label: "Dashboard / Admin", cost: 650000 },
  { id: "integrations", label: "Integraciones externas", cost: 900000 },
  { id: "analytics", label: "Analiticas", cost: 1000000 },
  { id: "ai", label: "Integracion IA", cost: 1550000 },
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
