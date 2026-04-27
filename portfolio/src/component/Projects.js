import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowUpRight, } from "lucide-react";
import { FaGithub} from "react-icons/fa";


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    /* 🔥 LOCK BODY SCROLL WHEN POPUP OPENS */
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "0px";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        }

        /* cleanup */
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        };
    }, [selectedProject]);

    const projects = [
        {
            name: "Meeting Management",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
            category: "Full-Stack",
            desc: "Modern Meeting management system with responsive layout and premium UI.",
            tech: ["React.js", "Tailwind CSS", "Express", "MongDB"],
            live: "https://backend-mom.vercel.app",
            GitHub: "https://github.com/Jarvish1xyz/Backend-MOM",
            featured: true,
        },
        {
            name: "Bhagavad Gita",
            image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
            category: "Frontend Project",
            desc: "A website where you can read whole Bhagavad Gita at any time.",
            tech: ["React.js", "CSS", "Bootstrap", "JavaScript"],
            live: "https://bhagvad-gitaa.netlify.app",
            GitHub: "https://github.com/Jarvish1xyz/Bhagavad_Gita",
        },
        {
            name: "Portfolio Website",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
            category: "Frontend",
            desc: "Modern glassmorphism portfolio built with smooth animations, responsive layout and premium UI.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion"],
            live: "",
            GitHub: "https://github.com/Jarvish1xyz/Portfolio",
        },
        {
            name: "Old Portfolio Website",
            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
            category: "UI Design",
            desc: "Simple portfolio website",
            tech: ["Html", "CSS", "Javascript"],
            live: "https://jarvish1xyzportfolio.netlify.app",
            GitHub: "https://github.com/Jarvish1xyz/Old_Portfolio",
        },
    ];

    return (
        <section
            id="projects"
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
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Projects
                        </span>
                    </h2>

                    <p className="text-white/50 mt-5 max-w-2xl mx-auto">
                        Some projects where I transformed ideas into polished digital
                        experiences.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[250px] gap-6">
                    {/* Featured Big Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedProject(projects[0])}
                        className="sm:col-span-2 md:col-span-2 md:row-span-2 group cursor-pointer rounded-3xl overflow-hidden relative border border-white/10 bg-white/5 backdrop-blur-xl"
                    >
                        <img
                            src={projects[0].image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs w-fit mb-4">
                                Featured
                            </span>

                            <h3 className="text-3xl font-bold">{projects[0].name}</h3>
                            <p className="text-white/60 mt-2">{projects[0].category}</p>
                        </div>
                    </motion.div>

                    {/* Other Cards */}
                    {projects.slice(1).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer rounded-3xl overflow-hidden relative border border-white/10 bg-white/5 backdrop-blur-xl"
                        >
                            <img
                                src={project.image}
                                alt=""
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex items-end">
                                <div>
                                    <h3 className="text-xl font-semibold">{project.name}</h3>
                                    <p className="text-white/50 text-sm mt-1">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center px-4 pt-24 pb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.85, y: 40, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.7)]"
                        >
                            <div className="grid md:grid-cols-2">
                                {/* Image */}
                                <div className="relative h-[320px] md:h-full">
                                    <img
                                        src={selectedProject.image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6 md:p-8 overflow-y-auto max-h-[80vh]">
                                    <motion.span
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="px-3 py-1 rounded-full bg-white/10 text-sm inline-block mb-4"
                                    >
                                        {selectedProject.category}
                                    </motion.span>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl font-bold mb-4"
                                    >
                                        {selectedProject.name}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                        className="text-white/65 leading-relaxed mb-8"
                                    >
                                        {selectedProject.desc}
                                    </motion.p>

                                    {/* Tech */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.45 }}
                                        className="rounded-3xl bg-white/5 border border-white/10 p-5 mb-8"
                                    >
                                        <div className="flex items-center gap-2 mb-4 text-cyan-300">
                                            <Code2 size={18} />
                                            <p>Technologies Used</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-2 rounded-full bg-white/10 text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.55 }}
                                        className="flex gap-4 flex-wrap"
                                    >
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 transition"
                                        >
                                            ← Go Back
                                        </button>

                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
                                        >
                                            Visit Site <ArrowUpRight size={18} />
                                        </a>

                                        <a
                                            href={selectedProject.GitHub}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 transition flex items-center gap-2"
                                        >
                                            <FaGithub size={18} />
                                            Code
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}