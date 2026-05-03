import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiDjango, SiPython } from "react-icons/si";

const experiences = [
  {
    title: "Django Training",
    company: "RCPL (Training Institute)",
    duration: "2024",
    location: "Kanpur, India",
    description:
      "Completed hands-on training on Django Framework, REST APIs, and web development best practices. Worked on real-world mini projects and learned backend architecture.",
    highlights: [
      "Built REST APIs using Django Rest Framework",
      "Worked with authentication & authorization",
      "Database integration with ORM & PostgreSQL/MongoDB",
      "Created full-stack mini projects",
    ],
    tech: ["Django", "Python", "REST API"],
    icon: <SiDjango size={26} />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience & Training
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            My learning journey and professional training experiences that
            helped me build strong full-stack development skills.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[14px] top-4 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg z-20">
                <FaBriefcase size={14} />
              </div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Glow Fix */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span className="text-purple-400">{exp.icon}</span>
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 mt-1 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-purple-400" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mt-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-200 mb-3 tracking-wide uppercase">
                      Key Highlights
                    </p>

                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
                      {exp.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2"
                        >
                          <span className="text-purple-400 mt-1">✔</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-purple-500/20 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <SiPython className="text-purple-400" size={24} />
              Backend Development Skills
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Strong understanding of backend development using Django and
              Node.js. Experienced in REST APIs, database integration,
              authentication and secure server-side programming.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <SiDjango className="text-purple-400" size={24} />
              Real-World Project Training
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Worked on practical assignments and mini projects during training.
              Improved debugging skills, clean code writing, and deployment
              basics.
            </p>
          </div>
        </div>

        {/* Footer line */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            I am continuously learning and improving my skills to build scalable
            full-stack applications 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
