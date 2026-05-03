import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import jayImg from "../assets/jay.png";

const About = () => {
  const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building pixel-perfect, responsive UI with React & Tailwind CSS.",
      color: "rgba(99,102,241,0.35)",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Creating scalable APIs using Node.js, Express & Django.",
      color: "rgba(168,85,247,0.35)",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Strong coding fundamentals with real-world project experience.",
      color: "rgba(34,211,238,0.35)",
    },
  ];

  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Django",
    "Python",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-[#0a0e1a] overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow Background */}
      <div
        className="absolute top-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
              letterSpacing: "0.05em",
            }}
          >
            ✦ About Me
          </div>

          <h2
            className="mt-6 font-extrabold"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              background:
                "linear-gradient(135deg, #ffffff 30%, #a5b4fc 65%, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Developer focused on clean code & modern UI
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto"
            style={{
              color: "#94a3b8",
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              lineHeight: "1.9",
            }}
          >
            I’m Jay Kamal, a Full Stack Developer passionate about building
            modern web applications. I focus on clean UI, scalable backend APIs,
            and performance-driven development to deliver high-quality projects.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">
            {/* Profile Card */}
            <div
              className="flex gap-6 p-6 rounded-2xl items-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
              }}
            >
              {/* Image */}
              <div
                className="rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  width: "110px",
                  height: "130px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <img
                  src={jayImg}
                  alt="Jay Kamal"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-extrabold text-white">Jay Kamal</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Full Stack Developer • React • Node • Django
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(99,102,241,0.12)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                    }}
                  >
                    Open to Work
                  </span>

                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(168,85,247,0.12)",
                      border: "1px solid rgba(168,85,247,0.25)",
                      color: "#d8b4fe",
                    }}
                  >
                    Remote / Onsite
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{
                      background: item.color,
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h4 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Education Card */}
              <div
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{
                    background: "rgba(34,211,238,0.25)",
                    color: "white",
                  }}
                >
                  <MdOutlineSchool />
                </div>

                <h4 className="text-white font-bold text-base mb-2">
                  Education
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed">
                  B.Tech (Computer Science) <br />
                  Focused on development & programming.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {/* Skills Cloud */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
              }}
            >
              <h3 className="text-white font-extrabold text-xl mb-4">
                My Skillset
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I work with modern frameworks and tools to build high-quality,
                scalable web applications with smooth user experience.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#cbd5e1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(99,102,241,0.15)";
                      e.currentTarget.style.borderColor =
                        "rgba(99,102,241,0.35)";
                      e.currentTarget.style.color = "#a5b4fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#cbd5e1";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.12))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <h3 className="text-white font-extrabold text-lg">
                  Want to work together?
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  Let’s build something modern and impactful.
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 32px rgba(99,102,241,0.55)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(99,102,241,0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap');`}</style>
    </section>
  );
};

export default About;
