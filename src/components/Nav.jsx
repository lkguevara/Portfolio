import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Habilidades", "Proyectos", "Contacto"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-dark border-b border-orange/20">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          <span className="text-orange">L</span>
          <span className="text-purple">K</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white hover:text-orange transition-colors text-sm md:text-base font-medium cursor-pointer"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-purple/20 border-t border-orange"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-left px-6 py-3 text-white hover:bg-purple transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
