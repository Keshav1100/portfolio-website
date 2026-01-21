import { portfolioData } from "../data/portfolio";
import { FaAward, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
<<<<<<< HEAD
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative element */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-full blur-3xl -z-10"></div>
=======
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-title">Who I Am</p>
<<<<<<< HEAD
          <h2 className="section-heading text-accent dark:text-white">About Me</h2>
=======
          <h2 className="section-heading">About Me</h2>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1 relative">
            <div className="relative w-72 h-96">
<<<<<<< HEAD
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary rounded-3xl blur-2xl opacity-15 dark:opacity-25"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-2xl h-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Profile.jpeg`}
=======
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary rounded-3xl blur-2xl opacity-15"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/images/Profile.jpeg"
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                  alt="About Me"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-8">
            {/* Experience & Education Cards */}
            <div className="grid grid-cols-2 gap-4">
<<<<<<< HEAD
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100 dark:border-opacity-20 dark:hover:border-opacity-100">
                <FaAward className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent dark:text-white mb-1">Experience</h3>
                <p className="text-sm text-accent dark:text-gray-400 opacity-70">Projects completed with passion</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100 dark:border-opacity-20 dark:hover:border-opacity-100">
                <FaGraduationCap className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent dark:text-white mb-1">Education</h3>
                <p className="text-sm text-accent dark:text-gray-400 opacity-70">B.Tech Undergraduate</p>
=======
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100">
                <FaAward className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent mb-1">Experience</h3>
                <p className="text-sm text-accent opacity-70">Projects completed with passion</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100">
                <FaGraduationCap className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent mb-1">Education</h3>
                <p className="text-sm text-accent opacity-70">B.Tech Undergraduate</p>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
<<<<<<< HEAD
              <p className="text-lg text-accent dark:text-gray-300 opacity-90 leading-relaxed">
=======
              <p className="text-lg text-accent opacity-90 leading-relaxed">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                {portfolioData.longBio}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div>
<<<<<<< HEAD
                <p className="font-bold text-lg text-accent dark:text-white mb-4 flex items-center gap-2">
=======
                <p className="font-bold text-lg text-accent mb-4 flex items-center gap-2">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                  <span className="inline-block w-1 h-8 bg-primary rounded-full"></span>
                  Development Skills
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.skills.development.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm" />
<<<<<<< HEAD
                      <span className="text-accent dark:text-gray-300 font-medium">{skill}</span>
=======
                      <span className="text-accent font-medium">{skill}</span>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                    </div>
                  ))}
                </div>
              </div>

              <div>
<<<<<<< HEAD
                <p className="font-bold text-lg text-accent dark:text-white mb-4 flex items-center gap-2">
=======
                <p className="font-bold text-lg text-accent mb-4 flex items-center gap-2">
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                  <span className="inline-block w-1 h-8 bg-primary rounded-full"></span>
                  Analytics Skills
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.skills.analytics.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm" />
<<<<<<< HEAD
                      <span className="text-accent dark:text-gray-300 font-medium">{skill}</span>
=======
                      <span className="text-accent font-medium">{skill}</span>
>>>>>>> 949c963dfeea9629720427f6dff7a9649d90936f
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
