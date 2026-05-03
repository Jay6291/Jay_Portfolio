import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiTailwindcss } from "react-icons/si";

import jayImg from "../assets/jay.png";
import jayResume from "../assets/Jay_Kamal_Updated_CV_68.pdf";

const Hero = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const elements = [imageRef.current, contentRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = i === 0 ? "translateX(-40px)" : "translateX(40px)";
      setTimeout(
        () => {
          el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        },
        200 + i * 180,
      );
    });
  }, []);

  const techStack = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaPython />, label: "Python" },
    { icon: <SiDjango />, label: "Django" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
  ];

  return (
    <section
      style={{ fontFamily: "'Sora', sans-serif" }}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0e1a]"
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap');`}</style>

      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-100px] right-[-60px] w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* LEFT — Image */}
        <div
          ref={imageRef}
          className="flex-shrink-0 flex flex-col items-center gap-4"
        >
          {/* Clean image container */}
          <div
            className="overflow-hidden rounded-2xl shadow-2xl"
            style={{
              width: "270px",
              height: "340px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={jayImg}
              alt="Jay Kamal"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-3">
            {[
              { icon: <FaGithub size={18} />, href: "#", label: "GitHub" },
              { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.2)";
                  e.currentTarget.style.color = "#a5b4fc";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Content */}
        <div ref={contentRef} className="flex-1 text-white">
          {/* Greeting tag */}
          <div
            className="inline-flex items-center gap-2 text-sm font-medium mb-5 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#a5b4fc",
              letterSpacing: "0.04em",
            }}
          >
            <span style={{ fontSize: "10px" }}>👋</span>
            Hello, I am
          </div>

          {/* Name */}
          <h1
            className="font-extrabold leading-none mb-3"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
              background:
                "linear-gradient(135deg, #ffffff 30%, #a5b4fc 70%, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Jay Kamal
          </h1>

          {/* Role */}
          <h2
            className="font-semibold mb-5 relative inline-block"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#94a3b8",
              letterSpacing: "0.01em",
            }}
          >
            Full Stack Developer
            <span
              className="absolute left-0 bottom-[-4px] h-[2px] w-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #6366f1, #a855f7, transparent)",
              }}
            />
          </h2>

          {/* Summary */}
          <p
            className="mb-8 max-w-xl"
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            I’m a Full Stack Developer focused on building modern, responsive,
            and scalable web applications. I specialize in crafting clean user
            interfaces with React and developing powerful backend systems using
            Node.js and Django. My goal is to deliver fast, secure, and
            user-friendly products with maintainable code.
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <p
              className="text-xs font-semibold mb-3"
              style={{
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#cbd5e1",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.15)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                    e.currentTarget.style.color = "#a5b4fc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#cbd5e1";
                  }}
                >
                  <span style={{ fontSize: "15px" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={jayResume}
              download="Jay_Kamal_Resume.pdf"
              className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                fontSize: "0.95rem",
                boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              }}
            >
              <span>↓</span> Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              style={{
                background: "transparent",
                color: "#e2e8f0",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Me →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{
          animation: "bounce 2s infinite",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
