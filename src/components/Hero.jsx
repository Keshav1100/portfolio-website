import { portfolioData } from "../data/portfolio";
import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { useCallback } from "react";

export default function Hero() {
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Resume_.pdf";
    link.download = "Keshav_Agarwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleContactClick = useCallback(() => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
<<<<<<< HEAD
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-full blur-3xl -z-10"></div>
=======
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 order-2 md:order-1">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hey, I'm</p>
<<<<<<< HEAD
              <h1 className="text-6xl md:text-7xl font-black text-accent dark:text-white leading-tight">
                {portfolioData.name.split(' ')[0]}
                <span className="block text-primary">Agarwal</span>
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-accent dark:text-gray-300 opacity-70">
=======
              <h1 className="text-6xl md:text-7xl font-black text-accent leading-tight">
                {portfolioData.name.split(' ')[0]}
                <span className="block text-primary">Agarwal</span>
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-accent opacity-70">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                {portfolioData.role}
              </p>
            </div>

            {/* Bio */}
<<<<<<< HEAD
            <p className="text-lg text-accent dark:text-gray-400 opacity-75 max-w-md leading-relaxed">
=======
            <p className="text-lg text-accent opacity-75 max-w-md leading-relaxed">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
              {portfolioData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleDownloadCV}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Download CV
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleContactClick}
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                Get In Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

<<<<<<< HEAD
=======
            {/* Social Links */}
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            <div className="flex gap-6 pt-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-orange-600 dark:to-orange-500 rounded-xl flex items-center justify-center text-primary dark:text-white hover:bg-primary dark:hover:bg-orange-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
=======
                className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-blue-600 dark:to-blue-500 rounded-xl flex items-center justify-center text-primary dark:text-white hover:bg-primary dark:hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
=======
                className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center order-1 md:order-2 relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Soft outer blur glow */}
<<<<<<< HEAD
              <div className="absolute -inset-8 bg-gradient-to-br from-primary via-blue-600 to-primary rounded-full blur-3xl opacity-25 dark:opacity-40 animate-pulse"></div>
              
              {/* Secondary softer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-blue-500 rounded-full opacity-15 dark:opacity-25 blur-2xl"></div>
              
              {/* Main circular image with soft fade */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl dark:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Profile.jpeg`}
=======
              <div className="absolute -inset-8 bg-gradient-to-br from-primary via-blue-600 to-primary rounded-full blur-3xl opacity-25 animate-pulse"></div>
              
              {/* Secondary softer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-blue-500 rounded-full opacity-15 blur-2xl"></div>
              
              {/* Main circular image with soft fade */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="./images/Profile.jpeg"
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Radial gradient vignette for soft edge fade */}
<<<<<<< HEAD
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-white dark:to-slate-950 opacity-15 pointer-events-none"></div>
              </div>

              {/* Floating decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-10 dark:opacity-20 blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 dark:opacity-20 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
=======
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-white opacity-15 pointer-events-none"></div>
              </div>

              {/* Floating decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-10 blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
