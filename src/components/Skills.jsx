import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiGithub,
  SiPostman,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      desc: "Crafting modern responsive UI with smooth user experience.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Backend Development",
      desc: "Building scalable backend APIs and server-side applications.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
      ],
    },
    {
      title: "Database & Tools",
      desc: "Managing databases and development tools efficiently.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  const languages = [
    {
      name: "English",
      level: "Professional Working Proficiency",
    },
    { name: "Chinese", level: "Basic Communication" },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Blur Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600 opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Expertise & Strengths
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            A premium set of technical skills focused on building
            high-performance, scalable and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-purple-500/20 transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{category.desc}</p>

              <div className="mt-8 space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 text-lg font-semibold">
                      <span className="text-2xl text-blue-400">
                        {skill.icon}
                      </span>
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Knowledge */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {/* Additional Knowledge */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Additional <span className="text-blue-400">Knowledge</span>
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                "API Integration",
                "Responsive Design",
                "Authentication (JWT)",
                "Deployment (Vercel/Netlify)",
                "Problem Solving",
                "DSA Basics",
                "UI/UX Fundamentals",
                "Clean Code Practices",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-gray-200 text-sm hover:scale-105 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Foreign <span className="text-purple-400">Languages</span>
            </h3>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div>
                    <p className="text-lg font-semibold">{lang.name}</p>
                    <p className="text-sm text-gray-400">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Line */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Always learning new technologies and improving my development skills
            🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
