import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-xl z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text hover:scale-105 transition-transform">
          Keshav A.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-accent font-medium hover:text-primary transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-accent font-medium hover:text-primary transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="text-accent font-medium hover:text-primary transition-colors duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-accent font-medium hover:text-primary transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-12 h-12 flex items-center justify-center text-accent hover:text-primary transition-colors duration-300"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-100 shadow-lg animate-in fade-in duration-300">
          <div className="flex flex-col gap-0 px-6 py-4 max-w-7xl mx-auto">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="py-3 px-4 text-accent hover:text-primary hover:bg-gray-50 transition-all duration-300 rounded-lg font-medium border-l-4 border-transparent hover:border-primary">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="py-3 px-4 text-accent hover:text-primary hover:bg-gray-50 transition-all duration-300 rounded-lg font-medium border-l-4 border-transparent hover:border-primary">
              About
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="py-3 px-4 text-accent hover:text-primary hover:bg-gray-50 transition-all duration-300 rounded-lg font-medium border-l-4 border-transparent hover:border-primary">
              Projects
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="py-3 px-4 text-accent hover:text-primary hover:bg-gray-50 transition-all duration-300 rounded-lg font-medium border-l-4 border-transparent hover:border-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
