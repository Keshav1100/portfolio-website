import { portfolioData } from "../data/portfolio";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
<<<<<<< HEAD
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-full blur-3xl -z-10"></div>
=======
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-title">Let's Talk</p>
<<<<<<< HEAD
          <h2 className="section-heading text-accent dark:text-white">Get In Touch</h2>
          <p className="text-lg text-accent dark:text-gray-400 opacity-75 max-w-2xl mx-auto">
=======
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-lg text-accent opacity-75 max-w-2xl mx-auto">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            I'd love to hear from you! Whether it's about a project, or just a friendly hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
<<<<<<< HEAD
            className="group relative bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
            aria-label={`Send email to ${portfolioData.email}`}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
=======
            className="group relative bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
            aria-label={`Send email to ${portfolioData.email}`}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            
            <div className="relative space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope size={28} />
              </div>
              <div>
<<<<<<< HEAD
                <h3 className="font-bold text-xl text-accent dark:text-white mb-2">Email</h3>
                <p className="text-lg text-primary font-semibold break-all">{portfolioData.email}</p>
              </div>
              <div className="flex items-center gap-2 text-accent dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
=======
                <h3 className="font-bold text-xl text-accent mb-2">Email</h3>
                <p className="text-lg text-primary font-semibold break-all">{portfolioData.email}</p>
              </div>
              <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                <span className="text-sm font-medium">Send message</span>
                <FaArrowRight size={16} />
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${portfolioData.phone}`}
<<<<<<< HEAD
            className="group relative bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
            aria-label={`Call ${portfolioData.phone}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
=======
            className="group relative bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
            aria-label={`Call ${portfolioData.phone}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            
            <div className="relative space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPhone size={28} />
              </div>
              <div>
<<<<<<< HEAD
                <h3 className="font-bold text-xl text-accent dark:text-white mb-2">Phone</h3>
                <p className="text-lg text-primary font-semibold">{portfolioData.phone}</p>
              </div>
              <div className="flex items-center gap-2 text-accent dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
=======
                <h3 className="font-bold text-xl text-accent mb-2">Phone</h3>
                <p className="text-lg text-primary font-semibold">{portfolioData.phone}</p>
              </div>
              <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                <span className="text-sm font-medium">Give a call</span>
                <FaArrowRight size={16} />
              </div>
            </div>
          </a>

          {/* Location */}
<<<<<<< HEAD
          <div className="group relative bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
=======
          <div className="group relative bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            
            <div className="relative space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt size={28} />
              </div>
              <div>
<<<<<<< HEAD
                <h3 className="font-bold text-xl text-accent dark:text-white mb-2">Location</h3>
=======
                <h3 className="font-bold text-xl text-accent mb-2">Location</h3>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                <p className="text-lg text-primary font-semibold">{portfolioData.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
<<<<<<< HEAD
        <div className="bg-gradient-to-r from-primary/10 dark:from-primary/20 via-blue-600/10 dark:via-blue-600/20 to-primary/10 dark:to-primary/20 p-12 rounded-2xl border-2 border-primary border-opacity-20 dark:border-opacity-30 transition-colors duration-300">
          <h3 className="font-bold text-2xl text-accent dark:text-white text-center mb-8">Connect With Me</h3>
=======
        <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-primary/10 p-12 rounded-2xl border-2 border-primary border-opacity-20">
          <h3 className="font-bold text-2xl text-accent text-center mb-8">Connect With Me</h3>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="group relative w-16 h-16 bg-white dark:bg-orange-600 rounded-xl flex items-center justify-center text-primary dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent dark:border-orange-500 hover:border-primary dark:hover:border-orange-400"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} className="dark:text-white group-hover:dark:text-orange-200 transition-colors" />
              <div className="absolute inset-0 bg-primary dark:bg-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
=======
              className="group relative w-16 h-16 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-primary"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} className="group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="group relative w-16 h-16 bg-white dark:bg-blue-600 rounded-xl flex items-center justify-center text-primary dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent dark:border-blue-500 hover:border-primary dark:hover:border-blue-400"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={28} className="dark:text-white group-hover:dark:text-blue-200 transition-colors" />
              <div className="absolute inset-0 bg-primary dark:bg-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
=======
              className="group relative w-16 h-16 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-primary"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={28} className="group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            </a>
            <a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="group relative w-16 h-16 bg-white dark:bg-cyan-600 rounded-xl flex items-center justify-center text-primary dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent dark:border-cyan-500 hover:border-primary dark:hover:border-cyan-400"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={28} className="dark:text-white group-hover:dark:text-cyan-200 transition-colors" />
              <div className="absolute inset-0 bg-primary dark:bg-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
=======
              className="group relative w-16 h-16 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-primary"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={28} className="group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
