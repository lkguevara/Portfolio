import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Acerca", path: "/about" },
    { name: "Habilidades", path: "/skills" },
    { name: "Proyectos", path: "/projects" },
    { name: "Contacto", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-primary-light h-20 flex justify-between items-center px-8 shadow-lg">
      <Link to="/" className="group">
        <div className="w-10 h-10 flex items-center justify-center border-2 border-gray rounded-full text-gray font-black text-lg group-hover:text-secondary group-hover:border-secondary transition-colors duration-300">
          LK
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-gray hover:text-secondary"
                }`}
              >
                -{link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50" onClick={toggleMenu}>
        <div className="space-y-2 cursor-pointer">
          <motion.span
            animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="block w-8 h-0.5 bg-gray"
          ></motion.span>
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block w-8 h-0.5 bg-gray"
          ></motion.span>
          <motion.span
            animate={{ rotateZ: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="block w-8 h-0.5 bg-gray"
          ></motion.span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="space-y-8 text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className={`text-3xl font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-secondary"
                        : "text-gray hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
