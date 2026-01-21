import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import { useCallback } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-accent dark:from-slate-950 via-accent dark:via-slate-900 to-black text-white py-16 px-6 relative overflow-hidden transition-colors duration-300">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-full blur-3xl -z-10"></div>
=======
    <footer className="bg-gradient-to-br from-accent via-accent to-black text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary bg-opacity-10 rounded-full blur-3xl -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{portfolioData.name}</h3>
            <p className="text-gray-300 text-sm opacity-80 leading-relaxed">{portfolioData.role}</p>
            <p className="text-gray-400 text-xs opacity-70">Building beautiful digital experiences</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="./Resume_.pdf"
                  download
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Resume
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm opacity-80 hover:opacity-100 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Social</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white border-opacity-20"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white border-opacity-20"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href={portfolioData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white border-opacity-20"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm opacity-75">
            &copy; {currentYear} {portfolioData.name}. All rights reserved. Crafted with ❤️
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 hover:shadow-lg text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
            type="button"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
