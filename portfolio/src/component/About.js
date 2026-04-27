import React from "react";
import { motion } from "framer-motion";
import {
  User2,
  FolderGit2,
  Code2,
  Rocket,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <FolderGit2 size={26} />,
      number: "2+",
      title: "Projects Built",
    },
    {
      icon: <Code2 size={26} />,
      number: "10+",
      title: "Technologies Explored",
    },
    {
      icon: <Rocket size={26} />,
      number: "100%",
      title: "Growth Mindset",
    },
    {
      icon: <GraduationCap size={26} />,
      number: "B.Tech",
      title: "CSE Student",
    },
  ];

  const timeline = [
    "Started with HTML, CSS & simple websites.",
    "Moved into JavaScript and responsive UI building.",
    "Now building React projects Backend in Express with premium interfaces.",
    "Currently learning Linux & cybersecurity.",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#050505] text-white px-4 sm:px-6 md:px-16 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-5 right-110 w-72 h-72 bg-blue-500/20 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 tracking-[4px] uppercase text-sm mb-3">
            Get To Know Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Me
            </span>
          </h2>

          <p className="text-white/50 mt-5 max-w-2xl mx-auto">
            Not just a developer — a learner focused on building useful and
            beautiful digital experiences.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT STORY CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-6 md:p-8 shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-black">
                <User2 />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Who Am I?</h3>
                <p className="text-white/50 text-sm">Developer Journey</p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-5">
              Hello, I'm <span className="text-blue-400">Milan</span>, a
              passionate developer who enjoys turning ideas into elegant web
              experiences.
            </p>

            <p className="text-white/60 leading-relaxed mb-5">
              I love modern UI, smooth interactions, clean code structure and
              learning technologies that solve real-world problems.
            </p>

            <p className="text-white/60 leading-relaxed">
              My goal is to become a strong full-stack engineer and build
              products that people genuinely enjoy using.
            </p>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/40">
                Built with curiosity, consistency & coffee ☕
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:scale-105 transition duration-300"
                >
                  <div className="text-blue-400 mb-4">{item.icon}</div>

                  <h4 className="text-3xl font-bold">{item.number}</h4>

                  <p className="text-white/55 mt-2 text-sm">{item.title}</p>
                </div>
              ))}
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-cyan-300" size={24} />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>

              <div className="space-y-5">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"></div>
                      {index !== timeline.length - 1 && (
                        <div className="w-[2px] h-full bg-white/10 mt-2"></div>
                      )}
                    </div>

                    <p className="text-white/65 leading-relaxed pb-4">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}