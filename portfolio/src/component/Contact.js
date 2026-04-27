import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";


export default function Contact({ sectionRef }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const myEmail = "milans0415@gmail.com";
  const myPhone = "+919998106689";

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      link: "https://github.com/Jarvish1xyz",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/sinha-milan-325940321/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/sinha__milan6",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      templateParams,
      process.env.REACT_APP_EMAILJS_KEY
    )
      .then((response) => {
        alert("Message Sent Successfully!");
        console.log(response);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen bg-[#050505] text-white px-4 sm:px-6 md:px-16 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 tracking-[4px] uppercase text-sm mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Connect
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Email */}
            <a
              href={`mailto:${myEmail}?subject=Portfolio Inquiry`}
              className="block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-300">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-white/45 text-sm">
                    Email Me
                  </p>
                  <p className="text-white/85 font-medium">
                    {myEmail}
                  </p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${myPhone}`}
              className="block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-white/45 text-sm">
                    Call Me
                  </p>
                  <p className="text-white/85 font-medium">
                    {myPhone}
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-white/45 text-sm">
                    Location
                  </p>
                  <p className="text-white/85 font-medium">
                    Rajkot, Gujrat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/15 transition flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send Message
            </h3>

            <form className="space-y-5" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-400"
              />

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}