import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Jay6291" target="_blank">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/jay-kamal-54234831b" target="_blank">
          <FaLinkedin size={24} />
        </a>
        <a href="#">
          <FaTwitter size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jay Kamal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
