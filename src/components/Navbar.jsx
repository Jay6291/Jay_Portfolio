import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; // React Router Link

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Jay6291",
      hoverBg: "rgba(99,102,241,0.14)",
      hoverBorder: "rgba(99,102,241,0.35)",
      hoverColor: "#a5b4fc",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/jay-kamal-54234831b/",
      hoverBg: "rgba(168,85,247,0.14)",
      hoverBorder: "rgba(168,85,247,0.35)",
      hoverColor: "#d8b4fe",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div
        className="absolute inset-0 backdrop-blur-xl border-b"
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Navbar Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-wide"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 25%, #a5b4fc 65%, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Jay Kamal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-semibold text-slate-300 hover:text-white transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = social.hoverBg;
                e.currentTarget.style.borderColor = social.hoverBorder;
                e.currentTarget.style.color = social.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t backdrop-blur-xl"
          style={{
            background: "rgba(15, 23, 42, 0.92)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-slate-300 font-semibold text-lg hover:text-white transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Social */}
            <div className="flex gap-4 mt-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
