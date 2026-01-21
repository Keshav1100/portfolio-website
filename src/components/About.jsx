import { portfolioData } from "../data/portfolio";
import { FaAward, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-primary bg-opacity-5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-title">Who I Am</p>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1 relative">
            <div className="relative w-72 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary rounded-3xl blur-2xl opacity-15"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/images/Profile.jpeg"
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
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100">
                <FaAward className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent mb-1">Experience</h3>
                <p className="text-sm text-accent opacity-70">Projects completed with passion</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary border-opacity-10 hover:border-opacity-100">
                <FaGraduationCap className="text-4xl text-primary mb-3" />
                <h3 className="font-bold text-lg text-accent mb-1">Education</h3>
                <p className="text-sm text-accent opacity-70">B.Tech Undergraduate</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-accent opacity-90 leading-relaxed">
                {portfolioData.longBio}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div>
                <p className="font-bold text-lg text-accent mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-8 bg-primary rounded-full"></span>
                  Development Skills
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.skills.development.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm" />
                      <span className="text-accent font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-lg text-accent mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-8 bg-primary rounded-full"></span>
                  Analytics Skills
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.skills.analytics.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm" />
                      <span className="text-accent font-medium">{skill}</span>
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
