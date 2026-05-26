import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xihril7",
        "template_42qpu7n",
        form.current,
        "rUmZFDXbrrMN542Gl",
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Message Failed ❌ Try Again!");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600 opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Have a project or want to collaborate? Feel free to connect with me.
            I’m always open to new opportunities.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Get in <span className="text-blue-400">Touch</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              You can reach me through email, social platforms, or WhatsApp. I
              respond quickly and love discussing new ideas and projects.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                <FaEnvelope className="text-2xl text-blue-400" />
              </div>

              <div>
                <p className="text-gray-300 text-sm">Email</p>

                <p className="font-semibold text-white">
                  jaykamal63947@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10">
                <FaPhoneAlt className="text-2xl text-purple-400" />
              </div>

              <div>
                <p className="text-gray-300 text-sm">Phone</p>

                <p className="font-semibold text-white">+91 6394715954</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                <FaMapMarkerAlt className="text-2xl text-blue-400" />
              </div>

              <div>
                <p className="text-gray-300 text-sm">Location</p>

                <p className="font-semibold text-white">Kanpur, India</p>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Social Profiles
            </h4>

            <div className="flex flex-col gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jay-kamal-6394j"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-3xl text-blue-400" />

                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>

                    <p className="text-sm text-gray-400">
                      Professional Profile
                    </p>
                  </div>
                </div>

                <span className="text-gray-400 text-sm">Visit →</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jaykamal43?igsh=MTNwcWZkdGY1MG55aQ=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <FaInstagram className="text-3xl text-pink-400" />

                  <div>
                    <p className="font-semibold text-white">Instagram</p>

                    <p className="text-sm text-gray-400">Personal Updates</p>
                  </div>
                </div>

                <span className="text-gray-400 text-sm">Visit →</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Jay6291"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gray-300 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <FaGithub className="text-3xl text-gray-200" />

                  <div>
                    <p className="font-semibold text-white">GitHub</p>

                    <p className="text-sm text-gray-400">Projects & Code</p>
                  </div>
                </div>

                <span className="text-gray-400 text-sm">Visit →</span>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/916394715954?text=Hello%20Jay%2C%20I%20want%20to%20connect%20with%20you"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-3 w-full py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Form */}
          <div className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Send a <span className="text-purple-400">Message</span>
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="text-sm text-gray-300">Your Name</label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Your Email</label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-blue-400 text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/20"
              >
                Send Message 🚀
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-6 text-center">
              I usually reply within{" "}
              <span className="text-white font-semibold">24 hours</span>.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kanpur,India&output=embed"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jay Kamal. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
