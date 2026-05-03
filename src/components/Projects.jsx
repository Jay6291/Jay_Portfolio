import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Blogify App",
    description:
      "A blogging platform where users can write, publish and read blogs with a clean UI experience.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Jay6291/Blogify_App",
    demo: "#",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "A fun interactive Tic Tac Toe game with smooth UI and winning logic implementation.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Jay6291/tic-tac-toe",
    demo: "#",
  },
  {
    name: "Admission Form",
    description:
      "A responsive admission form project with proper input handling and validations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jay6291/Addmissionfrom",
    demo: "#",
  },
  {
    name: "TextUtils",
    description:
      "A text utility tool where users can edit, format, count words, and analyze text easily.",
    tech: ["React", "Bootstrap", "JavaScript"],
    github: "https://github.com/Jay6291/TextUtils",
    demo: "#",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A complete e-commerce platform with product listing, cart system and backend integration.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Jay6291/ecommerce",
    demo: "#",
  },
  {
    name: "News App",
    description:
      "A news application that fetches live news using API and displays category-based updates.",
    tech: ["React", "Django"],
    github: "https://github.com/Jay6291/news-app",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Here are some of my featured projects built with modern
            technologies, focusing on performance, clean UI, and scalable
            architecture.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-200 hover:bg-purple-500/20 transition"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-purple-500 hover:border-purple-500 transition text-sm font-semibold"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Want to see more? Visit my GitHub profile for additional
            repositories 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
