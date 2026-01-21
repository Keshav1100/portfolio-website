import { useState, useCallback, useMemo } from "react";
import { projects, categories } from "../data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-title">My Work</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              type="button"
              aria-pressed={activeCategory === category}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/50"
                  : "bg-gray-100 text-accent hover:bg-gray-200 border-2 border-transparent hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">{project.category}</p>
                  <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-accent opacity-75 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`flex gap-3 pt-6 border-t border-gray-100 ${!project.liveDemo ? "justify-center" : ""}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent to-accent text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold group/btn ${
                      project.liveDemo ? "flex-1" : "flex-1"
                    }`}
                    aria-label="View GitHub"
                  >
                    <FaGithub size={18} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold group/btn"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
