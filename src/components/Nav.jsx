import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoLK from "../assets/logo-lk.png";

const navItems = [
  { name: "Proyectos", id: "proyectos" },
  { name: "Habilidades", id: "skills" },
  { name: "Experiencia", id: "experiencia" },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto", id: "contacto" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: -Infinity };
        return { id: item.id, top: el.offsetTop };
      });

      let current = "about";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].top) {
          current = sections[i].id;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Card Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed top-5 z-50 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto"
      >
        <div className="flex items-center gap-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#15131c]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30">
          {/* Logo LK - solo desktop */}
          <button
            onClick={() => scrollTo("about")}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-orange/20 transition-all duration-300 cursor-pointer"
          >
            <img
              src={logoLK}
              alt="LK Logo"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </button>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1 ml-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-white bg-orange/20 border border-orange/30 shadow-lg shadow-orange/10"
                    : "text-gray-300 hover:text-white hover:bg-orange/10 hover:border hover:border-orange/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-white/10 mx-2" />

          {/* Open to Work */}
          <a
            href="mailto:liann.guevara@gmail.com"
            className="hidden md:flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl text-green-400 hover:bg-green-500/10 hover:border hover:border-green-500/20 border border-transparent transition-all cursor-pointer"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 bg-green-400 rounded-full" />
            </span>
            Open
          </a>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-orange/10 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 top-0 w-full h-[2px] bg-orange rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 top-1/2" : ""
              }`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-orange rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`} />
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 bottom-1/2" : ""
              }`} />
            </div>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#15131c]/98 backdrop-blur-xl" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <div className="space-y-1 w-full max-w-xs">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <a
                href="mailto:liann.guevara@gmail.com"
                className="mt-8 flex items-center gap-2 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to Work — hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
