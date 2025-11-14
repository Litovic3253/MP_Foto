import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Простая функция переключения меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Закрытие меню при клике вне его области
  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "Видео", path: "/videos" },
    { name: "До/После", path: "/before-after" },
    { name: "Контакты", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo">
              <span className="logo-text">MP</span>
              <span className="logo-subtitle">Фотограф</span>
            </Link>

            <div className="nav-links-desktop">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Мобильное меню - максимально простая реализация */}
      {isOpen && (
        <div className="mobile-menu-simple">
          <div className="mobile-menu-overlay" onClick={handleOutsideClick} />
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="logo">
                <span className="logo-text">MP</span>
                <span className="logo-subtitle">Фотограф</span>
              </div>
              <button
                className="mobile-menu-close"
                onClick={handleOutsideClick}
                aria-label="Закрыть меню"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  onClick={handleOutsideClick}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
